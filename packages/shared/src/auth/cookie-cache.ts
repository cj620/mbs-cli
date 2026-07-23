// packages/skill-shared/src/auth/cookie-cache.ts
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'
import { getConfigDir } from '../config.js'
import { COOKIE_TTL_MS } from './constants.js'
import type { SessionExpirationReason } from './session-policy.js'

interface CookieCache {
  cookie: string | null
  cookieSavedAt: string | null
  userInfo: import('./context.js').UserInfo | null
  session?: AuthSessionState
}

export interface AuthSessionState {
  verifiedAt: number
  lastActivityAt: number
  expirationReason?: SessionExpirationReason
}

const getCachePath = () => join(getConfigDir(), 'credentials.json')

function readCache(): CookieCache | null {
  const path = getCachePath()
  if (!existsSync(path)) return null
  return JSON.parse(readFileSync(path, 'utf8')) as CookieCache
}

function writeCache(cache: CookieCache): void {
  mkdirSync(getConfigDir(), { recursive: true })
  writeFileSync(getCachePath(), JSON.stringify(cache, null, 2), { encoding: 'utf8', mode: 0o600 })
}

export function readCookie(): string | null {
  const cache = readCache()
  if (!cache?.cookie || !cache.cookieSavedAt) return null
  const age = Date.now() - new Date(cache.cookieSavedAt).getTime()
  if (age > COOKIE_TTL_MS) return null

  return cache.cookie
}

export function readUserInfo(): import('./context.js').UserInfo | null {
  const cache = readCache()
  if (!cache?.cookie || !cache.cookieSavedAt) return null
  const age = Date.now() - new Date(cache.cookieSavedAt).getTime()
  if (age > COOKIE_TTL_MS) return null

  return cache.userInfo ?? null
}

export function writeCookieAndUserInfo(cookie: string, userInfo: import('./context.js').UserInfo): void {
  const existing = readCache()
  writeCache({
    cookie,
    cookieSavedAt: new Date().toISOString(),
    userInfo,
    ...(existing?.session ? { session: existing.session } : {}),
  })
}

export function writeAuthenticatedSession(
  cookie: string,
  userInfo: import('./context.js').UserInfo,
  session: AuthSessionState,
): void {
  writeCache({
    cookie,
    cookieSavedAt: new Date().toISOString(),
    userInfo,
    session,
  })
}

export function readAuthSession(): AuthSessionState | null {
  return readCache()?.session ?? null
}

export function touchAuthSession(now = Date.now()): void {
  const cache = readCache()
  if (!cache?.session || cache.session.expirationReason) return
  writeCache({
    ...cache,
    session: {
      ...cache.session,
      lastActivityAt: Math.max(cache.session.lastActivityAt, now),
    },
  })
}

export function expireAuthSession(reason: SessionExpirationReason): void {
  const cache = readCache()
  if (!cache?.session) return
  writeCache({
    cookie: null,
    cookieSavedAt: null,
    userInfo: null,
    session: {
      ...cache.session,
      expirationReason: reason,
    },
  })
}

export function clearCookie(): void {
  const path = getCachePath()
  if (existsSync(path)) unlinkSync(path)
}

export function readCacheTimestamp(): string | null {
  const cache = readCache()
  if (!cache) return null
  return cache.cookieSavedAt ?? null
}
