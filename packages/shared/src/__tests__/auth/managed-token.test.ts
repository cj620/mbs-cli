import { describe, expect, it } from 'vitest'
import {
  createManagedLongTokenAuthorization,
  normalizeManagedLongToken,
} from '../../auth/managed-token.js'

const MANAGED_TOKEN = `ult_v1_${'a'.repeat(32)}.${'B'.repeat(43)}`

describe('managed LongToken boundary', () => {
  /** Verifies a copied management token is trimmed and converted to the exact server scheme. */
  it('normalizes and formats a valid managed token', () => {
    expect(normalizeManagedLongToken(`  ${MANAGED_TOKEN}  `)).toBe(MANAGED_TOKEN)
    expect(createManagedLongTokenAuthorization(MANAGED_TOKEN)).toBe(`LongToken ${MANAGED_TOKEN}`)
  })

  /** Verifies login Refresh tokens and header-injection characters cannot enter managed storage or headers. */
  it('rejects wrong token types and unsafe input', () => {
    expect(normalizeManagedLongToken(`urt_v1_${'a'.repeat(32)}.${'B'.repeat(43)}`)).toBeNull()
    expect(normalizeManagedLongToken(`${MANAGED_TOKEN}\r\nInjected: value`)).toBeNull()
    expect(createManagedLongTokenAuthorization('invalid')).toBeNull()
  })
})
