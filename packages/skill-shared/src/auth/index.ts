// packages/skill-shared/src/auth/index.ts
import { readCookie, writeCookie } from './cookie-cache.js'
import { getKey } from './key-store.js'
import { refreshCookie } from './refresher.js'
import { getConfig } from '../config.js'
import { NotAuthenticatedError } from '../errors.js'
import type { AuthContext } from './context.js'

export type { AuthContext }
export { NotAuthenticatedError }

export async function getAuthContext(): Promise<AuthContext> {
  const cached = readCookie()
  if (cached) return { cookie: cached }

  const key = await getKey()
  if (!key) throw new NotAuthenticatedError()

  const { apiUrl } = getConfig()
  const cookie = await refreshCookie(apiUrl, key)
  writeCookie(cookie)

  return { cookie }
}
