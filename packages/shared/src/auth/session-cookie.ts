export const SESSION_COOKIE_NAME = 'SESSION'
export const AUTH_REFRESH_COOKIE_NAME = 'AUTH_REFRESH'

const MAX_COOKIE_VALUE_LENGTH = 4096

/** Minimal authentication Cookie state safe to persist in the CLI cache. */
export interface AuthCookieBundle {
  /** Cookie request header containing only SESSION and AUTH_REFRESH pairs. */
  cookie: string
  /** Absolute expiry derived from the server or browser Refresh Cookie. */
  refreshExpiresAt: string
}

/** Browser Cookie fields required to assemble the CLI authentication state. */
export interface BrowserAuthCookie {
  /** Browser cookie name. */
  name: string
  /** Browser cookie value, treated as untrusted secret input. */
  value: string
  /** Unix expiry time in seconds; session cookies commonly use a negative value. */
  expires: number
}

/** Validated values extracted from a Cookie request header. */
interface AuthCookieValues {
  session: string
  refresh: string | null
}

/** Returns true when an untrusted Cookie value is bounded and safe for a request header. */
function isSafeCookieValue(value: unknown): value is string {
  return typeof value === 'string'
    && value.length > 0
    && value.length <= MAX_COOKIE_VALUE_LENGTH
    && !/[\s;,\u0000-\u001f\u007f]/u.test(value)
}

/** Formats one validated Cookie pair without attributes. */
function createCookiePair(name: string, value: unknown): string | null {
  return isSafeCookieValue(value) ? `${name}=${value}` : null
}

/**
 * Parses only supported pairs from an untrusted Cookie request header.
 *
 * @param value Cookie request header or legacy Set-Cookie-like text.
 * @returns Unique SESSION and optional AUTH_REFRESH values, or null for unsafe,
 * duplicate, or missing SESSION input. Attributes and unrelated pairs are ignored.
 */
function authCookieValues(value: unknown): AuthCookieValues | null {
  if (typeof value !== 'string' || /[\r\n\u0000]/u.test(value)) return null

  let session: string | null = null
  let refresh: string | null = null
  let sawSession = false
  let sawRefresh = false
  for (const segment of value.split(';')) {
    const pair = segment.trim()
    const separator = pair.indexOf('=')
    if (separator < 1) continue
    const name = pair.slice(0, separator).trim()
    const rawValue = pair.slice(separator + 1).trim()
    if (name === SESSION_COOKIE_NAME) {
      if (sawSession || !isSafeCookieValue(rawValue)) return null
      sawSession = true
      session = rawValue
    } else if (name === AUTH_REFRESH_COOKIE_NAME) {
      if (sawRefresh || !isSafeCookieValue(rawValue)) return null
      sawRefresh = true
      refresh = rawValue
    }
  }
  return session ? { session, refresh } : null
}

/** Builds the canonical request Cookie header from already validated values. */
function formatAuthCookieHeader(values: AuthCookieValues): string {
  const session = `${SESSION_COOKIE_NAME}=${values.session}`
  return values.refresh ? `${session}; ${AUTH_REFRESH_COOKIE_NAME}=${values.refresh}` : session
}

/** Reads one named Cookie value from the first pair of a Set-Cookie line. */
function setCookieValue(line: unknown, name: string): string | null {
  if (typeof line !== 'string' || /[\r\n\u0000]/u.test(line)) return null
  const firstPair = line.split(';', 1)[0].trim()
  const separator = firstPair.indexOf('=')
  if (separator < 1 || firstPair.slice(0, separator).trim() !== name) return null
  const value = firstPair.slice(separator + 1).trim()
  return isSafeCookieValue(value) ? value : null
}

/** Derives an absolute future expiry from a Refresh Set-Cookie Max-Age attribute. */
function refreshExpiryFromSetCookie(line: unknown, nowEpochMs: number): string | null {
  if (typeof line !== 'string' || !Number.isFinite(nowEpochMs)) return null
  const attributes = line.split(';').slice(1)
  for (const attribute of attributes) {
    const separator = attribute.indexOf('=')
    if (separator < 1 || attribute.slice(0, separator).trim().toLowerCase() !== 'max-age') continue
    const rawSeconds = attribute.slice(separator + 1).trim()
    if (!/^\d+$/u.test(rawSeconds)) return null
    const seconds = Number(rawSeconds)
    if (!Number.isSafeInteger(seconds) || seconds <= 0) return null
    const expiresAt = nowEpochMs + seconds * 1000
    return Number.isSafeInteger(expiresAt) ? new Date(expiresAt).toISOString() : null
  }
  return null
}

/** Selects at most one valid Set-Cookie line for a supported Cookie name. */
function uniqueSetCookieLine(value: unknown, name: string): string | null {
  const lines = Array.isArray(value) ? value : [value]
  let selected: string | null = null
  for (const line of lines) {
    if (setCookieValue(line, name) === null) continue
    if (selected !== null) return null
    selected = line as string
  }
  return selected
}

/** Returns whether a Set-Cookie line targets an exact supported Cookie name. */
function hasSetCookieName(line: unknown, name: string): boolean {
  if (typeof line !== 'string') return false
  const firstPair = line.split(';', 1)[0].trim()
  const separator = firstPair.indexOf('=')
  return separator >= 1 && firstPair.slice(0, separator).trim() === name
}

/**
 * Counts Set-Cookie lines for one supported authentication name.
 *
 * @param value Axios' single-line or array Set-Cookie representation.
 * @param name Supported authentication Cookie name to count.
 * @returns Number of response lines targeting the requested name, including
 * malformed values so callers can fail closed instead of silently ignoring them.
 */
function setCookieLineCount(value: unknown, name: string): number {
  const lines = Array.isArray(value) ? value : [value]
  return lines.filter(line => hasSetCookieName(line, name)).length
}

/**
 * Formats a browser SESSION value as a Cookie pair.
 *
 * @param value Cookie value returned by the browser runtime.
 * @returns An exact SESSION cookie pair, or null for unsafe input.
 */
export function createSessionCookie(value: unknown): string | null {
  return createCookiePair(SESSION_COOKIE_NAME, value)
}

/**
 * Normalizes an authentication Cookie header to its two allow-listed pairs.
 *
 * @param value Untrusted Cookie header text.
 * @returns Canonical SESSION plus optional AUTH_REFRESH pairs, or null.
 */
export function normalizeAuthCookieHeader(value: unknown): string | null {
  const values = authCookieValues(value)
  return values ? formatAuthCookieHeader(values) : null
}

/**
 * Reports whether a normalized authentication header contains Refresh material.
 *
 * @param value Untrusted Cookie request header.
 * @returns True only for one valid SESSION and one valid AUTH_REFRESH pair.
 */
export function hasRefreshCookie(value: unknown): boolean {
  const values = authCookieValues(value)
  return values !== null && values.refresh !== null
}

/**
 * Extracts the SESSION pair from a Cookie or Set-Cookie line.
 *
 * @param value Untrusted Cookie header text.
 * @returns Exact SESSION pair, or null when absent or unsafe.
 */
export function normalizeSessionCookie(value: unknown): string | null {
  if (typeof value !== 'string' || /[\r\n\u0000]/u.test(value)) return null

  let session: string | null = null
  for (const segment of value.split(';')) {
    const cookie = setCookieValue(segment, SESSION_COOKIE_NAME)
    if (!cookie) continue
    if (session !== null) return null
    session = cookie
  }
  return session ? `${SESSION_COOKIE_NAME}=${session}` : null
}

/**
 * Selects SESSION from Axios' Set-Cookie response representation.
 *
 * @param value A single Set-Cookie line or array of lines.
 * @returns Exact SESSION pair, or null when omitted or ambiguous.
 */
export function extractSessionCookie(value: unknown): string | null {
  const line = uniqueSetCookieLine(value, SESSION_COOKIE_NAME)
  const session = setCookieValue(line, SESSION_COOKIE_NAME)
  return session ? `${SESSION_COOKIE_NAME}=${session}` : null
}

/**
 * Resolves the compatible SESSION returned by a managed LongToken exchange.
 *
 * <p>Management exchanges must never issue a login Refresh Cookie. A unique
 * response SESSION replaces the current value; when the server reuses an
 * existing session and emits no replacement, the validated current SESSION is
 * retained. Duplicate response sessions fail closed.</p>
 *
 * @param value Axios' Set-Cookie response representation.
 * @param currentCookie Optional existing SESSION request header.
 * @returns An exact SESSION pair, or null for missing initial state, an
 * ambiguous response, or an unexpected login Refresh Cookie.
 */
export function extractManagedSessionCookie(value: unknown, currentCookie?: string): string | null {
  if (setCookieLineCount(value, SESSION_COOKIE_NAME) > 1) return null
  if (setCookieLineCount(value, AUTH_REFRESH_COOKIE_NAME) > 0) return null
  return extractSessionCookie(value) ?? normalizeSessionCookie(currentCookie)
}

/**
 * Creates a complete authentication bundle from an isolated browser context.
 *
 * @param cookies Browser-owned cookie snapshots; unrelated entries are ignored.
 * @param nowEpochMs Current time used to reject missing or expired Refresh cookies.
 * @returns Minimal Cookie header and Refresh expiry, or null for incomplete input.
 */
export function createBrowserAuthCookies(
  cookies: BrowserAuthCookie[],
  nowEpochMs = Date.now(),
): AuthCookieBundle | null {
  const sessions = cookies.filter(cookie => cookie.name === SESSION_COOKIE_NAME)
  const refreshes = cookies.filter(cookie => cookie.name === AUTH_REFRESH_COOKIE_NAME)
  if (sessions.length !== 1 || refreshes.length !== 1) return null
  const session = createCookiePair(SESSION_COOKIE_NAME, sessions[0].value)
  const refresh = createCookiePair(AUTH_REFRESH_COOKIE_NAME, refreshes[0].value)
  const refreshExpiresAtMs = refreshes[0].expires * 1000
  if (!session || !refresh || !Number.isFinite(refreshExpiresAtMs) || refreshExpiresAtMs <= nowEpochMs) return null
  return {
    cookie: `${session}; ${refresh}`,
    refreshExpiresAt: new Date(refreshExpiresAtMs).toISOString(),
  }
}

/**
 * Extracts mandatory login cookies from an Axios Set-Cookie response.
 *
 * @param value One or more Set-Cookie lines from password login.
 * @param nowEpochMs Response receipt time used with Refresh Max-Age.
 * @returns Complete minimal authentication bundle, or null when either Cookie is missing.
 */
export function extractLoginAuthCookies(value: unknown, nowEpochMs = Date.now()): AuthCookieBundle | null {
  const sessionLine = uniqueSetCookieLine(value, SESSION_COOKIE_NAME)
  const refreshLine = uniqueSetCookieLine(value, AUTH_REFRESH_COOKIE_NAME)
  const session = setCookieValue(sessionLine, SESSION_COOKIE_NAME)
  const refresh = setCookieValue(refreshLine, AUTH_REFRESH_COOKIE_NAME)
  const refreshExpiresAt = refreshExpiryFromSetCookie(refreshLine, nowEpochMs)
  if (!session || !refresh || !refreshExpiresAt) return null
  return {
    cookie: `${SESSION_COOKIE_NAME}=${session}; ${AUTH_REFRESH_COOKIE_NAME}=${refresh}`,
    refreshExpiresAt,
  }
}

/**
 * Merges a rotating compatibility-exchange response with its request Cookie.
 *
 * @param value Set-Cookie response lines; a unique rotated AUTH_REFRESH is mandatory.
 * @param currentCookie Cookie header used for the exchange; its SESSION is retained
 * when Spring Session reuses the current identifier and emits no replacement.
 * @param nowEpochMs Response receipt time used with Refresh Max-Age.
 * @returns Updated minimal authentication bundle, or null for an unsafe response.
 */
export function extractRefreshedAuthCookies(
  value: unknown,
  currentCookie: string,
  nowEpochMs = Date.now(),
): AuthCookieBundle | null {
  const current = authCookieValues(currentCookie)
  const refreshLine = uniqueSetCookieLine(value, AUTH_REFRESH_COOKIE_NAME)
  const sessionLine = uniqueSetCookieLine(value, SESSION_COOKIE_NAME)
  if (setCookieLineCount(value, SESSION_COOKIE_NAME) > 1) return null
  const refresh = setCookieValue(refreshLine, AUTH_REFRESH_COOKIE_NAME)
  const session = setCookieValue(sessionLine, SESSION_COOKIE_NAME) ?? current?.session ?? null
  const refreshExpiresAt = refreshExpiryFromSetCookie(refreshLine, nowEpochMs)
  if (!current?.refresh || !session || !refresh || !refreshExpiresAt) return null
  return {
    cookie: `${SESSION_COOKIE_NAME}=${session}; ${AUTH_REFRESH_COOKIE_NAME}=${refresh}`,
    refreshExpiresAt,
  }
}
