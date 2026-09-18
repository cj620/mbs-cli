import type { Readable } from 'node:stream'
import type { APIClient } from '@mb-it-org/shared'
import type {
  ColumnSpec,
  DatabaseDialect,
  DatabaseSourceConfig,
  PreviewResult,
  Row,
  SourceBatch,
  SourceResumeState,
} from '../types.js'

const DATABASE_QUERY_PATH = '/cli-service/cli/doris/query'

interface NdjsonMsg {
  type: 'header' | 'data' | 'end' | 'error'
  columns?: string[]
  row?: Row
  message?: string
  totalRows?: number
}

const MAX_CURSOR_PAGE_SIZE = 10_000

/**
 * Quotes one result-column identifier for the selected database dialect.
 *
 * <p>The function deliberately accepts only a single identifier, not expressions or qualified paths. This
 * keeps cursor metadata separate from executable SQL and prevents callers from smuggling ordering clauses
 * through a column option.</p>
 *
 * @param identifier Physical or projected column identifier.
 * @param dialect Explicit database dialect selected for the export source.
 * @returns Safely quoted identifier.
 * @throws Error When the value is empty, contains whitespace/control/quote characters, or exceeds 200 chars.
 */
export function quoteSqlIdentifier(identifier: string, dialect: DatabaseDialect): string {
  if (
    !identifier
    || identifier.length > 200
    || /[\s\u0000-\u001f`"]/.test(identifier)
  ) {
    throw new Error(`Unsafe SQL identifier: ${identifier}`)
  }
  const quote = dialect === 'postgresql' ? '"' : '`'
  return `${quote}${identifier}${quote}`
}

/**
 * Builds one deterministic keyset page around a caller-provided read-only base query.
 *
 * <p>The base query remains semantically intact inside a derived table. The outer query projects explicit
 * columns, applies a lexicographic cursor predicate after the first page, orders by the same cursor tuple,
 * and enforces a bounded LIMIT. Cursor columns must be present in the projected result.</p>
 *
 * @param source Database source with explicit cursor pagination metadata.
 * @param outputColumns Columns discovered during the export preview.
 * @param cursorValues Last successfully persisted cursor tuple, omitted for the first page.
 * @returns SQL for exactly one keyset page.
 * @throws Error For missing pagination metadata, unsafe identifiers, invalid page sizes, missing cursor
 * columns, unsupported cursor values, or cursor arity mismatch.
 */
export function buildDatabaseCursorSql(
  source: DatabaseSourceConfig,
  outputColumns: ColumnSpec[],
  cursorValues?: unknown[],
): string {
  const pagination = source.pagination
  if (!pagination || pagination.type !== 'cursor') throw new Error('Database cursor pagination is required')
  if (!Number.isInteger(pagination.pageSize) || pagination.pageSize < 1 || pagination.pageSize > MAX_CURSOR_PAGE_SIZE) {
    throw new Error(`Database cursor pageSize must be an integer between 1 and ${MAX_CURSOR_PAGE_SIZE}`)
  }
  if (pagination.columns.length === 0) throw new Error('At least one database cursor column is required')
  const outputNames = new Set(outputColumns.map((column) => column.name))
  for (const column of pagination.columns) {
    if (!outputNames.has(column)) throw new Error(`Cursor column is missing from query output: ${column}`)
  }
  if (cursorValues && cursorValues.length !== pagination.columns.length) {
    throw new Error(`Cursor value count must match ${pagination.columns.length} cursor columns`)
  }

  const alias = quoteSqlIdentifier('__mbs_page', pagination.dialect)
  const project = outputColumns
    .map((column) => `${alias}.${quoteSqlIdentifier(column.name, pagination.dialect)}`)
    .join(', ')
  const cursorColumns = pagination.columns
    .map((column) => `${alias}.${quoteSqlIdentifier(column, pagination.dialect)}`)
  const predicate = cursorValues
    ? ` WHERE (${cursorColumns.join(', ')}) > (${cursorValues.map((value) => sqlLiteral(value, pagination.dialect)).join(', ')})`
    : ''
  const baseSql = source.sql.trim().replace(/;+\s*$/, '')
  return `SELECT ${project} FROM (${baseSql}) AS ${alias}${predicate} ORDER BY ${cursorColumns.join(', ')} LIMIT ${pagination.pageSize}`
}

/**
 * Serializes one cursor value as a SQL literal without accepting executable fragments.
 *
 * @param value Scalar cursor value read from the last persisted row.
 * @param dialect Database dialect used to escape string literals safely.
 * @returns SQL literal safe for the generated keyset predicate.
 * @throws Error When the value is null, non-finite, or non-scalar.
 */
function sqlLiteral(value: unknown, dialect: DatabaseDialect): string {
  if (typeof value === 'string') {
    if (value.includes('\u0000')) throw new Error('Cursor string values must not contain NUL characters')
    const escaped = dialect === 'postgresql'
      ? value.replace(/'/g, "''")
      : value.replace(/\\/g, '\\\\').replace(/'/g, "''")
    return `'${escaped}'`
  }
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE'
  throw new Error('Cursor values must be non-null strings, finite numbers, or booleans')
}

function queryBody(source: DatabaseSourceConfig): Record<string, string> {
  return {
    sql: source.sql,
    ...(source.host ? { host: source.host } : {}),
    ...(source.database ? { database: source.database } : {}),
    ...(source.schema ? { schema: source.schema } : {}),
  }
}

/**
 * Parses an NDJSON response without buffering the complete database result.
 *
 * @param stream Server response stream.
 * @returns Valid JSON messages in wire order.
 * @throws Error When any non-empty line is malformed, preventing silent row loss.
 */
async function* parseNdjson(stream: Readable): AsyncIterable<NdjsonMsg> {
  let buffer = ''
  for await (const chunk of stream) {
    buffer += Buffer.isBuffer(chunk) ? chunk.toString('utf8') : String(chunk)
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''
    for (const line of lines) {
      const t = line.trim()
      if (!t) continue
      try {
        yield JSON.parse(t) as NdjsonMsg
      } catch {
        throw new Error('Database query returned malformed NDJSON')
      }
    }
  }
  if (buffer.trim()) {
    try {
      yield JSON.parse(buffer.trim()) as NdjsonMsg
    } catch {
      throw new Error('Database query returned malformed NDJSON')
    }
  }
}

export async function previewDatabase(
  client: APIClient,
  source: DatabaseSourceConfig,
  sampleSize: number,
): Promise<PreviewResult> {
  const stream = (await client.postStream(DATABASE_QUERY_PATH, queryBody(source))) as Readable
  let columns: ColumnSpec[] = []
  const samples: Row[] = []
  for await (const msg of parseNdjson(stream)) {
    if (msg.type === 'error') {
      stream.destroy()
      throw new Error(`Database query error: ${msg.message ?? 'unknown'}`)
    }
    if (msg.type === 'header' && msg.columns) {
      columns = msg.columns.map((name) => ({ name }))
    } else if (msg.type === 'data' && msg.row) {
      samples.push(msg.row)
      if (samples.length >= sampleSize) {
        stream.destroy()
        break
      }
    } else if (msg.type === 'end') {
      break
    }
  }
  if (columns.length === 0 && samples[0]) {
    columns = Object.keys(samples[0]).map((name) => ({ name }))
  }
  return { columns, estimatedRows: null, sampleRows: samples }
}

/**
 * Streams one legacy database query while requiring an explicit terminal event.
 *
 * @param client Authenticated MBS transport.
 * @param source Database SQL and source identity.
 * @returns Asynchronous rows in server order.
 * @throws Error For server error messages, malformed NDJSON, or a truncated stream without `end`.
 */
export async function* runDatabase(client: APIClient, source: DatabaseSourceConfig): AsyncIterable<Row> {
  const stream = (await client.postStream(DATABASE_QUERY_PATH, queryBody(source))) as Readable
  let ended = false
  for await (const msg of parseNdjson(stream)) {
    if (msg.type === 'error') throw new Error(`Database query error: ${msg.message ?? 'unknown'}`)
    if (msg.type === 'data' && msg.row) yield msg.row
    if (msg.type === 'end') {
      ended = true
      break
    }
  }
  if (!ended) throw new Error('Database query stream ended without an end event')
}

/**
 * Fetches one bounded database keyset page and derives the next cursor from its final row.
 *
 * <p>The generated SQL uses the same ordered cursor tuple for filtering and sorting. A full page must advance
 * every cursor column tuple; an empty or short page is terminal. Rows remain bounded by the configured page
 * size so the export task can durably append one batch before advancing its checkpoint.</p>
 *
 * @param client Authenticated MBS transport.
 * @param source Database source with explicit cursor pagination metadata.
 * @param columns Previewed output columns used for an explicit outer projection.
 * @param state Last successfully persisted database cursor state.
 * @returns One row batch and its next durable cursor state.
 * @throws Error For mismatched state, server stream errors, missing/null cursor fields, or a stalled cursor.
 */
export async function fetchDatabaseCursorBatch(
  client: APIClient,
  source: DatabaseSourceConfig,
  columns: ColumnSpec[],
  state?: SourceResumeState,
): Promise<SourceBatch> {
  if (!source.pagination) throw new Error('Database cursor pagination is required')
  if (state && state.type !== 'database-cursor') throw new Error('Database resume state does not match source')
  if (state?.done) return { rows: [], nextState: state }

  const sql = buildDatabaseCursorSql(source, columns, state?.cursor)
  const pageSource = { ...source, sql, pagination: undefined }
  const stream = (await client.postStream(DATABASE_QUERY_PATH, queryBody(pageSource))) as Readable
  const rows: Row[] = []
  let ended = false
  for await (const message of parseNdjson(stream)) {
    if (message.type === 'error') throw new Error(`Database query error: ${message.message ?? 'unknown'}`)
    if (message.type === 'data' && message.row) {
      rows.push(message.row)
      if (rows.length > source.pagination.pageSize) {
        throw new Error('Database cursor page exceeded the configured page size')
      }
    }
    if (message.type === 'end') {
      ended = true
      break
    }
  }
  if (!ended) throw new Error('Database cursor stream ended without an end event')

  const totalSeen = (state?.totalSeen ?? 0) + rows.length
  const done = rows.length < source.pagination.pageSize
  if (rows.length === 0) {
    return { rows, nextState: { type: 'database-cursor', totalSeen, done: true } }
  }
  const lastRow = rows.at(-1) as Row
  const cursor = source.pagination.columns.map((column) => {
    const value = lastRow[column]
    if (value === undefined || value === null) throw new Error(`Database cursor value is missing: ${column}`)
    return value
  })
  if (state?.cursor && JSON.stringify(cursor) === JSON.stringify(state.cursor)) {
    throw new Error('Database cursor did not advance')
  }
  return {
    rows,
    nextState: { type: 'database-cursor', cursor, totalSeen, done },
  }
}
