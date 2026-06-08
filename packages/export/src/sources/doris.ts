import type { Readable } from 'node:stream'
import type { APIClient } from '@mb-it-org/shared'
import type { ColumnSpec, DorisSourceConfig, PreviewResult, Row } from '../types.js'

const DORIS_QUERY_PATH = '/gateway/cli-service/cli/doris/query'

interface NdjsonMsg {
  type: 'header' | 'data' | 'end' | 'error'
  columns?: string[]
  row?: Row
  message?: string
  totalRows?: number
}

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
        // ignore malformed line
      }
    }
  }
  if (buffer.trim()) {
    try {
      yield JSON.parse(buffer.trim()) as NdjsonMsg
    } catch {
      // ignore
    }
  }
}

export async function previewDoris(
  client: APIClient,
  source: DorisSourceConfig,
  sampleSize: number,
): Promise<PreviewResult> {
  const stream = (await client.postStream(DORIS_QUERY_PATH, { sql: source.sql })) as Readable
  let columns: ColumnSpec[] = []
  const samples: Row[] = []
  for await (const msg of parseNdjson(stream)) {
    if (msg.type === 'error') {
      stream.destroy()
      throw new Error(`Doris error: ${msg.message ?? 'unknown'}`)
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

export async function* runDoris(client: APIClient, source: DorisSourceConfig): AsyncIterable<Row> {
  const stream = (await client.postStream(DORIS_QUERY_PATH, { sql: source.sql })) as Readable
  for await (const msg of parseNdjson(stream)) {
    if (msg.type === 'error') throw new Error(`Doris error: ${msg.message ?? 'unknown'}`)
    if (msg.type === 'data' && msg.row) yield msg.row
    if (msg.type === 'end') return
  }
}
