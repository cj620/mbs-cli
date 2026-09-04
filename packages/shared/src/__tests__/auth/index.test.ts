import { beforeEach, describe, expect, it, vi } from 'vitest'
import { forceRefreshAuthContext, getAuthContext, saveAuthContext } from '../../auth/index.js'

const safeUserInfo = {
  id: 'user-1',
  loginName: 'user-1',
  userName: 'Test User',
  companyId: 7,
  companyName: 'Test Company',
  departmentName: 'Operations',
  positionName: 'Analyst',
  groupCompanyId: 7,
  groupCompanyName: 'Test Company',
}

vi.mock('../../auth/cookie-cache.js', () => ({
  clearCookie: vi.fn(),
  readAuthContextCache: vi.fn(),
  writeCookieAndUserInfo: vi.fn(),
}))

vi.mock('../../auth/session-login.js', () => ({
  exchangeCompatibilitySession: vi.fn(),
}))

vi.mock('../../config.js', () => ({
  getConfig: vi.fn(() => ({ apiUrl: 'https://example.com' })),
}))

vi.mock('../../auth/key-store.js', () => ({
  deleteKey: vi.fn(),
}))

import {
  clearCookie, readAuthContextCache,
  writeCookieAndUserInfo,
} from '../../auth/cookie-cache.js'
import { deleteKey } from '../../auth/key-store.js'
import { exchangeCompatibilitySession } from '../../auth/session-login.js'
import { getConfig } from '../../config.js'

const mockClearCookie = vi.mocked(clearCookie)
const mockDeleteKey = vi.mocked(deleteKey)
const mockReadAuthContextCache = vi.mocked(readAuthContextCache)
const mockWriteCookieAndUserInfo = vi.mocked(writeCookieAndUserInfo)
const mockExchangeCompatibilitySession = vi.mocked(exchangeCompatibilitySession)
const mockGetConfig = vi.mocked(getConfig)

beforeEach(() => {
  vi.resetAllMocks()
  mockDeleteKey.mockResolvedValue(undefined)
  mockGetConfig.mockReturnValue({ apiUrl: 'https://example.com' })
  mockWriteCookieAndUserInfo.mockImplementation(() => undefined)
  mockReadAuthContextCache.mockReturnValue(null)
})

describe('authentication context', () => {
  /** Verifies cached SESSION state is returned after deleting any legacy key. */
  it('returns cached cookie and safe user info', async () => {
    mockReadAuthContextCache.mockReturnValue({
      cookie: 'SESSION=cached',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: safeUserInfo,
    })

    await expect(getAuthContext()).resolves.toEqual({
      cookie: 'SESSION=cached',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: safeUserInfo,
    })
    expect(mockDeleteKey).toHaveBeenCalledTimes(1)
  })

  /** Verifies missing session state requires a fresh login and performs no refresh request. */
  it('throws when the cache is empty', async () => {
    await expect(getAuthContext()).rejects.toThrow('Not authenticated')
    expect(mockDeleteKey).toHaveBeenCalledTimes(1)
  })

  /** Verifies a newly authenticated context is persisted only after legacy key cleanup. */
  it('saves a new SESSION context', async () => {
    const context = {
      cookie: 'SESSION=new-session; AUTH_REFRESH=new-refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: safeUserInfo,
    }

    await saveAuthContext(context)

    expect(mockDeleteKey).toHaveBeenCalledTimes(1)
    expect(mockWriteCookieAndUserInfo).toHaveBeenCalledWith(
      context.cookie, context.userInfo, context.refreshExpiresAt, undefined,
    )
  })

  /** Verifies Refresh Cookie exchange is persisted while Access Token remains only in the return value. */
  it('refreshes through the compatibility exchange', async () => {
    const cached = {
      cookie: 'SESSION=old; AUTH_REFRESH=refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: safeUserInfo,
    }
    const refreshed = {
      cookie: 'SESSION=fresh; AUTH_REFRESH=rotated',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      accessToken: 'memory-access',
      accessTokenExpiresAt: '2100-01-01T00:15:00.000Z',
      userInfo: safeUserInfo,
    }
    mockReadAuthContextCache.mockReturnValue(cached)
    mockExchangeCompatibilitySession.mockResolvedValue(refreshed)

    await expect(forceRefreshAuthContext()).resolves.toEqual(refreshed)

    expect(mockExchangeCompatibilitySession).toHaveBeenCalledWith('https://example.com', cached)
    expect(mockWriteCookieAndUserInfo).toHaveBeenCalledWith(
      refreshed.cookie, refreshed.userInfo, refreshed.refreshExpiresAt, undefined,
    )
    expect(mockWriteCookieAndUserInfo.mock.calls.flat().join(' ')).not.toContain('memory-access')
    expect(mockClearCookie).not.toHaveBeenCalled()
  })

  /** Verifies managed-token refresh preserves the non-rotating credential in the protected cache. */
  it('refreshes and persists managed LongToken authentication', async () => {
    const managedLongToken = `ult_v1_${'a'.repeat(32)}.${'B'.repeat(43)}`
    const cached = {
      cookie: 'SESSION=managed-old',
      managedLongToken,
      userInfo: safeUserInfo,
    }
    const refreshed = {
      ...cached,
      cookie: 'SESSION=managed-fresh',
      accessToken: 'memory-access',
      accessTokenExpiresAt: '2100-01-01T00:15:00.000Z',
    }
    mockReadAuthContextCache.mockReturnValue(cached)
    mockExchangeCompatibilitySession.mockResolvedValue(refreshed)

    await expect(forceRefreshAuthContext()).resolves.toEqual(refreshed)

    expect(mockExchangeCompatibilitySession).toHaveBeenCalledWith('https://example.com', cached)
    expect(mockWriteCookieAndUserInfo).toHaveBeenCalledWith(
      refreshed.cookie, refreshed.userInfo, undefined, managedLongToken,
    )
  })

  /** Verifies automatic refresh directly accepts a configured remote HTTP API root. */
  it('uses configured remote HTTP during refresh without extra authorization', async () => {
    const cached = {
      cookie: 'SESSION=old; AUTH_REFRESH=refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: safeUserInfo,
    }
    const refreshed = {
      ...cached,
      cookie: 'SESSION=fresh; AUTH_REFRESH=rotated',
      accessToken: 'memory-access',
      accessTokenExpiresAt: '2100-01-01T00:15:00.000Z',
    }
    mockGetConfig.mockReturnValue({ apiUrl: 'http://api.example.com' })
    mockReadAuthContextCache.mockReturnValue(cached)
    mockExchangeCompatibilitySession.mockResolvedValue(refreshed)

    await expect(forceRefreshAuthContext()).resolves.toEqual(refreshed)

    expect(mockExchangeCompatibilitySession).toHaveBeenCalledWith(
      'http://api.example.com',
      cached,
    )
  })

  /** Verifies a legacy cache without Refresh material is cleared before rejecting. */
  it('rejects and clears a SESSION-only cache', async () => {
    mockReadAuthContextCache.mockReturnValue({ cookie: 'SESSION=legacy', userInfo: safeUserInfo })

    await expect(forceRefreshAuthContext()).rejects.toThrow('Not authenticated')

    expect(mockExchangeCompatibilitySession).not.toHaveBeenCalled()
    expect(mockClearCookie).toHaveBeenCalledTimes(1)
  })

  /** Verifies a temporary exchange transport failure preserves the still-usable cached Refresh Cookie. */
  it('preserves cached authentication on a pre-response transport failure', async () => {
    const { MBSError } = await import('../../errors.js')
    mockReadAuthContextCache.mockReturnValue({
      cookie: 'SESSION=old; AUTH_REFRESH=refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: safeUserInfo,
    })
    mockExchangeCompatibilitySession.mockRejectedValue(new MBSError('network failed', 'api'))

    await expect(forceRefreshAuthContext()).rejects.toThrow('network failed')

    expect(mockClearCookie).not.toHaveBeenCalled()
  })

  /** Verifies a post-rotation cache write failure clears the revoked predecessor instead of replaying it. */
  it('clears authentication when rotated Cookie persistence fails', async () => {
    mockReadAuthContextCache.mockReturnValue({
      cookie: 'SESSION=old; AUTH_REFRESH=refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: safeUserInfo,
    })
    mockExchangeCompatibilitySession.mockResolvedValue({
      cookie: 'SESSION=fresh; AUTH_REFRESH=rotated',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      accessToken: 'memory-access',
      accessTokenExpiresAt: '2100-01-01T00:15:00.000Z',
      userInfo: safeUserInfo,
    })
    mockWriteCookieAndUserInfo.mockImplementation(() => {
      throw new Error('disk unavailable')
    })

    await expect(forceRefreshAuthContext()).rejects.toThrow('disk unavailable')

    expect(mockClearCookie).toHaveBeenCalledTimes(1)
  })
})
