import { EventEmitter } from 'node:events'
import { resolve } from 'node:path'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mockSpawn = vi.fn()

vi.mock('node:child_process', () => ({
  spawn: mockSpawn,
}))

/** Minimal child-process event double used to drive launcher completion deterministically. */
class ChildProcessDouble extends EventEmitter {}

describe('interactive login terminal launcher', () => {
  const originalArguments = process.argv
  const entryPath = resolve('workspace with spaces', 'mbs-cli', 'bin', 'run.js')

  beforeEach(() => {
    vi.resetModules()
    vi.resetAllMocks()
    process.argv = ['node.exe', entryPath]
  })

  afterEach(() => {
    process.argv = originalArguments
    vi.restoreAllMocks()
  })

  /** Verifies Windows receives only trusted paths and the fixed password mode flag. */
  it('opens a visible Windows child for password login and returns its exit code', async () => {
    vi.spyOn(process, 'platform', 'get').mockReturnValue('win32')
    const childProcess = new ChildProcessDouble()
    mockSpawn.mockReturnValue(childProcess)

    const { launchInteractiveLoginInNewTerminal } = await import('../login/interactive-terminal.js')
    const exitPromise = launchInteractiveLoginInNewTerminal('password')

    childProcess.emit('close', 0)
    await expect(exitPromise).resolves.toBe(0)

    expect(mockSpawn).toHaveBeenCalledTimes(1)
    const [executable, arguments_, options] = mockSpawn.mock.calls[0]
    expect(executable).toBe('powershell.exe')
    expect(arguments_).toEqual([
      '-NoLogo',
      '-NoProfile',
      '-NonInteractive',
      '-EncodedCommand',
      expect.any(String),
    ])
    expect(options).toMatchObject({ stdio: 'ignore', windowsHide: true })
    expect(options.env.MBS_LOGIN_CHILD_ENTRY_PATH).toBe(entryPath)
    expect(options.env.MBS_LOGIN_CHILD_MODE_FLAG).toBe('--password')
    expect(options.env.MBS_LOGIN_CHILD_NODE_PATH).toBe(process.execPath)

    const script = Buffer.from(arguments_[4], 'base64').toString('utf16le')
    expect(script).toContain('Start-Process')
    expect(script).toContain('--interactive-child')
    expect(script).not.toContain('password value')
  })

  /** Verifies managed-token mode passes only its selector and preserves an auth failure code. */
  it('propagates managed-token child failure without accepting a token value', async () => {
    vi.spyOn(process, 'platform', 'get').mockReturnValue('win32')
    const childProcess = new ChildProcessDouble()
    mockSpawn.mockReturnValue(childProcess)

    const { launchInteractiveLoginInNewTerminal } = await import('../login/interactive-terminal.js')
    const exitPromise = launchInteractiveLoginInNewTerminal('managed-token')

    childProcess.emit('close', 2)
    await expect(exitPromise).resolves.toBe(2)

    const options = mockSpawn.mock.calls[0][2]
    expect(options.env.MBS_LOGIN_CHILD_MODE_FLAG).toBe('--managed-token')
    expect(JSON.stringify(mockSpawn.mock.calls[0])).not.toContain('ult_v1_')
  })

  /** Verifies an abnormal Windows close becomes a stable local validation failure code. */
  it('normalizes a child close without an exit code', async () => {
    vi.spyOn(process, 'platform', 'get').mockReturnValue('win32')
    const childProcess = new ChildProcessDouble()
    mockSpawn.mockReturnValue(childProcess)

    const { launchInteractiveLoginInNewTerminal } = await import('../login/interactive-terminal.js')
    const exitPromise = launchInteractiveLoginInNewTerminal('password')

    childProcess.emit('close', null)
    await expect(exitPromise).resolves.toBe(1)
  })

  /** Verifies failure to start PowerShell returns a safe error without exposing process details. */
  it('maps launcher start failure to a safe validation error', async () => {
    vi.spyOn(process, 'platform', 'get').mockReturnValue('win32')
    const childProcess = new ChildProcessDouble()
    mockSpawn.mockReturnValue(childProcess)

    const { launchInteractiveLoginInNewTerminal } = await import('../login/interactive-terminal.js')
    const exitPromise = launchInteractiveLoginInNewTerminal('password')

    childProcess.emit('error', new Error('sensitive process details'))
    await expect(exitPromise).rejects.toMatchObject({
      message: 'Unable to open an interactive login window',
      type: 'validation',
    })
  })

  /** Verifies unsupported systems fail before starting any process or collecting a secret. */
  it('rejects automatic terminal launch outside Windows', async () => {
    vi.spyOn(process, 'platform', 'get').mockReturnValue('linux')

    const { launchInteractiveLoginInNewTerminal } = await import('../login/interactive-terminal.js')

    await expect(launchInteractiveLoginInNewTerminal('password')).rejects.toMatchObject({
      message: 'Automatic interactive login windows are currently supported only on Windows',
      type: 'validation',
    })
    expect(mockSpawn).not.toHaveBeenCalled()
  })
})
