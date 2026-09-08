import { readAuthContextCache, writeCookieAndUserInfo } from './cookie-cache.js'
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
    context.accessToken,
    context.accessTokenExpiresAt,
  )
}

/**
 * Exchanges one already-loaded renewable authentication context and persists
 * the complete validated result without deleting predecessor login material on failure.
 *
 * @param current Coherent cache snapshot containing Refresh Cookie or managed LongToken state.
 * @returns Fresh compatible Cookie and bounded Access Token state.
 * @throws NotAuthenticatedError when the long credential is unavailable or rejected.
 * @throws Error when exchange transport or protected-cache persistence fails.
 */
async function refreshAuthContext(current: AuthContext): Promise<RefreshedAuthContext> {
  if (!current.refreshExpiresAt && !current.managedLongToken) throw new NotAuthenticatedError()

  const refreshed = await exchangeCompatibilitySession(getConfig().apiUrl, current)
  await saveAuthContext(refreshed)
  return refreshed
}

/**
 * Returns authentication ready for a business request.
 *
 * <p>A still-valid persisted Access Token is reused across CLI processes. When
 * the cache has renewable long credential state but no usable Access Token, the
 * long credential is exchanged before the first request and the complete fresh
 * state is persisted. Legacy SESSION-only caches remain available for their
 * bounded compatibility window and can still enter the normal 401/601 retry path.</p>
 *
 * @returns Cached request authentication or a newly exchanged and persisted context.
 * @throws NotAuthenticatedError when no cache exists or a required exchange is rejected.
 * @throws Error when exchange transport or persistence fails.
 */
export async function getRequestAuthContext(): Promise<AuthContext> {
  const current = await getAuthContext()
  if (current.accessToken && current.accessTokenExpiresAt) return current
  if (!current.refreshExpiresAt && !current.managedLongToken) return current
  return await refreshAuthContext(current)
}

/**
 * Renews authentication through auth-center's compatibility exchange.
 *
 * <p>Login-Refresh state rotates; management LongToken state remains unchanged.
 * The Access Token and its expiry are persisted for reuse while still valid.
 * Authentication rejection, transport failure, and persistence failure never
 * delete cached login state; only explicit logout or a new login may do that.
 * Configured HTTP and HTTPS roots are accepted; HTTP transmits credentials
 * without encryption.</p>
 *
 * @returns Updated compatible session state and persisted short Access Token.
 * @throws NotAuthenticatedError when no supported long credential exists or auth-center rejects it.
 * @throws Error for transport or persistence failures; temporary pre-response
 * transport failures preserve the existing cache for a later retry.
 */
export async function forceRefreshAuthContext(): Promise<RefreshedAuthContext> {
  const current = await getAuthContext()
  return await refreshAuthContext(current)
}
