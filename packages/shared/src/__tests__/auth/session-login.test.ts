import axios from 'axios'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  exchangeCompatibilitySession,
  fetchCurrentUser,
  loginWithManagedLongToken,
  loginWithPassword,
} from '../../auth/session-login.js'

vi.mock('axios')
const mockAxios = vi.mocked(axios)

const authUser = {
  userId: 'user-1',
  displayName: 'Test User',
  companyId: 7,
  companyName: 'Test Company',
  department: 'Operations',
  position: 'Analyst',
}

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

const managedLongToken = `ult_v1_${'a'.repeat(32)}.${'B'.repeat(43)}`

beforeEach(() => {
  vi.clearAllMocks()
})

describe('loginWithPassword', () => {
  /** Verifies direct login retains only the two auth Cookie pairs and the server-declared Refresh expiry. */
  it('returns a safe authentication context from the auth-center response', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-09-03T00:00:00.000Z'))
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: {
        'set-cookie': [
          'tracking=discard-me; Path=/',
          'SESSION=session-value; Path=/; HttpOnly; Secure',
          'AUTH_REFRESH=refresh-value; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax',
        ],
      },
      data: { code: 200, message: 'OK', data: authUser },
    })

    await expect(loginWithPassword('https://example.com', {
      username: ' test-account ',
      password: 'test-password',
    })).resolves.toEqual({
      cookie: 'SESSION=session-value; AUTH_REFRESH=refresh-value',
      refreshExpiresAt: '2026-10-03T00:00:00.000Z',
      userInfo: safeUserInfo,
    })

    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://example.com/gateway/auth-center-service/auth/user/login/password',
      { username: 'test-account', password: 'test-password' },
      { headers: { 'client-type': 'cli' } },
    )
    vi.useRealTimers()
  })

  /** Verifies credentials can never be sent over plaintext to a remote host. */
  it('rejects remote HTTP before making a request', async () => {
    await expect(loginWithPassword('http://example.com', {
      username: 'test-account',
      password: 'test-password',
    })).rejects.toMatchObject({
      type: 'validation',
      message: 'Password login requires HTTPS',
    })

    expect(mockAxios.post).not.toHaveBeenCalled()
  })

  /** Verifies loopback HTTP remains available for a local development proxy. */
  it('allows loopback HTTP', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: { 'set-cookie': [
        'SESSION=local-session; Path=/',
        'AUTH_REFRESH=local-refresh; Path=/; Max-Age=60; HttpOnly',
      ] },
      data: { code: 200, data: authUser },
    })

    await expect(loginWithPassword('http://127.0.0.1:8787', {
      username: 'test-account',
      password: 'test-password',
    })).resolves.toMatchObject({ cookie: 'SESSION=local-session; AUTH_REFRESH=local-refresh' })
  })

  /** Verifies authentication failures are classified without leaking credentials. */
  it('returns a safe authentication error for rejected credentials', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: {},
      data: { code: 401, message: 'Rejected', data: null },
    })

    await expect(loginWithPassword('https://example.com', {
      username: 'test-account',
      password: 'test-password',
    })).rejects.toMatchObject({
      name: 'NotAuthenticatedError',
      message: 'Not authenticated',
    })
  })

  /** Verifies a successful body without SESSION is rejected instead of creating false login state. */
  it('rejects a response without a SESSION cookie', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: { 'set-cookie': ['tracking=discard-me; Path=/'] },
      data: { code: 200, data: authUser },
    })

    await expect(loginWithPassword('https://example.com', {
      username: 'test-account',
      password: 'test-password',
    })).rejects.toThrow('Not authenticated')
  })

  /** Verifies a successful login without the mandatory rotating Refresh Cookie is rejected. */
  it('rejects a response without an AUTH_REFRESH cookie', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: { 'set-cookie': ['SESSION=session-value; Path=/; HttpOnly'] },
      data: { code: 200, data: authUser },
    })

    await expect(loginWithPassword('https://example.com', {
      username: 'test-account', password: 'test-password',
    })).rejects.toThrow('Not authenticated')
  })
})

describe('exchangeCompatibilitySession', () => {
  /** Verifies compat exchange rotates Refresh, replaces SESSION, and retains Access only in the return value. */
  it('returns refreshed cookies and a validated memory Access Token', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-09-03T00:00:00.000Z'))
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: { 'set-cookie': [
        'AUTH_REFRESH=rotated-refresh; Path=/; Max-Age=3600; HttpOnly; Secure',
        'SESSION=fresh-session; Path=/; HttpOnly; Secure',
      ] },
      data: { code: 200, data: {
        accessToken: 'short-access-token', tokenType: 'Bearer', expiresInSeconds: 900,
      } },
    })

    await expect(exchangeCompatibilitySession('https://example.com', {
      cookie: 'SESSION=old-session; AUTH_REFRESH=old-refresh',
      refreshExpiresAt: '2026-10-03T00:00:00.000Z',
      userInfo: safeUserInfo,
    })).resolves.toEqual({
      cookie: 'SESSION=fresh-session; AUTH_REFRESH=rotated-refresh',
      refreshExpiresAt: '2026-09-03T01:00:00.000Z',
      accessToken: 'short-access-token',
      accessTokenExpiresAt: '2026-09-03T00:15:00.000Z',
      userInfo: safeUserInfo,
    })
    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://example.com/gateway/auth-center-service/auth/token/exchange/compat-session',
      undefined,
      { headers: {
        Cookie: 'SESSION=old-session; AUTH_REFRESH=old-refresh',
        'client-type': 'cli',
      } },
    )
    vi.useRealTimers()
  })

  /** Verifies malformed token responses fail closed even when cookies were returned. */
  it('rejects an invalid Access Token response contract', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: { 'set-cookie': ['AUTH_REFRESH=rotated; Max-Age=60; Path=/'] },
      data: { code: 200, data: { accessToken: 'contains whitespace', tokenType: 'Bearer', expiresInSeconds: 900 } },
    })

    await expect(exchangeCompatibilitySession('https://example.com', {
      cookie: 'SESSION=old; AUTH_REFRESH=refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: safeUserInfo,
    })).rejects.toThrow('Not authenticated')
  })

  /** Verifies a managed credential uses the exclusive LongToken header and retains an unchanged SESSION. */
  it('refreshes a managed LongToken without rotating it', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-09-03T00:00:00.000Z'))
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: {},
      data: { code: 200, data: {
        accessToken: 'managed-access-token', tokenType: 'Bearer', expiresInSeconds: 900,
      } },
    })

    await expect(exchangeCompatibilitySession('https://example.com', {
      cookie: 'SESSION=managed-session',
      managedLongToken,
      userInfo: safeUserInfo,
    })).resolves.toEqual({
      cookie: 'SESSION=managed-session',
      managedLongToken,
      accessToken: 'managed-access-token',
      accessTokenExpiresAt: '2026-09-03T00:15:00.000Z',
      userInfo: safeUserInfo,
    })
    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://example.com/gateway/auth-center-service/auth/token/exchange/compat-session',
      undefined,
      { headers: {
        Authorization: `LongToken ${managedLongToken}`,
        Cookie: 'SESSION=managed-session',
        'client-type': 'cli',
      } },
    )
    vi.useRealTimers()
  })

  /** Verifies mixed managed and login Refresh sources fail before a network request. */
  it('rejects ambiguous cached long credentials', async () => {
    await expect(exchangeCompatibilitySession('https://example.com', {
      cookie: 'SESSION=old; AUTH_REFRESH=login-refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      managedLongToken,
      userInfo: safeUserInfo,
    })).rejects.toThrow('Not authenticated')

    expect(mockAxios.post).not.toHaveBeenCalled()
  })
})

describe('loginWithManagedLongToken', () => {
  /** Verifies manual managed-token login creates SESSION without persisting an Access Token. */
  it('exchanges the token and resolves the current user', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: { 'set-cookie': ['SESSION=managed-session; Path=/; HttpOnly; Secure'] },
      data: { code: 200, data: {
        accessToken: 'initial-access-token', tokenType: 'Bearer', expiresInSeconds: 900,
      } },
    })
    mockAxios.get = vi.fn().mockResolvedValue({ data: { code: 200, data: authUser } })

    await expect(loginWithManagedLongToken(
      'https://example.com', ` ${managedLongToken} `,
    )).resolves.toEqual({
      cookie: 'SESSION=managed-session',
      managedLongToken,
      userInfo: safeUserInfo,
    })
    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://example.com/gateway/auth-center-service/auth/token/exchange/compat-session',
      undefined,
      { headers: {
        Authorization: `LongToken ${managedLongToken}`,
        'client-type': 'cli',
      } },
    )
  })

  /** Verifies malformed managed tokens are rejected locally without reaching auth-center. */
  it('rejects invalid managed tokens before exchange', async () => {
    await expect(loginWithManagedLongToken('https://example.com', 'invalid')).rejects.toMatchObject({
      type: 'validation',
      message: 'Invalid long-term Refresh Token',
    })
    expect(mockAxios.post).not.toHaveBeenCalled()
  })

  /** Verifies transport errors are replaced with safe text that cannot echo the submitted token. */
  it('does not leak a managed token through transport errors', async () => {
    mockAxios.post = vi.fn().mockRejectedValue(new Error(`request failed for ${managedLongToken}`))

    let failure: unknown
    try {
      await loginWithManagedLongToken('https://example.com', managedLongToken)
    } catch (error) {
      failure = error
    }
    expect(failure).toMatchObject({
      type: 'api',
      message: 'Authentication service request failed',
    })
    expect(JSON.stringify(failure)).not.toContain(managedLongToken)
  })
})

describe('fetchCurrentUser', () => {
  /** Verifies QR login resolves the safe user summary with the captured SESSION cookie. */
  it('loads and normalizes the current user', async () => {
    mockAxios.get = vi.fn().mockResolvedValue({
      data: { code: 200, data: authUser },
    })

    await expect(fetchCurrentUser('https://example.com', 'SESSION=qr-session')).resolves.toEqual(safeUserInfo)
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://example.com/gateway/auth-center-service/auth/user/current',
      { headers: { Cookie: 'SESSION=qr-session', 'client-type': 'cli' } },
    )
  })
})
