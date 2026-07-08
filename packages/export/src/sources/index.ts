import type { APIClient } from '@mb-it-org/shared'
import type { ColumnSpec, DatabaseSourceConfig, PreviewResult, Row, SourceConfig } from '../types.js'
import { previewDatabase, runDatabase } from './database.js'
import { previewApi, runApi } from './api.js'

export function isDatabaseSource(source: SourceConfig): source is DatabaseSourceConfig {
  return source.type === 'database' || source.type === 'doris'
}

export async function previewSource(
  client: APIClient,
  source: SourceConfig,
  sampleSize: number,
): Promise<PreviewResult> {
  if (isDatabaseSource(source)) return previewDatabase(client, source, sampleSize)
  return previewApi(client, source, sampleSize)
}

export async function* runSource(
  client: APIClient,
  source: SourceConfig,
  columns: ColumnSpec[],
): AsyncIterable<Row> {
  if (isDatabaseSource(source)) yield* runDatabase(client, source)
  else yield* runApi(client, source, columns)
}
