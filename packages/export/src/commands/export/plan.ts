import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'
import { previewSource } from '../../sources/index.js'
import { newPlanId, savePlan } from '../../plan-store.js'
import type { ApiSourceConfig, PaginationSpec, PlanRecord, SourceConfig } from '../../types.js'

const DEFAULT_TTL_SEC = 3600

export default class ExportPlan extends MBSCommand {
  static description =
    'Preview an export: fetch sample rows + columns, save a plan id. User confirms, then `mbs export run --plan <id>`.'

  static examples = [
    'mbs export plan --source doris --sql "SELECT id,name FROM db.orders LIMIT 10000"',
    'mbs export plan --source api --method GET --path /v1/orders --pagination \'{"type":"page","pageParam":"page","sizeParam":"pageSize","pageSize":100,"dataPath":"data.list","totalPath":"data.total"}\'',
  ]

  static flags = {
    source: Flags.string({ required: true, options: ['doris', 'api'], description: 'Data source type' }),
    // doris
    sql: Flags.string({ description: '[doris] SELECT SQL' }),
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
    const source = this.buildSource(flags)
    const preview = await previewSource(this.client, source, flags.sample)

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

  private buildSource(flags: Record<string, unknown>): SourceConfig {
    if (flags.source === 'doris') {
      const sql = typeof flags.sql === 'string' ? flags.sql.trim() : ''
      if (!sql) throw new Error('--sql is required when --source=doris')
      return { type: 'doris', sql }
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

  private parsePagination(input: string | undefined): PaginationSpec {
    if (!input) return { type: 'none' }
    const parsed = JSON.parse(input) as PaginationSpec
    if (!parsed.type) throw new Error('--pagination JSON must include `type`')
    return parsed
  }

  private summarizeSource(source: SourceConfig): Record<string, unknown> {
    if (source.type === 'doris') {
      const sql = source.sql
      return { type: 'doris', sql: sql.length > 200 ? `${sql.slice(0, 200)}...` : sql }
    }
    return {
      type: 'api',
      method: source.method,
      path: source.path,
      pagination: source.pagination.type,
    }
  }
}
