import type { APIClient } from '@mb-it-org/shared'
import type { ColumnSpec, PreviewResult, Row, SourceConfig } from '../types.js'
import { previewDoris, runDoris } from './doris.js'
import { previewApi, runApi } from './api.js'

export async function previewSource(
  client: APIClient,
  source: SourceConfig,
  sampleSize: number,
): Promise<PreviewResult> {
  if (source.type === 'doris') return previewDoris(client, source, sampleSize)
  return previewApi(client, source, sampleSize)
}

export async function* runSource(
  client: APIClient,
  source: SourceConfig,
  columns: ColumnSpec[],
): AsyncIterable<Row> {
  if (source.type === 'doris') yield* runDoris(client, source)
  else yield* runApi(client, source, columns)
}
