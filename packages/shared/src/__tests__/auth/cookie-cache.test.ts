import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import {
  clearCookie,
  readAuthContextCache,
  readCacheTimestamp,
  readCookie,
  readManagedLongToken,
  readRefreshExpiresAt,
  readUserInfo,
  writeCookieAndUserInfo,
} from '../../auth/cookie-cache.js'
import { COOKIE_TTL_MS } from '../../auth/constants.js'

let tmpDir: string

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
  tmpDir = mkdtempSync(join(tmpdir(), 'mbs-cookie-test-'))
  process.env.MBS_CONFIG_DIR = tmpDir
})

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true })
  delete process.env.MBS_CONFIG_DIR
  vi.useRealTimers()
})

describe('cookie-cache', () => {
  /** Verifies absent cache state is consistently reported as unauthenticated. */
  it('returns null when no cache file exists', () => {
    expect(readCookie()).toBeNull()
    expect(readUserInfo()).toBeNull()
    expect(readCacheTimestamp()).toBeNull()
    expect(readRefreshExpiresAt()).toBeNull()
    expect(readManagedLongToken()).toBeNull()
  })

  /** Verifies a managed LongToken is persisted only with SESSION and remains refreshable beyond legacy TTL. */
  it('stores a managed LongToken as a mutually exclusive credential source', () => {
    vi.useFakeTimers()
    writeCookieAndUserInfo('SESSION=managed-session', safeUserInfo, undefined, managedLongToken)

    expect(readManagedLongToken()).toBe(managedLongToken)
    expect(readAuthContextCache()).toEqual({
      cookie: 'SESSION=managed-session',
      managedLongToken,
      userInfo: safeUserInfo,
    })
    expect(readRefreshExpiresAt()).toBeNull()
    vi.advanceTimersByTime(COOKIE_TTL_MS + 1000)
    expect(readCookie()).toBe('SESSION=managed-session')
    expect(readManagedLongToken()).toBe(managedLongToken)
  })

  /** Verifies one cache cannot mix rotating login Refresh and non-rotating managed LongToken sources. */
  it('rejects ambiguous long credential persistence', () => {
    expect(() => writeCookieAndUserInfo(
      'SESSION=ambiguous; AUTH_REFRESH=login-refresh',
      safeUserInfo,
      new Date(Date.now() + 60_000).toISOString(),
      managedLongToken,
    )).toThrow('Invalid authentication session')
  })

  /** Verifies malformed managed-token fields cannot be downgraded to a usable legacy SESSION cache. */
  it('rejects an invalid persisted managed token', () => {
    writeFileSync(join(tmpDir, 'credentials.json'), JSON.stringify({
      cookie: 'SESSION=managed-session',
      cookieSavedAt: new Date().toISOString(),
      managedLongToken: 'invalid',
      refreshExpiresAt: null,
      userInfo: safeUserInfo,
    }))

    expect(readCookie()).toBeNull()
    expect(readManagedLongToken()).toBeNull()
  })

  /** Verifies managed-token cache data cannot retain login-Refresh lifetime metadata. */
  it('rejects managed-token cache data with a login-Refresh expiry', () => {
    writeFileSync(join(tmpDir, 'credentials.json'), JSON.stringify({
      cookie: 'SESSION=managed-session',
      cookieSavedAt: new Date().toISOString(),
      managedLongToken,
      refreshExpiresAt: new Date(Date.now() + 60_000).toISOString(),
      userInfo: safeUserInfo,
    }))

    expect(readAuthContextCache()).toBeNull()
  })

  /** Verifies persistence keeps only auth Cookie pairs, Refresh expiry, and safe user fields. */
  it('stores only the authentication cookies and safe user summary', () => {
    const refreshExpiresAt = new Date(Date.now() + 60_000).toISOString()
    writeCookieAndUserInfo('SESSION=abc123; AUTH_REFRESH=refresh123; Path=/; HttpOnly', {
      ...safeUserInfo,
      password: 'must-not-be-stored',
    } as never, refreshExpiresAt)

    expect(readCookie()).toBe('SESSION=abc123; AUTH_REFRESH=refresh123')
    expect(readRefreshExpiresAt()).toBe(refreshExpiresAt)
    expect(readUserInfo()).toEqual(safeUserInfo)
    const persisted = readFileSync(join(tmpDir, 'credentials.json'), 'utf8')
    expect(persisted).not.toContain('Path=/')
    expect(persisted).not.toContain('must-not-be-stored')
  })

  /** Verifies legacy cache data is reduced to the current safe representation on read. */
  it('sanitizes a legacy cache without exposing password fields', () => {
    writeFileSync(join(tmpDir, 'credentials.json'), JSON.stringify({
      cookie: 'SESSION=legacy-session; Path=/; HttpOnly',
      cookieSavedAt: new Date().toISOString(),
      userInfo: {
        ...safeUserInfo,
        password: 'legacy-secret',
        mabangPassword: 'legacy-secret',
      },
    }))

    expect(readCookie()).toBe('SESSION=legacy-session')
    expect(readUserInfo()).toEqual(safeUserInfo)
  })

  /** Verifies malformed cache content never crashes an authentication check. */
  it('treats malformed cache JSON as absent', () => {
    writeFileSync(join(tmpDir, 'credentials.json'), '{not-json')

    expect(readCookie()).toBeNull()
    expect(readUserInfo()).toBeNull()
    expect(readCacheTimestamp()).toBeNull()
  })

  /** Verifies Refresh-backed authentication follows the server-declared absolute expiry. */
  it('returns null when the Refresh Cookie is expired', () => {
    vi.useFakeTimers()
    const refreshExpiresAt = new Date(Date.now() + 60_000).toISOString()
    writeCookieAndUserInfo('SESSION=abc123; AUTH_REFRESH=refresh123', safeUserInfo, refreshExpiresAt)
    vi.advanceTimersByTime(61_000)

    expect(readCookie()).toBeNull()
    expect(readUserInfo()).toBeNull()
  })

  /** Verifies a legacy SESSION-only cache remains readable only inside its original two-hour window. */
  it('retains the bounded legacy SESSION-only compatibility window', () => {
    vi.useFakeTimers()
    writeCookieAndUserInfo('SESSION=legacy-session', safeUserInfo)
    vi.advanceTimersByTime(COOKIE_TTL_MS - 1000)
    expect(readCookie()).toBe('SESSION=legacy-session')
    expect(readRefreshExpiresAt()).toBeNull()
    vi.advanceTimersByTime(2000)
    expect(readCookie()).toBeNull()
  })

  /** Verifies Refresh Cookie persistence is rejected without a trustworthy expiry. */
  it('rejects a Refresh Cookie without its expiry', () => {
    expect(() => writeCookieAndUserInfo(
      'SESSION=abc123; AUTH_REFRESH=refresh123',
      safeUserInfo,
    )).toThrow('Invalid authentication session')
  })

  /** Verifies logout can remove the complete session cache. */
  it('clearCookie removes the cache file', () => {
    writeCookieAndUserInfo('SESSION=abc123', safeUserInfo)
    clearCookie()

    expect(readCookie()).toBeNull()
    expect(readUserInfo()).toBeNull()
  })
})
