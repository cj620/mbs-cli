import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

import {
  beginCliUpdate,
  findOtherActiveCliProcesses,
  registerCliProcess,
} from '../cli-process.js'

describe('CLI process registry', () => {
  it('reports another active mbs process until it exits', () => {
    const directory = mkdtempSync(join(tmpdir(), 'mbs-active-process-'))
    const unregister = registerCliProcess({ directory })
    expect(unregister).not.toBeNull()

    try {
      expect(
        findOtherActiveCliProcesses({
          directory,
          excludePid: 0,
          isProcessRunning: (pid) => pid === process.pid,
        }),
      ).toEqual([
        {
          pid: process.pid,
        },
      ])

      unregister?.()

      expect(
        findOtherActiveCliProcesses({
          directory,
          excludePid: 0,
          isProcessRunning: () => true,
        }),
      ).toEqual([])
    } finally {
      unregister?.()
      rmSync(directory, { recursive: true, force: true })
    }
  })

  it('removes markers left by processes that are no longer running', () => {
    const directory = mkdtempSync(join(tmpdir(), 'mbs-stale-process-'))
    const unregister = registerCliProcess({ directory })
    expect(unregister).not.toBeNull()

    try {
      expect(
        findOtherActiveCliProcesses({
          directory,
          excludePid: 0,
          isProcessRunning: () => false,
        }),
      ).toEqual([])
      expect(
        findOtherActiveCliProcesses({
          directory,
          excludePid: 0,
          isProcessRunning: () => true,
        }),
      ).toEqual([])
    } finally {
      unregister?.()
      rmSync(directory, { recursive: true, force: true })
    }
  })

  it('blocks new CLI processes for the full update window', () => {
    const directory = mkdtempSync(join(tmpdir(), 'mbs-update-window-'))
    const finishUpdate = beginCliUpdate({ directory })
    expect(finishUpdate).not.toBeNull()

    try {
      expect(registerCliProcess({ directory })).toBeNull()
      expect(
        findOtherActiveCliProcesses({
          directory,
          excludePid: 0,
          isProcessRunning: () => true,
        }),
      ).toEqual([])
    } finally {
      finishUpdate?.()
      rmSync(directory, { recursive: true, force: true })
    }
  })
})
