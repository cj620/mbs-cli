import { chmodSync, existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { getConfigDir } from '../config.js'
import { MBSError } from '../errors.js'
import { COOKIE_TTL_MS } from './constants.js'
import type { AuthContext, UserInfo } from './context.js'
import { normalizeUserInfo } from './context.js'
import { normalizeManagedLongToken } from './managed-token.js'
import { hasRefreshCookie, normalizeAuthCookieHeader } from './session-cookie.js'

/** Untrusted on-disk session cache representation accepted for legacy migration. */
interface CookieCacheRecord {
  cookie?: unknown
  cookieSavedAt?: unknown
  managedLongToken?: unknown
  refreshExpiresAt?: unknown
  userInfo?: unknown
}

/** Validated cache representation used inside the authentication boundary. */
interface CookieCache {
  cookie: string
  cookieSavedAt: string
  managedLongToken: string | null
  refreshExpiresAt: string | null
  userInfo: UserInfo
}

/** Returns the fixed local path used for the allow-listed authentication Cookie cache. */
function getCachePath(): string {
  return join(getConfigDir(), 'credentials.json')
}

/** Returns true when parsed JSON can be inspected as a cache record. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Reads and validates the complete session cache without exposing parse errors.
 *
 * @returns A normalized, unexpired cache or null for absent, malformed, unsafe,
 * incomplete, expired, or future-dated content.
 */
function readCache(): CookieCache | null {
  const path = getCachePath()
  if (!existsSync(path)) return null

  let value: unknown
  try {
    value = JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    return null
  }
  if (!isRecord(value)) return null

  const record: CookieCacheRecord = value
  const cookie = normalizeAuthCookieHeader(record.cookie)
  const managedLongToken = normalizeManagedLongToken(record.managedLongToken)
  const userInfo = normalizeUserInfo(record.userInfo)
  if (typeof record.cookieSavedAt !== 'string' || !cookie || !userInfo) return null
  if (record.managedLongToken !== undefined && record.managedLongToken !== null && !managedLongToken) return null

  const savedAt = Date.parse(record.cookieSavedAt)
  const age = Date.now() - savedAt
  if (!Number.isFinite(savedAt) || age < 0) return null

  let refreshExpiresAt: string | null = null
  if (hasRefreshCookie(cookie) && managedLongToken) return null
  if (managedLongToken && record.refreshExpiresAt !== undefined && record.refreshExpiresAt !== null) return null
  if (hasRefreshCookie(cookie)) {
    if (typeof record.refreshExpiresAt !== 'string') return null
    const expiresAt = Date.parse(record.refreshExpiresAt)
    if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) return null
    refreshExpiresAt = new Date(expiresAt).toISOString()
  } else if (!managedLongToken && age > COOKIE_TTL_MS) {
    return null
  }

  return { cookie, cookieSavedAt: record.cookieSavedAt, managedLongToken, refreshExpiresAt, userInfo }
}

/** Returns the active canonical authentication Cookie header, or null when no valid cache exists. */
export function readCookie(): string | null {
  return readCache()?.cookie ?? null
}

/** Returns a newly normalized safe user summary, or null when no valid cache exists. */
export function readUserInfo(): UserInfo | null {
  return readCache()?.userInfo ?? null
}

/** Returns the validated Refresh Cookie expiry, or null for legacy or invalid cache state. */
export function readRefreshExpiresAt(): string | null {
  return readCache()?.refreshExpiresAt ?? null
}

/**
 * Returns the validated management credential for a refreshable headless login.
 *
 * @returns The complete managed LongToken or null when the cache is absent,
 * invalid, expired through another credential branch, or login-Refresh based.
 */
export function readManagedLongToken(): string | null {
  return readCache()?.managedLongToken ?? null
}

/**
 * Reads one coherent authentication snapshot from the protected cache.
 *
 * <p>A single parse prevents concurrent writers from causing Cookie data from
 * one credential branch to be combined with long credentials or user data from
 * another branch.</p>
 *
 * @returns A validated context with at most one long credential, or null when
 * the cache is absent, malformed, incomplete, expired, or ambiguous.
 */
export function readAuthContextCache(): AuthContext | null {
  const cache = readCache()
  if (!cache) return null
  return {
    cookie: cache.cookie,
    ...(cache.managedLongToken ? { managedLongToken: cache.managedLongToken } : {}),
    ...(cache.refreshExpiresAt ? { refreshExpiresAt: cache.refreshExpiresAt } : {}),
    userInfo: cache.userInfo,
  }
}

/**
 * Persists only normalized authentication Cookie pairs and allow-listed identity.
 *
 * @param cookie Cookie header or pair that must contain a valid SESSION value.
 * @param userInfo Identity data; only fields supported by normalizeUserInfo are written.
 * @param refreshExpiresAt Required absolute expiry when cookie contains AUTH_REFRESH;
 * omitted only for the bounded legacy SESSION-only compatibility format.
 * @param managedLongToken Optional management credential, mutually exclusive
 * with AUTH_REFRESH and persisted only in the current-user cache.
 * @throws MBSError when either input cannot be reduced to the safe cache contract.
 */
export function writeCookieAndUserInfo(
  cookie: string,
  userInfo: UserInfo,
  refreshExpiresAt?: string,
  managedLongToken?: string,
): void {
  const authCookie = normalizeAuthCookieHeader(cookie)
  const safeManagedLongToken = normalizeManagedLongToken(managedLongToken)
  const safeUserInfo = normalizeUserInfo(userInfo)
  const parsedRefreshExpiry = typeof refreshExpiresAt === 'string' ? Date.parse(refreshExpiresAt) : Number.NaN
  const normalizedRefreshExpiry = hasRefreshCookie(authCookie)
    && Number.isFinite(parsedRefreshExpiry)
    && parsedRefreshExpiry > Date.now()
    ? new Date(parsedRefreshExpiry).toISOString()
    : null
  const hasLoginRefresh = hasRefreshCookie(authCookie)
  const hasInvalidManagedInput = managedLongToken !== undefined && safeManagedLongToken === null
  const hasAmbiguousCredentials = hasLoginRefresh && safeManagedLongToken !== null
  const hasMisappliedExpiry = safeManagedLongToken !== null && refreshExpiresAt !== undefined
  if (
    !authCookie
    || !safeUserInfo
    || (hasLoginRefresh && !normalizedRefreshExpiry)
    || hasInvalidManagedInput
    || hasAmbiguousCredentials
    || hasMisappliedExpiry
  ) {
    throw new MBSError('Invalid authentication session', 'validation', 'Run mbs login again')
  }

  mkdirSync(getConfigDir(), { recursive: true })
  const cache: CookieCache = {
    cookie: authCookie,
    cookieSavedAt: new Date().toISOString(),
    managedLongToken: safeManagedLongToken,
    refreshExpiresAt: normalizedRefreshExpiry,
    userInfo: safeUserInfo,
  }
  const path = getCachePath()
  writeFileSync(path, JSON.stringify(cache, null, 2), { encoding: 'utf8', mode: 0o600 })
  chmodSync(path, 0o600)
}

/** Removes the complete local session cache when it exists. */
export function clearCookie(): void {
  const path = getCachePath()
  if (existsSync(path)) unlinkSync(path)
}

/** Returns the active cache timestamp, or null for absent or invalid cache state. */
export function readCacheTimestamp(): string | null {
  return readCache()?.cookieSavedAt ?? null
}
