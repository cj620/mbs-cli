/**
 * Minimal non-secret user identity cached beside an authenticated session.
 *
 * <p>The shape intentionally excludes permissions, password-like fields, and
 * reusable authentication material. Nullable organization fields reflect
 * auth-center accounts that are not assigned to a company.</p>
 */
export interface UserInfo {
  /** Stable user identifier supplied by auth-center. */
  id: string
  /** Login identifier used only for display and local cache namespacing. */
  loginName: string
  /** Human-readable user display name. */
  userName: string
  /** Assigned company identifier, or null when the account has no company. */
  companyId: number | null
  /** Assigned company name, or null when unavailable. */
  companyName: string | null
  /** Department display name, or null when unavailable. */
  departmentName: string | null
  /** Position display name, or null when unavailable. */
  positionName: string | null
  /** Group-company identifier used to namespace local metadata caches. */
  groupCompanyId: number | null
  /** Group-company display name, or null when unavailable. */
  groupCompanyName: string | null
}

/**
 * Authenticated request material retained by the CLI for the active login device.
 *
 * <p>Upgraded contexts contain exactly one long credential: AUTH_REFRESH in
 * {@link cookie} with {@link refreshExpiresAt}, or {@link managedLongToken} with
 * a SESSION-only Cookie. Legacy contexts may temporarily contain SESSION only.</p>
 */
export interface AuthContext {
  /** Canonical Cookie header containing SESSION and, after upgraded login, AUTH_REFRESH. */
  cookie: string
  /** Server-declared Refresh Cookie expiry; absent only for bounded legacy SESSION caches. */
  refreshExpiresAt?: string
  /** Non-rotating management credential; mutually exclusive with AUTH_REFRESH. */
  managedLongToken?: string
  /** Minimal non-secret identity associated with the session. */
  userInfo: UserInfo
}

/** Authentication returned by a successful long-to-short compatibility exchange. */
export interface RefreshedAuthContext extends AuthContext {
  /** Short-lived Bearer credential retained only in the current process memory. */
  accessToken: string
  /** Absolute local expiry for the in-memory Access Token. */
  accessTokenExpiresAt: string
}

/** Returns true when a parsed value can be inspected as an object record. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Reads a required non-empty string from the first matching record field. */
function requiredString(record: Record<string, unknown>, fields: string[]): string | null {
  for (const field of fields) {
    const value = record[field]
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return null
}

/** Reads an optional string while normalizing missing and blank values to null. */
function optionalString(record: Record<string, unknown>, fields: string[]): string | null {
  for (const field of fields) {
    const value = record[field]
    if (typeof value === 'string') return value.trim() || null
    if (value === null) return null
  }
  return null
}

/** Reads an optional finite number while normalizing other representations to null. */
function optionalNumber(record: Record<string, unknown>, fields: string[]): number | null {
  for (const field of fields) {
    const value = record[field]
    if (typeof value === 'number' && Number.isFinite(value)) return value
    if (value === null) return null
  }
  return null
}

/**
 * Reduces auth-center or legacy cached user data to the supported safe summary.
 *
 * @param value Untrusted response or cache value.
 * @returns A new allow-listed identity object, or null when required identity
 * fields are absent. Extra fields are never copied into the returned value.
 */
export function normalizeUserInfo(value: unknown): UserInfo | null {
  if (!isRecord(value)) return null

  const id = requiredString(value, ['id', 'userId'])
  const loginName = requiredString(value, ['loginName', 'userId', 'id'])
  const userName = requiredString(value, ['userName', 'displayName'])
  if (!id || !loginName || !userName) return null

  const companyId = optionalNumber(value, ['companyId'])
  const companyName = optionalString(value, ['companyName'])

  return {
    id,
    loginName,
    userName,
    companyId,
    companyName,
    departmentName: optionalString(value, ['departmentName', 'department']),
    positionName: optionalString(value, ['positionName', 'position']),
    groupCompanyId: optionalNumber(value, ['groupCompanyId']) ?? companyId,
    groupCompanyName: optionalString(value, ['groupCompanyName']) ?? companyName,
  }
}
