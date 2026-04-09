// packages/skill-shared/src/auth/index.ts
import { readCookie, readUserInfo, writeCookieAndUserInfo } from './cookie-cache.js'
import { getKey } from './key-store.js'
import { refreshCookieAndUserInfo } from './refresher.js'
import { getConfig } from '../config.js'
import { NotAuthenticatedError } from '../errors.js'
import type { AuthContext, UserInfo } from './context.js'

export type { AuthContext, UserInfo }
export { NotAuthenticatedError }

export async function getAuthContext(): Promise<AuthContext> {
  const cachedCookie = readCookie()
  const cachedUserInfo = readUserInfo()
  if (cachedCookie && cachedUserInfo) {
    return { cookie: cachedCookie, userInfo: cachedUserInfo }
  }

  const key = await getKey()
  if (!key) throw new NotAuthenticatedError()

  const { apiUrl } = getConfig()
  const { cookie, userInfo } = await refreshCookieAndUserInfo(apiUrl, key)
  writeCookieAndUserInfo(cookie, userInfo)

  return { cookie, userInfo }
}

export async function forceRefreshAuthContext(): Promise<AuthContext> {
  const key = await getKey()
  if (!key) throw new NotAuthenticatedError()

  const { apiUrl } = getConfig()
  const { cookie, userInfo } = await refreshCookieAndUserInfo(apiUrl, key)
  writeCookieAndUserInfo(cookie, userInfo)

  return { cookie, userInfo }
}
