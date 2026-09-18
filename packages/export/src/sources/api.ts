import type { APIClient } from '@mb-it-org/shared'
import type {
  ApiSourceConfig,
  ColumnSpec,
  PaginationCursor,
  PaginationPage,
  PreviewResult,
  Row,
  SourceBatch,
  SourceResumeState,
} from '../types.js'

function getPath(obj: unknown, path: string): unknown {
  if (!path) return obj
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

function asRows(value: unknown): Row[] {
  if (!Array.isArray(value)) return []
  return value.filter((r): r is Row => r !== null && typeof r === 'object')
}

async function fetchPage(
  client: APIClient,
  source: ApiSourceConfig,
  extraParams: Record<string, unknown>,
  extraBody: Record<string, unknown>,
): Promise<unknown> {
  const params = { ...(source.params ?? {}), ...extraParams }
  if (source.method === 'GET') {
    return client.request('GET', source.path, { params })
  }
  const body = { ...(source.body ?? {}), ...extraBody }
  return client.request('POST', source.path, { params, body })
}

function injectPageParams(
  source: ApiSourceConfig,
  pagination: PaginationPage,
  page: number,
): { params: Record<string, unknown>; body: Record<string, unknown> } {
  const slot = source.method === 'GET' ? 'params' : 'body'
  const params: Record<string, unknown> = {}
  const body: Record<string, unknown> = {}
  const target = slot === 'params' ? params : body
  target[pagination.pageParam] = page
  target[pagination.sizeParam] = pagination.pageSize
  return { params, body }
}

function injectCursorParams(
  source: ApiSourceConfig,
  pagination: PaginationCursor,
  cursor: unknown,
): { params: Record<string, unknown>; body: Record<string, unknown> } {
  const slot = source.method === 'GET' ? 'params' : 'body'
  const params: Record<string, unknown> = {}
  const body: Record<string, unknown> = {}
  const target = slot === 'params' ? params : body
  if (cursor !== undefined && cursor !== null) target[pagination.cursorRequestPath] = cursor
  if (pagination.sizeParam && pagination.pageSize) target[pagination.sizeParam] = pagination.pageSize
  return { params, body }
}

async function fetchFirstChunk(client: APIClient, source: ApiSourceConfig): Promise<{ raw: unknown; rows: Row[]; total: number | null }> {
  let raw: unknown
  let rows: Row[]
  let total: number | null = null
  if (source.pagination.type === 'none') {
    raw = await fetchPage(client, source, {}, {})
    rows = asRows(getPath(raw, dataPathOf(source)))
  } else if (source.pagination.type === 'page') {
    const startPage = source.pagination.startPage ?? 1
    const inj = injectPageParams(source, source.pagination, startPage)
    raw = await fetchPage(client, source, inj.params, inj.body)
    rows = asRows(getPath(raw, source.pagination.dataPath))
    if (source.pagination.totalPath) {
      const t = getPath(raw, source.pagination.totalPath)
      if (typeof t === 'number') total = t
    }
  } else {
    const inj = injectCursorParams(source, source.pagination, undefined)
    raw = await fetchPage(client, source, inj.params, inj.body)
    rows = asRows(getPath(raw, source.pagination.dataPath))
  }
  return { raw, rows, total }
}

function dataPathOf(source: ApiSourceConfig): string {
  if (source.pagination.type === 'page' || source.pagination.type === 'cursor') return source.pagination.dataPath
  return ''
}

function inferColumns(rows: Row[]): ColumnSpec[] {
  const keys = new Set<string>()
  for (const row of rows) for (const k of Object.keys(row)) keys.add(k)
  return [...keys].map((name) => ({ name }))
}

export async function previewApi(
  client: APIClient,
  source: ApiSourceConfig,
  sampleSize: number,
): Promise<PreviewResult> {
  const { rows, total } = await fetchFirstChunk(client, source)
  return {
    columns: inferColumns(rows),
    estimatedRows: total,
    sampleRows: rows.slice(0, sampleSize),
  }
}

/**
 * Streams every API batch through the compatibility row interface with a finite pagination guard.
 *
 * @param client Authenticated MBS transport.
 * @param source API source and pagination definition.
 * @param _columns Retained compatibility argument; API rows already carry named properties.
 * @returns Asynchronous row stream.
 */
export async function* runApi(client: APIClient, source: ApiSourceConfig, _columns: ColumnSpec[]): AsyncIterable<Row> {
  let state: SourceResumeState | undefined
  for (let batch = 0; batch < 1_000_000; batch += 1) {
    const result = await fetchApiBatch(client, source, state)
    for (const row of result.rows) yield row
    state = result.nextState
    if (state.done) return
  }
  throw new Error('API pagination exceeded the maximum batch count')
}

/**
 * Fetches exactly one API page and returns the durable state required for the next page.
 *
 * <p>Page-number and cursor protocols validate forward progress. The function contains no pagination loop,
 * allowing the export task module to persist rows before it commits the returned resume state.</p>
 *
 * @param client Authenticated MBS transport.
 * @param source API request and pagination metadata.
 * @param state Last successfully persisted source state, omitted for the first batch.
 * @returns Current rows and next durable state.
 * @throws Error When resume state does not match the source or a cursor claims more data without advancing.
 */
export async function fetchApiBatch(
  client: APIClient,
  source: ApiSourceConfig,
  state?: SourceResumeState,
): Promise<SourceBatch> {
  if (state?.done) return { rows: [], nextState: state }
  if (source.pagination.type === 'none') {
    if (state && state.type !== 'api-none') throw new Error('API resume state does not match non-paginated source')
    const raw = await fetchPage(client, source, {}, {})
    return {
      rows: asRows(getPath(raw, dataPathOf(source))),
      nextState: { type: 'api-none', done: true },
    }
  }
  if (source.pagination.type === 'page') {
    if (state && state.type !== 'api-page') throw new Error('API resume state does not match page pagination')
    const pagination = source.pagination
    const page = state?.nextPage ?? pagination.startPage ?? 1
    const injected = injectPageParams(source, pagination, page)
    const raw = await fetchPage(client, source, injected.params, injected.body)
    const rows = asRows(getPath(raw, pagination.dataPath))
    const totalSeen = (state?.totalSeen ?? 0) + rows.length
    let declaredTotal = state?.declaredTotal ?? null
    if (declaredTotal === null && pagination.totalPath) {
      const total = getPath(raw, pagination.totalPath)
      if (typeof total === 'number' && Number.isFinite(total)) declaredTotal = total
    }
    const hasMore = pagination.hasMorePath ? Boolean(getPath(raw, pagination.hasMorePath)) : undefined
    if (hasMore === true && rows.length === 0) {
      throw new Error('API page pagination reported more data without returning rows')
    }
    const done = hasMore === false
      || (hasMore === undefined && rows.length < pagination.pageSize)
      || (declaredTotal !== null && totalSeen >= declaredTotal)
    return {
      rows,
      nextState: {
        type: 'api-page',
        nextPage: page + 1,
        totalSeen,
        declaredTotal,
        done,
      },
    }
  }

  if (state && state.type !== 'api-cursor') throw new Error('API resume state does not match cursor pagination')
  const pagination = source.pagination
  const injected = injectCursorParams(source, pagination, state?.cursor)
  const raw = await fetchPage(client, source, injected.params, injected.body)
  const rows = asRows(getPath(raw, pagination.dataPath))
  const next = getPath(raw, pagination.cursorResponsePath)
  const terminal = next === undefined || next === null || next === ''
  if (!terminal && state?.cursor !== undefined && Object.is(next, state.cursor)) {
    throw new Error('API cursor did not advance')
  }
  return {
    rows,
    nextState: {
      type: 'api-cursor',
      ...(terminal ? {} : { cursor: next }),
      totalSeen: (state?.totalSeen ?? 0) + rows.length,
      done: terminal,
    },
  }
}
