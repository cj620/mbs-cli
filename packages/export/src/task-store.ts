import {
  appendFileSync,
  closeSync,
  existsSync,
  fsyncSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  renameSync,
  writeSync,
} from 'node:fs'
import { createHash, randomBytes } from 'node:crypto'
import { dirname, join, resolve } from 'node:path'
import { getConfigDir } from '@mb-it-org/shared'
import type { PlanRecord } from './types.js'

export type ExportTaskStatus = 'fetching' | 'writing' | 'completed' | 'failed'

export interface ExportTaskCheckpoint {
  schemaVersion: 1
  taskId: string
  planId: string
  planFingerprint: string
  createdAt: string
  updatedAt: string
  status: ExportTaskStatus
  outputFile: string
  sheetName: string
  logFile: string
  checkpointFile: string
  stagingFile: string
  maxRetries: number
  retryBaseMs: number
  rowsStaged: number
  stagingBytes: number
  batchesCompleted: number
  sourceState?: Record<string, unknown>
  failure?: {
    name: string
    message: string
  }
}

export interface CreateExportTaskOptions {
  rootDir?: string
  planId: string
  planFingerprint: string
  outputFile: string
  sheetName: string
  maxRetries: number
  retryBaseMs: number
}

export type TaskLogEvent = Record<string, unknown> & { event: string }

const SENSITIVE_LOG_KEYS = /^(authorization|body|cookie|data|longtoken|password|request|response|rowdata|secret|sql|token)$/i

/**
 * Returns the private root used for resumable export task evidence.
 *
 * @param rootDir Optional injected root used by tests or an embedding host.
 * @returns An absolute task root, created with owner-only permissions where the platform supports them.
 */
export function getExportTaskRoot(rootDir?: string): string {
  const directory = resolve(rootDir ?? join(getConfigDir(), 'export-tasks'))
  mkdirSync(directory, { recursive: true, mode: 0o700 })
  return directory
}

/**
 * Creates a new export task and all durable files before a remote request can start.
 *
 * <p>The task is isolated in its own directory. Its first structured log event records only operational
 * metadata and paths; no SQL, request body, response body, or row data is persisted in the log.</p>
 *
 * @param options Plan identity, output target, sheet name, and finite retry policy.
 * @returns Initial checkpoint whose log, checkpoint, and staging files already exist.
 */
export function createExportTask(options: CreateExportTaskOptions): ExportTaskCheckpoint {
  const root = getExportTaskRoot(options.rootDir)
  const taskId = `export_${randomBytes(8).toString('hex')}`
  const taskDir = join(root, taskId)
  mkdirSync(taskDir, { recursive: false, mode: 0o700 })
  const now = new Date().toISOString()
  const task: ExportTaskCheckpoint = {
    schemaVersion: 1,
    taskId,
    planId: options.planId,
    planFingerprint: options.planFingerprint,
    createdAt: now,
    updatedAt: now,
    status: 'fetching',
    outputFile: resolve(options.outputFile),
    sheetName: options.sheetName,
    logFile: join(taskDir, 'task.ndjson'),
    checkpointFile: join(taskDir, 'checkpoint.json'),
    stagingFile: join(taskDir, 'rows.ndjson'),
    maxRetries: options.maxRetries,
    retryBaseMs: options.retryBaseMs,
    rowsStaged: 0,
    stagingBytes: 0,
    batchesCompleted: 0,
  }
  closeSync(openSync(task.logFile, 'wx', 0o600))
  closeSync(openSync(task.stagingFile, 'wx', 0o600))
  saveTaskCheckpoint(task)
  appendTaskLog(task, {
    event: 'task_initialized',
    planId: task.planId,
    planFingerprint: task.planFingerprint,
    outputFile: task.outputFile,
    logFile: task.logFile,
    checkpointFile: task.checkpointFile,
    stagingFile: task.stagingFile,
    maxRetries: task.maxRetries,
    retryBaseMs: task.retryBaseMs,
  })
  return task
}

/**
 * Persists the latest task checkpoint through a same-directory temporary file and atomic rename.
 *
 * @param task Complete checkpoint state. The function refreshes `updatedAt` in the persisted copy.
 * @returns The normalized checkpoint that was written.
 */
export function saveTaskCheckpoint(task: ExportTaskCheckpoint): ExportTaskCheckpoint {
  const next = { ...task, updatedAt: new Date().toISOString() }
  mkdirSync(dirname(next.checkpointFile), { recursive: true, mode: 0o700 })
  const temporary = `${next.checkpointFile}.tmp-${process.pid}-${randomBytes(4).toString('hex')}`
  const descriptor = openSync(temporary, 'wx', 0o600)
  try {
    writeSync(descriptor, JSON.stringify(next, null, 2), undefined, 'utf8')
    fsyncSync(descriptor)
  } finally {
    closeSync(descriptor)
  }
  renameSync(temporary, next.checkpointFile)
  return next
}

/**
 * Appends one sanitized NDJSON event and flushes it before returning.
 *
 * @param task Task whose private log receives the event.
 * @param event Operational event. Sensitive keys and control characters are removed before persistence.
 */
export function appendTaskLog(task: ExportTaskCheckpoint, event: TaskLogEvent): void {
  const record = sanitizeLogRecord({
    timestamp: new Date().toISOString(),
    taskId: task.taskId,
    ...event,
  })
  const descriptor = openSync(task.logFile, 'a', 0o600)
  try {
    appendFileSync(descriptor, `${JSON.stringify(record)}\n`, 'utf8')
    fsyncSync(descriptor)
  } finally {
    closeSync(descriptor)
  }
}

/**
 * Computes a stable non-reversible fingerprint for resume compatibility checks.
 *
 * <p>The digest covers the immutable source and projected columns but does not expose SQL, parameters, or
 * sample rows in logs/checkpoints.</p>
 *
 * @param plan Saved export plan.
 * @returns Lowercase SHA-256 digest.
 */
export function fingerprintPlan(plan: PlanRecord): string {
  return createHash('sha256')
    .update(JSON.stringify({ source: plan.source, columns: plan.columns }))
    .digest('hex')
}

/**
 * Loads one task checkpoint from an injected or default task root.
 *
 * @param taskId Opaque task identifier emitted before export work starts.
 * @param rootDir Optional injected task root.
 * @returns Parsed checkpoint.
 * @throws Error When the task does not exist or has an unsupported checkpoint shape.
 */
export function loadExportTask(taskId: string, rootDir?: string): ExportTaskCheckpoint {
  if (!/^export_[a-f0-9]{16}$/.test(taskId)) throw new Error(`Invalid export task id: ${taskId}`)
  const taskDirectory = join(getExportTaskRoot(rootDir), taskId)
  const file = join(taskDirectory, 'checkpoint.json')
  if (!existsSync(file)) throw new Error(`Export task not found: ${taskId}`)
  const task = JSON.parse(readFileSync(file, 'utf8')) as ExportTaskCheckpoint
  if (task.schemaVersion !== 1 || task.taskId !== taskId) {
    throw new Error(`Invalid export task checkpoint: ${taskId}`)
  }
  if (!/^[a-f0-9]{64}$/.test(task.planFingerprint)) {
    throw new Error(`Export task contains an invalid plan fingerprint: ${taskId}`)
  }
  if (!new Set<ExportTaskStatus>(['fetching', 'writing', 'completed', 'failed']).has(task.status)) {
    throw new Error(`Export task contains an invalid status: ${taskId}`)
  }
  if (
    resolve(task.checkpointFile) !== resolve(file)
    || resolve(task.logFile) !== resolve(join(taskDirectory, 'task.ndjson'))
    || resolve(task.stagingFile) !== resolve(join(taskDirectory, 'rows.ndjson'))
  ) {
    throw new Error(`Export task contains invalid private file paths: ${taskId}`)
  }
  if (
    !Number.isInteger(task.rowsStaged)
    || task.rowsStaged < 0
    || !Number.isInteger(task.stagingBytes)
    || task.stagingBytes < 0
    || !Number.isInteger(task.batchesCompleted)
    || task.batchesCompleted < 0
  ) {
    throw new Error(`Export task contains invalid progress counters: ${taskId}`)
  }
  return task
}

/**
 * Finds unfinished tasks for a plan so the CLI can require an explicit resume/restart choice.
 *
 * @param planId Saved export plan identity.
 * @param rootDir Optional injected task root.
 * @returns Newest-first checkpoints whose status is not completed.
 */
export function findIncompleteTasks(planId: string, rootDir?: string): ExportTaskCheckpoint[] {
  const root = getExportTaskRoot(rootDir)
  const tasks: ExportTaskCheckpoint[] = []
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || !entry.name.startsWith('export_')) continue
    try {
      const task = loadExportTask(entry.name, root)
      if (task.planId === planId && task.status !== 'completed') tasks.push(task)
    } catch {
      // Corrupt task directories are not candidates for automatic recovery.
    }
  }
  return tasks.sort((left, right) => Date.parse(right.updatedAt) - Date.parse(left.updatedAt))
}

/**
 * Removes sensitive fields and normalizes string values before an event is written to disk.
 *
 * @param input Arbitrary structured event assembled by the export runner.
 * @returns Safe shallow log record containing operational metadata only.
 */
function sanitizeLogRecord(input: Record<string, unknown>): Record<string, unknown> {
  const output: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(input)) {
    if (SENSITIVE_LOG_KEYS.test(key)) continue
    if (typeof value === 'string') {
      output[key] = value
        .replace(/[\r\n\t]+/g, ' ')
        .replace(/Bearer\s+[^\s]+/gi, 'Bearer [REDACTED]')
        .replace(/(SESSION|AUTH_REFRESH|LongToken)=?[^;\s]*/gi, '$1=[REDACTED]')
        .slice(0, 1000)
    } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
      output[key] = value
    }
  }
  return output
}
