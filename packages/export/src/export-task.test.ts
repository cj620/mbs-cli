import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { APIClient } from '@mb-it-org/shared'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { executeExportTask, reconcileStagingFile } from './export-task.js'
import { createExportTask, fingerprintPlan, loadExportTask } from './task-store.js'
import type { PlanRecord } from './types.js'

const cleanup: string[] = []

afterEach(async () => {
  await Promise.all(cleanup.splice(0).map((directory) => rm(directory, { recursive: true, force: true })))
})

describe('durable export task', () => {
  it('logs before the first request, retries transient pages, checkpoints batches, and writes xlsx', async () => {
    const rootDir = await mkdtemp(join(tmpdir(), 'mbs-export-run-'))
    cleanup.push(rootDir)
    const outputFile = join(rootDir, 'orders.xlsx')
    const plan: PlanRecord = {
      id: 'plan_test',
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 60_000).toISOString(),
      columns: [{ name: 'id' }],
      estimatedRows: 3,
      sampleRows: [{ id: 1 }],
      source: {
        type: 'api',
        method: 'GET',
        path: '/orders',
        pagination: {
          type: 'page',
          pageParam: 'page',
          sizeParam: 'pageSize',
          pageSize: 2,
          dataPath: 'data.list',
          totalPath: 'data.total',
        },
      },
    }
    const task = createExportTask({
      rootDir,
      planId: 'plan_test',
      planFingerprint: fingerprintPlan(plan),
      outputFile,
      sheetName: 'Orders',
      maxRetries: 3,
      retryBaseMs: 1,
    })
    let pageTwoAttempts = 0
    const request = vi.fn(async (_method: string, _path: string, options: { params?: Record<string, unknown> }) => {
      expect(existsSync(task.logFile)).toBe(true)
      const page = options.params?.page
      if (page === 1) return { data: { list: [{ id: 1 }, { id: 2 }], total: 3 } }
      pageTwoAttempts += 1
      if (pageTwoAttempts === 1) throw Object.assign(new Error('reset'), { code: 'ECONNRESET' })
      return { data: { list: [{ id: 3 }], total: 3 } }
    })
    const client = { request } as unknown as APIClient

    const result = await executeExportTask({
      client,
      plan,
      task,
      retry: { sleep: async () => undefined, random: () => 0.5 },
    })

    expect(result.rows).toBe(3)
    expect(existsSync(outputFile)).toBe(true)
    expect(loadExportTask(task.taskId, rootDir).status).toBe('completed')
    expect(readFileSync(task.stagingFile, 'utf8').trim().split('\n')).toHaveLength(3)
    expect(readFileSync(task.logFile, 'utf8')).toContain('"event":"batch_retry"')
  })

  it('truncates uncommitted staging bytes before a resumed request', async () => {
    const rootDir = await mkdtemp(join(tmpdir(), 'mbs-export-run-'))
    cleanup.push(rootDir)
    const task = createExportTask({
      rootDir,
      planId: 'plan_test',
      planFingerprint: 'a'.repeat(64),
      outputFile: join(rootDir, 'orders.xlsx'),
      sheetName: 'Orders',
      maxRetries: 3,
      retryBaseMs: 1,
    })
    writeFileSync(task.stagingFile, '{"id":999}\n', 'utf8')

    reconcileStagingFile(task)

    expect(readFileSync(task.stagingFile, 'utf8')).toBe('')
  })
})
