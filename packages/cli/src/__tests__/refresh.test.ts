import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockForceRefreshAuthContext = vi.fn()

vi.mock('@mb-it-org/shared', async importOriginal => ({
  ...await importOriginal<typeof import('@mb-it-org/shared')>(),
  forceRefreshAuthContext: mockForceRefreshAuthContext,
}))

describe('refresh command', () => {
  beforeEach(async () => {
    vi.clearAllMocks()
  })

  /** Verifies refresh performs the compatibility exchange without exposing returned credentials. */
  it('refreshes authentication and prints only a safe success message', async () => {
    mockForceRefreshAuthContext.mockResolvedValue({
      cookie: 'SESSION=fresh; AUTH_REFRESH=rotated',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      accessToken: 'memory-only-access',
      accessTokenExpiresAt: '2100-01-01T00:15:00.000Z',
      userInfo: { id: 'user-1' },
    })
    const { default: Refresh } = await import('../commands/refresh.js')
    const log = vi.fn()
    const exit = vi.fn()

    await Refresh.prototype.run.call({
      parse: vi.fn(async () => undefined),
      log,
      exit,
    })

    expect(mockForceRefreshAuthContext).toHaveBeenCalledTimes(1)
    expect(log).toHaveBeenCalledWith(JSON.stringify({
      ok: true,
      data: { message: 'Authentication refreshed successfully' },
    }))
    expect(log.mock.calls.flat().join(' ')).not.toContain('memory-only-access')
    expect(exit).not.toHaveBeenCalled()
  })

  /** Verifies a rejected Refresh Cookie requires interactive authentication. */
  it('requires a new login when refresh authentication is rejected', async () => {
    const { NotAuthenticatedError } = await import('@mb-it-org/shared')
    mockForceRefreshAuthContext.mockRejectedValue(new NotAuthenticatedError())
    const { default: Refresh } = await import('../commands/refresh.js')
    const log = vi.fn()
    const exit = vi.fn()

    await Refresh.prototype.run.call({ parse: vi.fn(async () => undefined), log, exit })

    expect(log).toHaveBeenCalledWith(JSON.stringify({
      ok: false,
      error: {
        type: 'auth',
        message: 'Authentication refresh failed',
        hint: 'Run mbs login to authenticate again',
      },
    }))
    expect(exit).toHaveBeenCalledWith(2)
  })

  /** Verifies transport failures use the safe local error contract without exposing credentials. */
  it('prints a safe API error when the exchange transport fails', async () => {
    const { MBSError } = await import('@mb-it-org/shared')
    mockForceRefreshAuthContext.mockRejectedValue(new MBSError(
      'Authentication service request failed',
      'api',
      'Check the configured HTTPS API URL and network connection',
    ))
    const { default: Refresh } = await import('../commands/refresh.js')
    const log = vi.fn()
    const exit = vi.fn()

    await Refresh.prototype.run.call({ parse: vi.fn(async () => undefined), log, exit })

    expect(log).toHaveBeenCalledWith(JSON.stringify({
      ok: false,
      error: {
        type: 'api',
        message: 'Authentication service request failed',
        hint: 'Check the configured HTTPS API URL and network connection',
      },
    }))
    expect(exit).toHaveBeenCalledWith(1)
  })
})
