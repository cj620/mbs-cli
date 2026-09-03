import { readAuthContextCache, readCacheTimestamp } from './auth/cookie-cache.js'
import { deleteKey } from './auth/key-store.js'
import type { UserInfo } from './auth/context.js'

/** Safe status returned when a complete cached authentication context is active. */
interface AuthenticatedWhoamiStatus {
  ok: true
  data: {
    /** Whether a usable SESSION cookie is cached. */
    sessionActive: true
    /** Minimal non-secret identity associated with the session. */
    user: UserInfo
    /** Human-readable cache time in the project timezone, or null if unavailable. */
    updatedAt: string | null
  }
}

/** Stable local status returned when no complete authentication context is active. */
interface UnauthenticatedWhoamiStatus {
  ok: false
  error: {
    /** Stable authentication failure category. */
    type: 'auth'
    /** Safe local status message. */
    message: string
    /** Safe remediation that does not reference reusable credentials. */
    hint: string
  }
}

/** Public non-secret result contract for the whoami command. */
export type WhoamiStatus = AuthenticatedWhoamiStatus | UnauthenticatedWhoamiStatus

/**
 * Reports cached Cookie authentication status after deleting legacy key storage.
 *
 * @returns A safe identity summary when both cookie and user cache entries are valid.
 */
export async function getWhoamiStatus(): Promise<WhoamiStatus> {
  await deleteKey()
  const context = readAuthContextCache()
  if (!context) {
    return {
      ok: false,
      error: {
        type: 'auth',
        message: 'Not logged in',
        hint: 'Run mbs login and choose an authentication method',
      },
    }
  }

  const timestamp = readCacheTimestamp()
  return {
    ok: true,
    data: {
      sessionActive: true,
      user: context.userInfo,
      updatedAt: timestamp
        ? new Date(timestamp).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
        : null,
    },
  }
}
