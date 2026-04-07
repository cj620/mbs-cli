// packages/skill-shared/src/auth/cookie-cache.ts
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'
import { getConfigDir } from '../config.js'
import { COOKIE_TTL_MS } from './constants.js'

interface CookieCache {
  cookie: string
  cookieSavedAt: string
}

const getCachePath = () => join(getConfigDir(), 'credentials.json')

export function readCookie(): string | null {
  const path = getCachePath()
  if (!existsSync(path)) return null

  const cache = JSON.parse(readFileSync(path, 'utf8')) as CookieCache
  const age = Date.now() - new Date(cache.cookieSavedAt).getTime()
  if (age > COOKIE_TTL_MS) return null

  return cache.cookie
}

export function writeCookie(cookie: string): void {
  mkdirSync(getConfigDir(), { recursive: true })
  const cache: CookieCache = {
    cookie,
    cookieSavedAt: new Date().toISOString(),
  }
  writeFileSync(getCachePath(), JSON.stringify(cache, null, 2), 'utf8')
}

export function clearCookie(): void {
  const path = getCachePath()
  if (existsSync(path)) unlinkSync(path)
}
