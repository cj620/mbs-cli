import type { APIClient } from '@mb-it-org/shared'
import type {
  ApiSourceConfig,
  ColumnSpec,
  PaginationCursor,
  PaginationPage,
  PreviewResult,
  Row,
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

export async function* runApi(client: APIClient, source: ApiSourceConfig, _columns: ColumnSpec[]): AsyncIterable<Row> {
  if (source.pagination.type === 'none') {
    const raw = await fetchPage(client, source, {}, {})
    for (const r of asRows(getPath(raw, dataPathOf(source)))) yield r
    return
  }
  if (source.pagination.type === 'page') {
    const p = source.pagination
    let page = p.startPage ?? 1
    let totalSeen = 0
    let declaredTotal: number | null = null
    while (true) {
      const inj = injectPageParams(source, p, page)
      const raw = await fetchPage(client, source, inj.params, inj.body)
      const rows = asRows(getPath(raw, p.dataPath))
      if (declaredTotal === null && p.totalPath) {
        const t = getPath(raw, p.totalPath)
        if (typeof t === 'number') declaredTotal = t
      }
      for (const r of rows) yield r
      totalSeen += rows.length
      if (p.hasMorePath) {
        const more = getPath(raw, p.hasMorePath)
        if (!more) return
      } else if (rows.length < p.pageSize) {
        return
      } else if (declaredTotal !== null && totalSeen >= declaredTotal) {
        return
      }
      page += 1
    }
  } else {
    const p = source.pagination
    let cursor: unknown = undefined
    let first = true
    while (true) {
      const inj = injectCursorParams(source, p, first ? undefined : cursor)
      first = false
      const raw = await fetchPage(client, source, inj.params, inj.body)
      const rows = asRows(getPath(raw, p.dataPath))
      for (const r of rows) yield r
      const next = getPath(raw, p.cursorResponsePath)
      if (next === undefined || next === null || next === '' || next === cursor) return
      cursor = next
    }
  }
}
