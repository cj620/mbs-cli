import {
  clearCookie,
  readAuthContextCache,
  writeCookieAndUserInfo,
} from './cookie-cache.js'
import { deleteKey } from './key-store.js'
import { NotAuthenticatedError } from '../errors.js'
import { getConfig } from '../config.js'
import type { AuthContext, RefreshedAuthContext, UserInfo } from './context.js'
import { exchangeCompatibilitySession } from './session-login.js'

export type { AuthContext, RefreshedAuthContext, UserInfo }
export { NotAuthenticatedError }

/**
 * Returns the active cached Cookie context after removing legacy key storage.
 *
 * @returns The unexpired session, exactly one optional long credential, and safe user summary.
 * @throws NotAuthenticatedError when either cache component is unavailable.
 */
export async function getAuthContext(): Promise<AuthContext> {
  await deleteKey()
  const context = readAuthContextCache()
  if (!context) throw new NotAuthenticatedError()
  return context
}

/**
 * Persists a newly authenticated context after deleting legacy MBS key storage.
 *
 * @param context Context returned by QR, password, or managed-token login.
 */
export async function saveAuthContext(context: AuthContext): Promise<void> {
  await deleteKey()
  writeCookieAndUserInfo(
    context.cookie,
    context.userInfo,
    context.refreshExpiresAt,
    context.managedLongToken,
  )
}

/**
 * Renews authentication through auth-center's compatibility exchange.
 *
 * <p>Login-Refresh state rotates; management LongToken state remains unchanged.
 * The Access Token is returned only to the active process. Persistence writes
 * only approved long credential, compatible Cookie, and safe user state.
 * Authentication rejection or uncertain persistence clears the local cache to
 * prevent replaying credentials that may already be invalid. Configured HTTP and
 * HTTPS roots are accepted; HTTP transmits credentials without encryption.</p>
 *
 * @returns Updated compatible session state and a memory-only short Access Token.
 * @throws NotAuthenticatedError when no supported long credential exists or auth-center rejects it.
 * @throws Error for transport or persistence failures; temporary pre-response
 * transport failures preserve the existing cache for a later retry.
 */
export async function forceRefreshAuthContext(): Promise<RefreshedAuthContext> {
  const current = await getAuthContext()
  if (!current.refreshExpiresAt && !current.managedLongToken) {
    clearCookie()
    throw new NotAuthenticatedError()
  }

  let refreshed: RefreshedAuthContext
  try {
    refreshed = await exchangeCompatibilitySession(getConfig().apiUrl, current)
  } catch (error) {
    if (error instanceof NotAuthenticatedError) clearCookie()
    throw error
  }

  try {
    await saveAuthContext(refreshed)
  } catch (error) {
    clearCookie()
    throw error
  }
  return refreshed
}
