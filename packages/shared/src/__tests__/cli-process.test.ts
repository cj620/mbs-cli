import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
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

  it('fails closed when process markers and update claims cannot be inspected', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'mbs-process-unavailable-'))
    const notDirectory = join(tempDir, 'blocked')
    writeFileSync(notDirectory, 'blocked', 'utf8')

    try {
      expect(
        registerCliProcess({
          directory: join(notDirectory, 'active-processes'),
        }),
      ).toBeNull()
    } finally {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('does not start a CLI process when its marker cannot be written', () => {
    const directory = mkdtempSync(join(tmpdir(), 'mbs-marker-write-error-'))
    const commandPid = 202
    mkdirSync(join(directory, `process-${commandPid}.json`))

    try {
      expect(
        registerCliProcess({
          directory,
          pid: commandPid,
        }),
      ).toBeNull()
    } finally {
      rmSync(directory, { recursive: true, force: true })
    }
  })
})
