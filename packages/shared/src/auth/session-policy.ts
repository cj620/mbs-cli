export const IDLE_SESSION_TIMEOUT_MS = 8 * 60 * 60 * 1000
export const ABSOLUTE_SESSION_TIMEOUT_MS = 24 * 60 * 60 * 1000

export type SessionExpirationReason = 'idle_timeout' | 'absolute_timeout'

export interface SessionTimestamps {
  verifiedAt: number
  lastActivityAt: number
}

export type SessionEvaluation =
  | { active: true; idleExpiresAt: number; absoluteExpiresAt: number }
  | { active: false; reason: SessionExpirationReason }

export function evaluateSession(session: SessionTimestamps, now = Date.now()): SessionEvaluation {
  const idleExpiresAt = session.lastActivityAt + IDLE_SESSION_TIMEOUT_MS
  const absoluteExpiresAt = session.verifiedAt + ABSOLUTE_SESSION_TIMEOUT_MS

  if (now >= idleExpiresAt && idleExpiresAt <= absoluteExpiresAt) {
    return { active: false, reason: 'idle_timeout' }
  }
  if (now >= absoluteExpiresAt) {
    return { active: false, reason: 'absolute_timeout' }
  }

  return { active: true, idleExpiresAt, absoluteExpiresAt }
}
