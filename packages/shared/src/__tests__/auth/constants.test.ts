import { describe, expect, it } from 'vitest'
import { LOGIN_PATH } from '../../auth/constants.js'

describe('authentication route constants', () => {
  /** Verifies QR login opens the auth-center entry that can issue SESSION and AUTH_REFRESH together. */
  it('uses the auth-center QR login entry', () => {
    expect(LOGIN_PATH).toBe('/gateway/auth-center-service/auth/user/login/qr')
  })
})
