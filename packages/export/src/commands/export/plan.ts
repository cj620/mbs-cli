import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { isDatabaseSource, previewSource } from '../../sources/index.js'
import { buildDatabaseCursorSql, quoteSqlIdentifier } from '../../sources/database.js'
import { newPlanId, savePlan } from '../../plan-store.js'
import type {
  ApiSourceConfig,
  DatabaseDialect,
  PaginationSpec,
  PlanRecord,
  SourceConfig,
} from '../../types.js'

const DEFAULT_TTL_SEC = 3600
const MAX_DATABASE_SOURCE_OPTION_LENGTH = 200
const DEFAULT_DATABASE_BATCH_SIZE = 1000
const MAX_BATCH_SIZE = 10_000

/**
 * Normalizes one optional data-source selector before it enters a saved plan.
 *
 * @param name Public flag name used in validation errors.
 * @param value Parsed oclif value.
 * @returns Trimmed selector or undefined when absent.
 */
function cleanDatabaseSourceOption(name: string, value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (!trimmed) return undefined
  if (trimmed.length > MAX_DATABASE_SOURCE_OPTION_LENGTH) {
    throw new Error(`${name} must be ${MAX_DATABASE_SOURCE_OPTION_LENGTH} characters or fewer`)
  }
  return trimmed
}

/**
 * Validates paired database source selectors and returns only non-empty values.
 *
 * @param flags Parsed export-plan flags.
 * @returns Normalized host, database, and optional schema.
 */
function databaseSourceOptions(flags: Record<string, unknown>): {
  host?: string
  database?: string
  schema?: string
} {
  const host = cleanDatabaseSourceOption('host', flags.host)
  const database = cleanDatabaseSourceOption('database', flags.database)
  const schema = cleanDatabaseSourceOption('schema', flags.schema)
  if ((host && !database) || (!host && database)) {
    throw new Error('host and database must be provided together')
  }
  return {
    ...(host ? { host } : {}),
    ...(database ? { database } : {}),
    ...(schema ? { schema } : {}),
  }
}

export default class ExportPlan extends MBSCommand {
  static description =
    'Preview an export: fetch sample rows + columns, save a plan id. User confirms, then `mbs export run --plan <id>`.'

  static examples = [
    'mbs export plan --source database --sql "SELECT id,name FROM db.orders LIMIT 10000"',
    'mbs export plan --source database --host pg-main --database orders --sql "SELECT id,created_at,name FROM orders" --cursor-columns created_at,id --cursor-dialect postgresql --batch-size 1000',
    'mbs export plan --source api --method GET --path /v1/orders --pagination \'{"type":"page","pageParam":"page","sizeParam":"pageSize","pageSize":100,"dataPath":"data.list","totalPath":"data.total"}\'',
  ]

  static flags = {
    source: Flags.string({ required: true, options: ['database', 'doris', 'api'], description: 'Data source type' }),
    // database
    sql: Flags.string({ description: '[database] SELECT SQL' }),
    host: Flags.string({ description: '[database] Target data source host identifier. Use with --database.' }),
    database: Flags.string({ description: '[database] Target database name. Use with --host.' }),
    schema: Flags.string({ description: '[database] Target schema for ambiguous table names.' }),
    'cursor-columns': Flags.string({
      description: '[database] Comma-separated stable unique keyset cursor columns for resumable batches.',
    }),
    'cursor-dialect': Flags.string({
      options: ['doris', 'mysql', 'postgresql'],
      description: '[database] SQL identifier dialect. Required for cursor pagination on external sources.',
    }),
    'batch-size': Flags.integer({
      description: `[database] Cursor page size (default ${DEFAULT_DATABASE_BATCH_SIZE}, max ${MAX_BATCH_SIZE}).`,
    }),
    // api
    method: Flags.string({ options: ['GET', 'POST'], description: '[api] HTTP method' }),
    path: Flags.string({ description: '[api] API path, e.g. /v1/orders' }),
    params: Flags.string({ description: '[api] Query params JSON' }),
    body: Flags.string({ description: '[api] Request body JSON (POST)' }),
    pagination: Flags.string({
      description:
        '[api] Pagination JSON. Examples: {"type":"none"} | {"type":"page",...} | {"type":"cursor",...}',
    }),
    // common
    sample: Flags.integer({ default: 5, description: 'Sample row count for preview' }),
    ttl: Flags.integer({ default: DEFAULT_TTL_SEC, description: 'Plan TTL in seconds' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ExportPlan)
    if (!Number.isInteger(flags.sample) || flags.sample < 1 || flags.sample > 100) {
      throw new Error('--sample must be an integer between 1 and 100')
    }
    if (!Number.isInteger(flags.ttl) || flags.ttl < 1) throw new Error('--ttl must be a positive integer')
    const source = this.buildSource(flags)
    const preview = await previewSource(this.client, source, flags.sample)
    if (isDatabaseSource(source) && source.pagination) {
      buildDatabaseCursorSql(source, preview.columns)
    }

    const now = new Date()
    const plan: PlanRecord = {
      id: newPlanId(),
      createdAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + flags.ttl * 1000).toISOString(),
      source,
      columns: preview.columns,
      estimatedRows: preview.estimatedRows,
      sampleRows: preview.sampleRows,
    }
    const file = savePlan(plan)

    this.output({
      planId: plan.id,
      planFile: file,
      expiresAt: plan.expiresAt,
      source: this.summarizeSource(source),
      columns: plan.columns,
      estimatedRows: plan.estimatedRows,
      sampleRows: plan.sampleRows,
      nextStep: `Show user the columns + samples. After user confirms, run: mbs export run --plan ${plan.id} --out <file.xlsx>`,
    })
  }

  /**
   * Converts validated CLI flags into the immutable source contract saved with the plan.
   *
   * @param flags Parsed oclif values.
   * @returns Database or API source configuration.
   * @throws Error For missing source fields, ambiguous cursor dialect, or invalid pagination metadata.
   */
  private buildSource(flags: Record<string, unknown>): SourceConfig {
    if (flags.source === 'database' || flags.source === 'doris') {
      const sql = typeof flags.sql === 'string' ? flags.sql.trim() : ''
      if (!sql) throw new Error('--sql is required when --source=database')
      const sourceOptions = databaseSourceOptions(flags)
      const cursorColumns = parseCursorColumns(flags['cursor-columns'])
      if (cursorColumns.length === 0) {
        if (flags['cursor-dialect'] !== undefined || flags['batch-size'] !== undefined) {
          throw new Error('--cursor-dialect and --batch-size require --cursor-columns')
        }
        return { type: 'database', sql, ...sourceOptions }
      }
      const dialect = flags['cursor-dialect'] as DatabaseDialect | undefined
      if (sourceOptions.host && !dialect) {
        throw new Error('--cursor-dialect is required for cursor pagination on an external database source')
      }
      const pageSize = typeof flags['batch-size'] === 'number'
        ? flags['batch-size']
        : DEFAULT_DATABASE_BATCH_SIZE
      if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > MAX_BATCH_SIZE) {
        throw new Error(`--batch-size must be an integer between 1 and ${MAX_BATCH_SIZE}`)
      }
      for (const column of cursorColumns) quoteSqlIdentifier(column, dialect ?? 'doris')
      return {
        type: 'database',
        sql,
        ...sourceOptions,
        pagination: {
          type: 'cursor',
          columns: cursorColumns,
          dialect: dialect ?? 'doris',
          pageSize,
        },
      }
    }
    const method = (flags.method as string | undefined) ?? 'GET'
    if (method !== 'GET' && method !== 'POST') throw new Error('--method must be GET or POST')
    const path = typeof flags.path === 'string' ? flags.path : ''
    if (!path) throw new Error('--path is required when --source=api')
    const pagination = this.parsePagination(flags.pagination as string | undefined)
    const api: ApiSourceConfig = {
      type: 'api',
      method,
      path,
      pagination,
    }
    if (typeof flags.params === 'string') api.params = JSON.parse(flags.params) as Record<string, unknown>
    if (typeof flags.body === 'string') api.body = JSON.parse(flags.body) as Record<string, unknown>
    return api
  }

  /**
   * Parses and validates API pagination JSON before it becomes a saved plan contract.
   *
   * @param input Optional raw JSON flag.
   * @returns Validated none, page-number, or cursor pagination metadata.
   */
  private parsePagination(input: string | undefined): PaginationSpec {
    if (!input) return { type: 'none' }
    const parsed = JSON.parse(input) as PaginationSpec
    if (parsed.type === 'none') return parsed
    if (parsed.type === 'page') {
      if (!parsed.pageParam || !parsed.sizeParam || !parsed.dataPath) {
        throw new Error('Page pagination requires pageParam, sizeParam, and dataPath')
      }
      validateBatchSize(parsed.pageSize, 'pagination.pageSize')
      if (parsed.startPage !== undefined && (!Number.isInteger(parsed.startPage) || parsed.startPage < 0)) {
        throw new Error('pagination.startPage must be a non-negative integer')
      }
      return parsed
    }
    if (parsed.type === 'cursor') {
      if (!parsed.cursorRequestPath || !parsed.cursorResponsePath || !parsed.dataPath) {
        throw new Error('Cursor pagination requires cursorRequestPath, cursorResponsePath, and dataPath')
      }
      if (parsed.pageSize !== undefined) validateBatchSize(parsed.pageSize, 'pagination.pageSize')
      return parsed
    }
    throw new Error('--pagination JSON type must be none, page, or cursor')
  }

  /**
   * Produces a short plan preview without exposing the complete SQL or request payload.
   *
   * @param source Saved source configuration.
   * @returns Safe source metadata for local command output.
   */
  private summarizeSource(source: SourceConfig): Record<string, unknown> {
    if (isDatabaseSource(source)) {
      const sql = source.sql
      return {
        type: 'database',
        sql: sql.length > 200 ? `${sql.slice(0, 200)}...` : sql,
        ...(source.host ? { host: source.host } : {}),
        ...(source.database ? { database: source.database } : {}),
        ...(source.schema ? { schema: source.schema } : {}),
        ...(source.pagination ? {
          pagination: source.pagination.type,
          cursorColumns: source.pagination.columns,
          batchSize: source.pagination.pageSize,
          dialect: source.pagination.dialect,
        } : {}),
      }
    }
    return {
      type: 'api',
      method: source.method,
      path: source.path,
      pagination: source.pagination.type,
    }
  }
}

/**
 * Parses a comma-separated cursor-column option into a unique ordered tuple.
 *
 * @param value Parsed flag value.
 * @returns Ordered cursor columns, or an empty array when pagination is not requested.
 */
function parseCursorColumns(value: unknown): string[] {
  if (value === undefined) return []
  if (typeof value !== 'string') throw new Error('--cursor-columns must be a comma-separated string')
  const columns = value.split(',').map((column) => column.trim()).filter(Boolean)
  if (columns.length === 0) throw new Error('--cursor-columns must include at least one column')
  if (new Set(columns).size !== columns.length) throw new Error('--cursor-columns must not contain duplicates')
  return columns
}

/**
 * Enforces a finite per-request batch size for API and database pagination.
 *
 * @param value Candidate page size.
 * @param name Configuration path used in validation errors.
 */
function validateBatchSize(value: number, name: string): void {
  if (!Number.isInteger(value) || value < 1 || value > MAX_BATCH_SIZE) {
    throw new Error(`${name} must be an integer between 1 and ${MAX_BATCH_SIZE}`)
  }
}
