// packages/skill-shared/src/auth/index.ts
import {
  clearCookie,
  expireAuthSession,
  readAuthSession,
  readCookie,
  readUserInfo,
  touchAuthSession,
  writeAuthenticatedSession,
  writeCookieAndUserInfo,
} from './cookie-cache.js'
import { deleteKey, getKey, setKey } from './key-store.js'
import { refreshCookieAndUserInfo } from './refresher.js'
import { getConfig } from '../config.js'
import { NotAuthenticatedError, ReauthenticationRequiredError } from '../errors.js'
import type { AuthContext, UserInfo } from './context.js'
import { evaluateSession } from './session-policy.js'

export type { AuthContext, UserInfo }
export { NotAuthenticatedError, ReauthenticationRequiredError }

let refreshInFlight: Promise<AuthContext> | undefined

async function requireActiveSession(): Promise<void> {
  const session = readAuthSession()
  if (!session) throw new NotAuthenticatedError()

  if (session.expirationReason) {
    throw new ReauthenticationRequiredError(session.expirationReason)
  }

  const evaluation = evaluateSession(session)
  if (evaluation.active) return

  expireAuthSession(evaluation.reason)
  await deleteKey()
  throw new ReauthenticationRequiredError(evaluation.reason)
}

async function refreshWithKey(key: string): Promise<AuthContext> {
  const { apiUrl } = getConfig()
  const { cookie, userInfo } = await refreshCookieAndUserInfo(apiUrl, key)
  await requireActiveSession()
  writeCookieAndUserInfo(cookie, userInfo)
  return { cookie, userInfo }
}

export async function getAuthContext(): Promise<AuthContext> {
  await requireActiveSession()
  const cachedCookie = readCookie()
  const cachedUserInfo = readUserInfo()
  if (cachedCookie && cachedUserInfo) {
    return { cookie: cachedCookie, userInfo: cachedUserInfo }
  }

  return forceRefreshAuthContext()
}

export async function forceRefreshAuthContext(): Promise<AuthContext> {
  await requireActiveSession()
  let pending = refreshInFlight
  if (!pending) {
    pending = (async () => {
      const key = await getKey()
      if (!key) throw new NotAuthenticatedError()
      return refreshWithKey(key)
    })()
    refreshInFlight = pending
  }

  try {
    return await pending
  } finally {
    if (refreshInFlight === pending) refreshInFlight = undefined
  }
}

export async function getRequestAuthContext(): Promise<AuthContext> {
  const context = await getAuthContext()
  touchAuthSession()
  return context
}

export async function establishAuthSession(key: string): Promise<AuthContext> {
  const { apiUrl } = getConfig()
  const { cookie, userInfo } = await refreshCookieAndUserInfo(apiUrl, key)
  const now = Date.now()

  await setKey(key)
  writeAuthenticatedSession(cookie, userInfo, {
    verifiedAt: now,
    lastActivityAt: now,
  })

  return { cookie, userInfo }
}

export async function logoutAuthSession(): Promise<void> {
  await deleteKey()
  clearCookie()
}
