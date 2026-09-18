import type { APIClient } from '@mb-it-org/shared'
import type {
  ColumnSpec,
  DatabaseSourceConfig,
  PreviewResult,
  Row,
  SourceBatch,
  SourceConfig,
  SourceResumeState,
} from '../types.js'
import { fetchDatabaseCursorBatch, previewDatabase, runDatabase } from './database.js'
import { fetchApiBatch, previewApi, runApi } from './api.js'

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

/**
 * Streams all rows for legacy callers while keeping every pagination loop explicitly bounded.
 *
 * @param client Authenticated MBS transport.
 * @param source Saved database or API source.
 * @param columns Previewed columns required by database cursor projection.
 * @returns Asynchronous row stream.
 */
export async function* runSource(
  client: APIClient,
  source: SourceConfig,
  columns: ColumnSpec[],
): AsyncIterable<Row> {
  if (isDatabaseSource(source) && !source.pagination) yield* runDatabase(client, source)
  else if (isDatabaseSource(source)) {
    let state: SourceResumeState | undefined
    for (let batch = 0; batch < 1_000_000; batch += 1) {
      const result = await fetchDatabaseCursorBatch(client, source, columns, state)
      for (const row of result.rows) yield row
      state = result.nextState
      if (state.done) return
    }
    throw new Error('Database pagination exceeded the maximum batch count')
  }
  else yield* runApi(client, source, columns)
}

/**
 * Reports whether a source exposes a durable position that can continue after a completed batch.
 *
 * @param source Saved export source.
 * @returns True for every API pagination mode and explicit database keyset pagination.
 */
export function sourceSupportsResume(source: SourceConfig): boolean {
  return !isDatabaseSource(source) || source.pagination?.type === 'cursor'
}

/**
 * Fetches one resumable source batch without committing its next position.
 *
 * <p>The export task is responsible for persisting returned rows before saving `nextState`. Legacy database
 * streams intentionally do not cross this interface because they lack a safe resume cursor.</p>
 *
 * @param client Authenticated MBS transport.
 * @param source Saved source contract.
 * @param columns Previewed output columns.
 * @param state Last successfully committed resume state.
 * @returns One bounded row batch and next state.
 */
export async function fetchSourceBatch(
  client: APIClient,
  source: SourceConfig,
  columns: ColumnSpec[],
  state?: SourceResumeState,
): Promise<SourceBatch> {
  if (isDatabaseSource(source)) return fetchDatabaseCursorBatch(client, source, columns, state)
  return fetchApiBatch(client, source, state)
}
