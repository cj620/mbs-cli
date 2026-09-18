import { createReadStream, existsSync, statSync, truncateSync } from 'node:fs'
import { appendFile, open } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { createInterface } from 'node:readline'
import type { APIClient } from '@mb-it-org/shared'
import { MBSError, NotAuthenticatedError, PermissionError } from '@mb-it-org/shared'
import { withBoundedRetry, type RetryOptions } from './retry.js'
import {
  appendTaskLog,
  fingerprintPlan,
  saveTaskCheckpoint,
  type ExportTaskCheckpoint,
  type TaskLogEvent,
} from './task-store.js'
import { fetchSourceBatch, runSource, sourceSupportsResume } from './sources/index.js'
import type { PlanRecord, Row, SourceResumeState } from './types.js'
import { writeXlsx, type WriteResult } from './writer/xlsx.js'

const LEGACY_STREAM_BATCH_SIZE = 1000
const MAX_SOURCE_BATCHES = 100_000

export interface ExecuteExportTaskOptions {
  client: APIClient
  plan: PlanRecord
  task: ExportTaskCheckpoint
  resume?: boolean
  onEvent?: (event: TaskLogEvent) => void
  retry?: Pick<RetryOptions, 'sleep' | 'random'>
}

export interface ExecuteExportTaskResult extends WriteResult {
  task: ExportTaskCheckpoint
}

/**
 * Runs one durable export task from its saved source position through final XLSX publication.
 *
 * <p>For resumable sources, each batch is fsynced to the NDJSON staging file before the next source state is
 * atomically committed. On resume, uncommitted trailing bytes are truncated first. Excel generation reads
 * only the durable staging file and publishes through the streaming writer's temporary-file contract.</p>
 *
 * @param options Authenticated client, immutable plan, durable task checkpoint, and observability hooks.
 * @returns Final workbook result and completed checkpoint.
 * @throws Error For source, staging, retry, workbook, consistency, or unsupported-resume failures.
 */
export async function executeExportTask(options: ExecuteExportTaskOptions): Promise<ExecuteExportTaskResult> {
  let task = reconcileStagingFile(options.task)
  if (task.planFingerprint !== fingerprintPlan(options.plan)) {
    throw new Error('Export task checkpoint does not match the current plan source and columns')
  }
  const emit = (event: TaskLogEvent): void => {
    appendTaskLog(task, event)
    options.onEvent?.(event)
  }
  if (options.resume) emit({ event: 'task_resumed', rows: task.rowsStaged, batches: task.batchesCompleted })

  try {
    if (task.status !== 'writing' && task.status !== 'completed') {
      if (sourceSupportsResume(options.plan.source)) {
        task = await stageResumableSource(options, task, emit)
      } else {
        if (options.resume && task.rowsStaged > 0) {
          throw new Error(
            'This database export has no cursor checkpoint and cannot safely resume. Start a new full task or create a cursor-paginated plan.',
          )
        }
        task = await stageLegacyStream(options, task, emit)
      }
    }

    if (task.status === 'completed' && existsSync(task.outputFile)) {
      return { filePath: task.outputFile, rows: task.rowsStaged, task }
    }

    task = saveTaskCheckpoint({ ...task, status: 'writing', failure: undefined })
    emit({ event: 'xlsx_started', rows: task.rowsStaged, outputFile: task.outputFile })
    const result = await writeXlsx({
      filePath: task.outputFile,
      sheetName: task.sheetName,
      columns: options.plan.columns,
      rows: readStagedRows(task.stagingFile),
      onProgress: (rows) => emit({ event: 'xlsx_progress', rows }),
    })
    if (result.rows !== task.rowsStaged) {
      throw new Error(`Staging row count mismatch: expected ${task.rowsStaged}, wrote ${result.rows}`)
    }
    task = saveTaskCheckpoint({ ...task, status: 'completed', failure: undefined })
    emit({ event: 'task_completed', rows: result.rows, outputFile: result.filePath })
    return { ...result, task }
  } catch (error) {
    const failedPhase = task.status === 'writing' ? 'writing' : 'fetching'
    task = saveTaskCheckpoint({
      ...task,
      status: 'failed',
      failure: safeFailure(error),
    })
    emit({
      event: 'task_failed',
      phase: failedPhase,
      errorName: errorName(error),
      rows: task.rowsStaged,
    })
    throw error
  }
}

/**
 * Fetches and commits bounded source batches until the persisted source state is terminal.
 *
 * @param options Export execution dependencies and retry hooks.
 * @param initialTask Reconciled checkpoint.
 * @param emit Structured event sink.
 * @returns Checkpoint positioned for workbook generation.
 */
async function stageResumableSource(
  options: ExecuteExportTaskOptions,
  initialTask: ExportTaskCheckpoint,
  emit: (event: TaskLogEvent) => void,
): Promise<ExportTaskCheckpoint> {
  let task = initialTask
  let state = task.sourceState as SourceResumeState | undefined
  if (state?.done) return saveTaskCheckpoint({ ...task, status: 'writing' })

  for (let batchIndex = task.batchesCompleted; batchIndex < MAX_SOURCE_BATCHES; batchIndex += 1) {
    const startedAt = Date.now()
    const batch = await withBoundedRetry(
      () => fetchSourceBatch(options.client, options.plan.source, options.plan.columns, state),
      {
        maxRetries: task.maxRetries,
        baseDelayMs: task.retryBaseMs,
        ...options.retry,
        onRetry: ({ attempt, delayMs, error }) => {
          emit({
            event: 'batch_retry',
            batch: batchIndex + 1,
            attempt,
            delayMs,
            errorName: errorName(error),
            statusCode: errorStatus(error),
          })
        },
      },
    )
    const stagingBytes = await appendRows(task.stagingFile, batch.rows)
    state = batch.nextState
    task = saveTaskCheckpoint({
      ...task,
      status: state.done ? 'writing' : 'fetching',
      rowsStaged: task.rowsStaged + batch.rows.length,
      stagingBytes,
      batchesCompleted: task.batchesCompleted + 1,
      sourceState: state,
      failure: undefined,
    })
    emit({
      event: 'batch_completed',
      batch: task.batchesCompleted,
      rows: batch.rows.length,
      totalRows: task.rowsStaged,
      durationMs: Date.now() - startedAt,
      done: state.done,
      cursorFingerprint: resumeStateFingerprint(state),
    })
    if (state.done) return task
  }

  throw new Error(`Source pagination exceeded the maximum of ${MAX_SOURCE_BATCHES} batches`)
}

/**
 * Stages a compatibility database stream in bounded disk writes without claiming resumability.
 *
 * @param options Export execution dependencies.
 * @param initialTask Empty checkpoint for a non-cursor database source.
 * @param emit Structured event sink.
 * @returns Checkpoint positioned for workbook generation.
 */
async function stageLegacyStream(
  options: ExecuteExportTaskOptions,
  initialTask: ExportTaskCheckpoint,
  emit: (event: TaskLogEvent) => void,
): Promise<ExportTaskCheckpoint> {
  let task = initialTask
  let rows: Row[] = []
  for await (const row of runSource(options.client, options.plan.source, options.plan.columns)) {
    rows.push(row)
    if (rows.length < LEGACY_STREAM_BATCH_SIZE) continue
    const stagingBytes = await appendRows(task.stagingFile, rows)
    task = saveTaskCheckpoint({
      ...task,
      rowsStaged: task.rowsStaged + rows.length,
      stagingBytes,
      batchesCompleted: task.batchesCompleted + 1,
      sourceState: { type: 'database-stream', resumable: false },
    })
    emit({ event: 'batch_completed', batch: task.batchesCompleted, rows: rows.length, totalRows: task.rowsStaged })
    rows = []
  }
  if (rows.length > 0) {
    const stagingBytes = await appendRows(task.stagingFile, rows)
    task = saveTaskCheckpoint({
      ...task,
      rowsStaged: task.rowsStaged + rows.length,
      stagingBytes,
      batchesCompleted: task.batchesCompleted + 1,
      sourceState: { type: 'database-stream', resumable: false, done: true },
    })
    emit({ event: 'batch_completed', batch: task.batchesCompleted, rows: rows.length, totalRows: task.rowsStaged })
  }
  return saveTaskCheckpoint({ ...task, status: 'writing' })
}

/**
 * Appends one complete batch to the staging file and fsyncs it before returning its durable length.
 *
 * @param stagingFile Task-private NDJSON staging path.
 * @param rows Batch rows to persist.
 * @returns Durable byte length after the batch append.
 */
async function appendRows(stagingFile: string, rows: Row[]): Promise<number> {
  if (rows.length === 0) return statSync(stagingFile).size
  const payload = `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`
  await appendFile(stagingFile, payload, { encoding: 'utf8', mode: 0o600 })
  const handle = await open(stagingFile, 'r+')
  try {
    await handle.sync()
  } finally {
    await handle.close()
  }
  return statSync(stagingFile).size
}

/**
 * Truncates bytes that were appended after the last committed checkpoint.
 *
 * @param task Loaded checkpoint.
 * @returns Same checkpoint after its staging file matches the committed byte offset.
 */
export function reconcileStagingFile(task: ExportTaskCheckpoint): ExportTaskCheckpoint {
  const actualBytes = statSync(task.stagingFile).size
  if (actualBytes < task.stagingBytes) {
    throw new Error(`Staging file is shorter than checkpoint: ${actualBytes} < ${task.stagingBytes}`)
  }
  if (actualBytes > task.stagingBytes) truncateSync(task.stagingFile, task.stagingBytes)
  return task
}

/**
 * Streams durable NDJSON rows back into the workbook writer without loading the dataset in memory.
 *
 * @param stagingFile Task-private staging path.
 * @returns Asynchronous row stream.
 */
export async function* readStagedRows(stagingFile: string): AsyncIterable<Row> {
  const input = createReadStream(stagingFile, { encoding: 'utf8' })
  const lines = createInterface({ input, crlfDelay: Infinity })
  for await (const line of lines) {
    const text = line.trim()
    if (!text) continue
    const row = JSON.parse(text) as unknown
    if (!row || typeof row !== 'object' || Array.isArray(row)) {
      throw new Error('Staging file contains a non-object row')
    }
    yield row as Row
  }
}

/**
 * Produces a non-sensitive checkpoint failure summary while the original error remains available to stderr.
 *
 * @param error Failure caught by the task runner.
 * @returns Safe stable error name and generic remediation text.
 */
function safeFailure(error: unknown): { name: string; message: string } {
  return {
    name: errorName(error),
    message: 'See the command error output and task log metadata; request and row contents were not recorded.',
  }
}

/**
 * Returns the stable runtime class name used in logs without serializing an error object.
 *
 * @param error Unknown failure.
 * @returns Safe error class/category name.
 */
function errorName(error: unknown): string {
  if (error instanceof Error) return error.name || 'Error'
  return 'UnknownError'
}

/**
 * Extracts only the upstream HTTP status required to explain retry decisions.
 *
 * @param error Unknown source failure.
 * @returns HTTP status or undefined when the failure has no retained response.
 */
function errorStatus(error: unknown): number | undefined {
  if (error instanceof MBSError || error instanceof PermissionError || error instanceof NotAuthenticatedError) {
    return error.backendResponse?.statusCode
  }
  return undefined
}

/**
 * Hashes a resume state for logs so operators can correlate progress without exposing cursor values.
 *
 * @param state Persisted source state after a successful batch.
 * @returns Truncated SHA-256 fingerprint suitable for operational logs.
 */
function resumeStateFingerprint(state: SourceResumeState): string {
  return createHash('sha256').update(JSON.stringify(state)).digest('hex').slice(0, 16)
}
