import { describe, expect, it } from 'vitest'
import {
  ABSOLUTE_SESSION_TIMEOUT_MS,
  IDLE_SESSION_TIMEOUT_MS,
  evaluateSession,
} from '../../auth/session-policy.js'

describe('session policy', () => {
  it('expires a session after eight hours without activity', () => {
    const now = Date.UTC(2026, 6, 23, 8, 0, 0)
    const result = evaluateSession(
      {
        verifiedAt: now - 2 * 60 * 60 * 1000,
        lastActivityAt: now - IDLE_SESSION_TIMEOUT_MS,
      },
      now,
    )

    expect(result).toEqual({ active: false, reason: 'idle_timeout' })
  })

  it('expires an active session after twenty-four hours', () => {
    const now = Date.UTC(2026, 6, 24, 8, 0, 0)
    const result = evaluateSession(
      {
        verifiedAt: now - ABSOLUTE_SESSION_TIMEOUT_MS,
        lastActivityAt: now - 60 * 60 * 1000,
      },
      now,
    )

    expect(result).toEqual({ active: false, reason: 'absolute_timeout' })
  })
})
