import { existsSync, readFileSync } from 'node:fs'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { appendTaskLog, createExportTask, findIncompleteTasks, saveTaskCheckpoint } from './task-store.js'

const cleanup: string[] = []

afterEach(async () => {
  await Promise.all(cleanup.splice(0).map((directory) => rm(directory, { recursive: true, force: true })))
})

describe('export task store', () => {
  it('creates the log, checkpoint, and staging file before execution begins', async () => {
    const rootDir = await mkdtemp(join(tmpdir(), 'mbs-export-task-'))
    cleanup.push(rootDir)

    const task = createExportTask({
      rootDir,
      planId: 'plan_test',
      planFingerprint: 'a'.repeat(64),
      outputFile: join(rootDir, 'result.xlsx'),
      sheetName: 'Orders',
      maxRetries: 3,
      retryBaseMs: 1000,
    })

    expect(existsSync(task.logFile)).toBe(true)
    expect(existsSync(task.checkpointFile)).toBe(true)
    expect(existsSync(task.stagingFile)).toBe(true)
    expect(readFileSync(task.logFile, 'utf8')).toContain('task_initialized')
    expect(findIncompleteTasks('plan_test', rootDir)).toHaveLength(1)
  })

  it('atomically persists progress and appends structured log events without row data', async () => {
    const rootDir = await mkdtemp(join(tmpdir(), 'mbs-export-task-'))
    cleanup.push(rootDir)
    const task = createExportTask({
      rootDir,
      planId: 'plan_test',
      planFingerprint: 'a'.repeat(64),
      outputFile: join(rootDir, 'result.xlsx'),
      sheetName: 'Orders',
      maxRetries: 3,
      retryBaseMs: 1000,
    })

    saveTaskCheckpoint({ ...task, rowsStaged: 250, status: 'fetching' })
    appendTaskLog(task, { event: 'batch_completed', batch: 2, rows: 100, totalRows: 250 })

    const checkpoint = JSON.parse(readFileSync(task.checkpointFile, 'utf8')) as { rowsStaged: number }
    const log = readFileSync(task.logFile, 'utf8')
    expect(checkpoint.rowsStaged).toBe(250)
    expect(log).toContain('"event":"batch_completed"')
    expect(log).not.toContain('rowData')
  })
})
