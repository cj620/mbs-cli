import { describe, expect, it } from 'vitest'
import {
  createBrowserAuthCookies,
  extractManagedSessionCookie,
  extractLoginAuthCookies,
  extractRefreshedAuthCookies,
  normalizeAuthCookieHeader,
  normalizeSessionCookie,
} from '../../auth/session-cookie.js'

describe('authentication Cookie boundary', () => {
  /** Verifies browser cookies become a minimal Cookie header with the Refresh absolute expiry. */
  it('creates authentication cookies from browser state', () => {
    expect(createBrowserAuthCookies([
      { name: 'tracking', value: 'discard', expires: -1 },
      { name: 'AUTH_REFRESH', value: 'refresh-value', expires: 4_102_444_800 },
      { name: 'SESSION', value: 'session-value', expires: -1 },
    ], Date.parse('2026-09-03T00:00:00.000Z'))).toEqual({
      cookie: 'SESSION=session-value; AUTH_REFRESH=refresh-value',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
    })
  })

  /** Verifies password login extracts both cookies and Max-Age without persisting attributes. */
  it('extracts a complete login Cookie bundle', () => {
    expect(extractLoginAuthCookies([
      'SESSION=session-value; Path=/; HttpOnly',
      'AUTH_REFRESH=refresh-value; Path=/; Max-Age=60; HttpOnly',
    ], Date.parse('2026-09-03T00:00:00.000Z'))).toEqual({
      cookie: 'SESSION=session-value; AUTH_REFRESH=refresh-value',
      refreshExpiresAt: '2026-09-03T00:01:00.000Z',
    })
  })

  /** Verifies refresh requires a rotated Refresh Cookie but may retain an unchanged SESSION pair. */
  it('merges a rotated Refresh Cookie with the current SESSION', () => {
    expect(extractRefreshedAuthCookies(
      ['AUTH_REFRESH=rotated; Path=/; Max-Age=60; HttpOnly'],
      'SESSION=current; AUTH_REFRESH=old',
      Date.parse('2026-09-03T00:00:00.000Z'),
    )).toEqual({
      cookie: 'SESSION=current; AUTH_REFRESH=rotated',
      refreshExpiresAt: '2026-09-03T00:01:00.000Z',
    })
  })

  /** Verifies an ambiguous replacement SESSION is rejected rather than falling back to the old value. */
  it('rejects duplicate refreshed SESSION cookies', () => {
    expect(extractRefreshedAuthCookies(
      [
        'SESSION=first; Path=/; HttpOnly',
        'SESSION=second; Path=/; HttpOnly',
        'AUTH_REFRESH=rotated; Path=/; Max-Age=60; HttpOnly',
      ],
      'SESSION=current; AUTH_REFRESH=old',
      Date.parse('2026-09-03T00:00:00.000Z'),
    )).toBeNull()
  })

  /** Verifies managed exchange rejects every response that targets login Refresh state. */
  it('rejects unexpected or ambiguous managed-exchange cookies', () => {
    expect(extractManagedSessionCookie(
      ['AUTH_REFRESH=; Path=/; Max-Age=0'],
      'SESSION=current',
    )).toBeNull()
    expect(extractManagedSessionCookie([
      'SESSION=fresh; Path=/',
      'SESSION=bad value; Path=/',
    ], 'SESSION=current')).toBeNull()
  })

  /** Verifies duplicate or control-character Cookie input is rejected instead of normalized ambiguously. */
  it('rejects unsafe and duplicate auth cookies', () => {
    expect(normalizeAuthCookieHeader('SESSION=one; SESSION=two; AUTH_REFRESH=refresh')).toBeNull()
    expect(normalizeSessionCookie('SESSION=one; SESSION=two')).toBeNull()
    expect(normalizeAuthCookieHeader('SESSION=one\nInjected=x; AUTH_REFRESH=refresh')).toBeNull()
  })
})
