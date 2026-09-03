import axios from 'axios'
import { MBSError, NotAuthenticatedError } from '../errors.js'
import type { AuthContext, RefreshedAuthContext, UserInfo } from './context.js'
import { normalizeUserInfo } from './context.js'
import {
  createManagedLongTokenAuthorization,
  normalizeManagedLongToken,
} from './managed-token.js'
import {
  extractManagedSessionCookie,
  extractLoginAuthCookies,
  extractRefreshedAuthCookies,
  hasRefreshCookie,
  normalizeAuthCookieHeader,
  normalizeSessionCookie,
} from './session-cookie.js'

export const AUTH_SERVICE_PREFIX = '/gateway/auth-center-service'
export const PASSWORD_LOGIN_PATH = `${AUTH_SERVICE_PREFIX}/auth/user/login/password`
export const CURRENT_USER_PATH = `${AUTH_SERVICE_PREFIX}/auth/user/current`
export const COMPAT_SESSION_EXCHANGE_PATH = `${AUTH_SERVICE_PREFIX}/auth/token/exchange/compat-session`

/** Credentials held in memory only for one direct password-login request. */
export interface PasswordLoginCredentials {
  /** Account name; surrounding whitespace is removed before submission. */
  username: string
  /** Password submitted exactly as entered and never persisted by this module. */
  password: string
}

/** Generic auth-center response envelope used by login and current-user routes. */
interface AuthCenterResponse {
  code?: unknown
  data?: unknown
}

/** Validated auth-center payload retained only for the active process. */
interface AccessTokenExchangePayload {
  accessToken: string
  tokenType: 'Bearer'
  expiresInSeconds: number
}

/** Validated managed exchange output before user identity is attached. */
interface ManagedCompatibilityExchange {
  /** Compatible Spring SESSION established or retained by auth-center. */
  cookie: string
  /** Non-rotating management credential retained for later exchanges. */
  managedLongToken: string
  /** Short Bearer credential retained only by the current process. */
  accessToken: string
  /** Absolute local expiry for the current-process Access Token. */
  accessTokenExpiresAt: string
}

const LOOPBACK_HOSTS = new Set(['localhost', '127.0.0.1', '::1', '[::1]'])

/** Returns true when an unknown value is an inspectable object record. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Validates and normalizes the authentication base URL before a request.
 *
 * @param apiUrl Configured MBS API root.
 * @returns The normalized root without trailing slashes.
 * @param requireHttps Whether remote HTTP must be rejected for this operation.
 * @param insecureMessage Safe error text used when HTTPS is required.
 * @throws MBSError when the URL is malformed, embeds credentials, uses an
 * unsupported protocol, or violates the requested HTTPS policy.
 */
function normalizedApiRoot(apiUrl: string, requireHttps: boolean, insecureMessage: string): string {
  let parsed: URL
  try {
    parsed = new URL(apiUrl)
  } catch {
    throw new MBSError('Invalid API URL', 'validation', 'Configure a valid HTTPS MBS API URL')
  }

  if (parsed.username || parsed.password || parsed.search || parsed.hash) {
    throw new MBSError('Invalid API URL', 'validation', 'Configure an API root without credentials, query, or fragment')
  }

  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    throw new MBSError('Invalid API URL', 'validation', 'Configure an HTTP or HTTPS MBS API URL')
  }

  const isLoopbackHttp = parsed.protocol === 'http:' && LOOPBACK_HOSTS.has(parsed.hostname)
  if (requireHttps && parsed.protocol !== 'https:' && !isLoopbackHttp) {
    throw new MBSError(
      insecureMessage,
      'validation',
      'Configure an HTTPS API URL; HTTP is allowed only for a loopback development proxy',
    )
  }

  return apiUrl.replace(/\/+$/, '')
}

/**
 * Validates password-login transport before the CLI asks the user for credentials.
 *
 * @param apiUrl Configured MBS API root.
 * @throws MBSError when credentials could not be sent over an approved transport.
 */
export function validatePasswordLoginApiUrl(apiUrl: string): void {
  normalizedApiRoot(apiUrl, true, 'Password login requires HTTPS')
}

/**
 * Validates managed-token transport before terminal secret collection.
 *
 * @param apiUrl Configured MBS API root.
 * @throws MBSError when the credential could not be sent over HTTPS or an
 * explicitly allowed loopback development proxy.
 */
export function validateManagedTokenLoginApiUrl(apiUrl: string): void {
  normalizedApiRoot(apiUrl, true, 'Long-term Refresh Token login requires HTTPS')
}

/**
 * Validates terminal credentials without transforming the password.
 *
 * @param credentials Values returned by the interactive terminal prompts.
 * @returns A bounded request body with a trimmed username and original password.
 * @throws MBSError when either value is blank or exceeds the auth-center contract.
 */
function passwordRequestBody(credentials: PasswordLoginCredentials): PasswordLoginCredentials {
  const username = credentials.username.trim()
  if (!username || username.length > 128) {
    throw new MBSError('Invalid MBS account', 'validation', 'Enter an account between 1 and 128 characters')
  }
  if (!credentials.password || credentials.password.length > 256) {
    throw new MBSError('Invalid MBS password', 'validation', 'Enter a password between 1 and 256 characters')
  }
  return { username, password: credentials.password }
}

/** Returns an auth-center envelope when the transport body has the expected outer shape. */
function authResponse(value: unknown): AuthCenterResponse | null {
  return isRecord(value) ? value : null
}

/**
 * Validates the short-lived Access Token response without copying unknown fields.
 *
 * @param value Untrusted auth-center response data.
 * @returns Minimal validated payload, or null when token type, format, or lifetime is invalid.
 */
function accessTokenPayload(value: unknown): AccessTokenExchangePayload | null {
  if (!isRecord(value)) return null
  const accessToken = value.accessToken
  const tokenType = value.tokenType
  const expiresInSeconds = value.expiresInSeconds
  if (
    typeof accessToken !== 'string'
    || accessToken.length === 0
    || accessToken.length > 4096
    || /\s/u.test(accessToken)
    || tokenType !== 'Bearer'
    || typeof expiresInSeconds !== 'number'
    || !Number.isSafeInteger(expiresInSeconds)
    || expiresInSeconds <= 0
  ) return null
  return { accessToken, tokenType, expiresInSeconds }
}

/**
 * Converts a transport failure into a safe CLI error that cannot retain request credentials.
 *
 * @param error Unknown Axios or runtime failure.
 * @returns A new classified error containing no Axios request config or response body.
 */
function safeTransportError(error: unknown): Error {
  if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
    return new NotAuthenticatedError()
  }
  return new MBSError(
    'Authentication service request failed',
    'api',
    'Check the configured HTTPS API URL and network connection',
  )
}

/**
 * Authenticates directly against auth-center using terminal-provided credentials.
 *
 * <p>The password exists only in the request object for this call. The returned
 * context contains only the two auth Cookie pairs, the Refresh expiry, and an
 * allow-listed user summary.</p>
 *
 * @param apiUrl Configured MBS API root.
 * @param credentials Interactive credentials that must not be logged or persisted.
 * @returns Safe session context ready for explicit cache persistence.
 */
export async function loginWithPassword(
  apiUrl: string,
  credentials: PasswordLoginCredentials,
): Promise<AuthContext> {
  const root = normalizedApiRoot(apiUrl, true, 'Password login requires HTTPS')
  const body = passwordRequestBody(credentials)

  let response
  try {
    response = await axios.post(`${root}${PASSWORD_LOGIN_PATH}`, body, {
      headers: { 'client-type': 'cli' },
    })
  } catch (error) {
    throw safeTransportError(error)
  }

  const envelope = authResponse(response.data)
  const authCookies = extractLoginAuthCookies(response.headers?.['set-cookie'])
  const userInfo = normalizeUserInfo(envelope?.data)
  if (envelope?.code !== 200 || !authCookies || !userInfo) throw new NotAuthenticatedError()

  return { ...authCookies, userInfo }
}

/**
 * Exchanges exactly one supported long credential for Access and compatible SESSION state.
 *
 * <p>Login Refresh uses Cookie only and requires rotation. Managed LongToken uses
 * the exclusive Authorization scheme, remains unchanged, and may send only its
 * existing SESSION Cookie so auth-center can reuse the compatible session.</p>
 *
 * @param apiUrl Configured MBS API root; remote plaintext HTTP is rejected.
 * @param context Cached authentication containing exactly one supported long credential.
 * @returns Updated Cookie context plus the short Access Token for current-process use.
 * @throws NotAuthenticatedError for missing credentials, rejected authentication, or
 * a malformed success response; throws MBSError for transport/configuration failures.
 */
export async function exchangeCompatibilitySession(
  apiUrl: string,
  context: AuthContext,
): Promise<RefreshedAuthContext> {
  const root = normalizedApiRoot(apiUrl, true, 'Authentication refresh requires HTTPS')
  const cookie = normalizeAuthCookieHeader(context.cookie)
  const hasLoginRefresh = cookie !== null && hasRefreshCookie(cookie)
  if (context.managedLongToken !== undefined) {
    const managedLongToken = normalizeManagedLongToken(context.managedLongToken)
    if (!cookie || !managedLongToken || hasLoginRefresh) throw new NotAuthenticatedError()
    const managedExchange = await exchangeManagedLongToken(root, managedLongToken, cookie)
    return { ...managedExchange, userInfo: context.userInfo }
  }
  if (!cookie || !hasLoginRefresh) throw new NotAuthenticatedError()

  let response
  try {
    response = await axios.post(`${root}${COMPAT_SESSION_EXCHANGE_PATH}`, undefined, {
      headers: { Cookie: cookie, 'client-type': 'cli' },
    })
  } catch (error) {
    throw safeTransportError(error)
  }

  const envelope = authResponse(response.data)
  const token = accessTokenPayload(envelope?.data)
  const authCookies = extractRefreshedAuthCookies(response.headers?.['set-cookie'], cookie)
  if (envelope?.code !== 200 || !token || !authCookies) throw new NotAuthenticatedError()

  return {
    ...authCookies,
    accessToken: token.accessToken,
    accessTokenExpiresAt: new Date(Date.now() + token.expiresInSeconds * 1000).toISOString(),
    userInfo: context.userInfo,
  }
}

/**
 * Exchanges a validated management credential without mixing login Refresh state.
 *
 * <p>An optional SESSION may be sent solely so the server can reuse the same
 * compatible session. AUTH_REFRESH is rejected before this method is called.
 * Transport failures are converted to safe errors that omit headers.</p>
 *
 * @param root Normalized HTTPS or loopback API root.
 * @param managedLongToken Valid management token in auth-center's versioned format.
 * @param currentCookie Optional current SESSION-only Cookie header.
 * @returns Compatible SESSION, unchanged management token, and memory-only Access state.
 * @throws NotAuthenticatedError when request or response identity material is incomplete.
 * @throws MBSError for sanitized transport failures.
 */
async function exchangeManagedLongToken(
  root: string,
  managedLongToken: string,
  currentCookie?: string,
): Promise<ManagedCompatibilityExchange> {
  const authorization = createManagedLongTokenAuthorization(managedLongToken)
  const sessionCookie = currentCookie ? normalizeSessionCookie(currentCookie) : null
  if (!authorization || (currentCookie && !sessionCookie)) throw new NotAuthenticatedError()

  let response
  try {
    response = await axios.post(`${root}${COMPAT_SESSION_EXCHANGE_PATH}`, undefined, {
      headers: {
        Authorization: authorization,
        ...(sessionCookie ? { Cookie: sessionCookie } : {}),
        'client-type': 'cli',
      },
    })
  } catch (error) {
    throw safeTransportError(error)
  }

  const envelope = authResponse(response.data)
  const token = accessTokenPayload(envelope?.data)
  const cookie = extractManagedSessionCookie(response.headers?.['set-cookie'], sessionCookie ?? undefined)
  if (envelope?.code !== 200 || !token || !cookie) throw new NotAuthenticatedError()
  return {
    cookie,
    managedLongToken,
    accessToken: token.accessToken,
    accessTokenExpiresAt: new Date(Date.now() + token.expiresInSeconds * 1000).toISOString(),
  }
}

/**
 * Establishes a persistent CLI login from a manually supplied management token.
 *
 * <p>The secret is validated before transport, exchanged through the exclusive
 * LongToken header, and retained only in the returned authentication context.
 * The short Access Token is discarded because login persists only the long
 * credential, compatible SESSION, and safe current-user summary.</p>
 *
 * @param apiUrl Configured MBS API root; remote plaintext HTTP is rejected.
 * @param value Token pasted into the hidden terminal prompt.
 * @returns Persistable SESSION, managed LongToken, and allow-listed user summary.
 * @throws MBSError for malformed input, unsafe transport, or network failure.
 * @throws NotAuthenticatedError when auth-center rejects the token or omits identity state.
 */
export async function loginWithManagedLongToken(apiUrl: string, value: string): Promise<AuthContext> {
  const root = normalizedApiRoot(apiUrl, true, 'Long-term Refresh Token login requires HTTPS')
  const managedLongToken = normalizeManagedLongToken(value)
  if (!managedLongToken) {
    throw new MBSError(
      'Invalid long-term Refresh Token',
      'validation',
      'Paste the complete management token issued by auth-center',
    )
  }
  const exchange = await exchangeManagedLongToken(root, managedLongToken)
  const userInfo = await fetchCurrentUser(root, exchange.cookie)
  return { cookie: exchange.cookie, managedLongToken, userInfo }
}

/**
 * Resolves the safe identity associated with an existing SESSION cookie.
 *
 * <p>This is used after QR login, where the browser owns authentication and the
 * CLI observes only the resulting session cookie.</p>
 *
 * @param apiUrl Configured MBS API root.
 * @param cookie Exact or legacy-formatted SESSION cookie string.
 * @returns Minimal non-secret user identity.
 */
export async function fetchCurrentUser(apiUrl: string, cookie: string): Promise<UserInfo> {
  const root = normalizedApiRoot(apiUrl, false, 'Authentication requires HTTPS')
  const sessionCookie = normalizeSessionCookie(cookie)
  if (!sessionCookie) throw new NotAuthenticatedError()

  let response
  try {
    response = await axios.get(`${root}${CURRENT_USER_PATH}`, {
      headers: { Cookie: sessionCookie, 'client-type': 'cli' },
    })
  } catch (error) {
    throw safeTransportError(error)
  }

  const envelope = authResponse(response.data)
  const userInfo = normalizeUserInfo(envelope?.data)
  if (envelope?.code !== 200 || !userInfo) throw new NotAuthenticatedError()
  return userInfo
}
