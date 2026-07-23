import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
  mockFetchLatestNpmVersion,
  mockFindOtherActiveCliProcesses,
} = vi.hoisted(() => ({
  mockFetchLatestNpmVersion: vi.fn(),
  mockFindOtherActiveCliProcesses: vi.fn(),
}))

vi.mock('@mb-it-org/shared', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@mb-it-org/shared')>()),
  fetchLatestNpmVersion: mockFetchLatestNpmVersion,
  findOtherActiveCliProcesses: mockFindOtherActiveCliProcesses,
}))

describe('update command', () => {
  beforeEach(() => {
    vi.resetModules()
    mockFetchLatestNpmVersion.mockReset()
    mockFindOtherActiveCliProcesses.mockReset()
  })

  it('refuses to update while another mbs process is active', async () => {
    mockFindOtherActiveCliProcesses.mockReturnValue([
      { pid: 4321, command: 'serve --project-apis' },
    ])

    const { default: Update } = await import('../commands/update.js')
    const log = vi.fn()
    const exit = vi.fn()

    await Update.prototype.run.call({
      parse: vi.fn(async () => ({ flags: {} })),
      log,
      exit,
    })

    expect(mockFetchLatestNpmVersion).not.toHaveBeenCalled()
    expect(log).toHaveBeenCalledWith(
      JSON.stringify({
        ok: false,
        error: {
          type: 'validation',
          message: 'Cannot update CLI while another mbs process is running',
          hint: 'Stop PID 4321 (serve --project-apis), then run mbs update again',
        },
      }),
    )
    expect(exit).toHaveBeenCalledWith(1)
  })
})
