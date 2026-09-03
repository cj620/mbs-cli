/** Exact auth-center Authorization scheme for management-issued long tokens. */
export const MANAGED_LONG_TOKEN_SCHEME = 'LongToken'

const MANAGED_LONG_TOKEN_PATTERN = /^ult_v1_[0-9a-f]{32}\.[A-Za-z0-9_-]{43}$/u

/**
 * Validates a manually supplied auth-center management credential.
 *
 * <p>Surrounding copy/paste whitespace is removed before the exact versioned
 * format is checked. The function never logs, persists, or partially exposes
 * rejected input.</p>
 *
 * @param value Untrusted terminal or cache value.
 * @returns The canonical managed LongToken, or null for a wrong token type,
 * malformed value, control characters, or unsupported version.
 */
export function normalizeManagedLongToken(value: unknown): string | null {
  if (typeof value !== 'string' || /[\r\n\u0000]/u.test(value)) return null
  const normalized = value.trim()
  return MANAGED_LONG_TOKEN_PATTERN.test(normalized) ? normalized : null
}

/**
 * Creates the only Authorization representation accepted by auth-center.
 *
 * @param value Untrusted managed LongToken text.
 * @returns An exact `LongToken <token>` header, or null when validation fails.
 */
export function createManagedLongTokenAuthorization(value: unknown): string | null {
  const token = normalizeManagedLongToken(value)
  return token ? `${MANAGED_LONG_TOKEN_SCHEME} ${token}` : null
}
