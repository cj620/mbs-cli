// packages/skill-shared/src/__tests__/auth/key-store.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getKey, setKey, deleteKey } from '../../auth/key-store.js'
import { KEYTAR_SERVICE, KEYTAR_ACCOUNT } from '../../auth/constants.js'

vi.mock('@keytar/node-keytar', () => ({
  default: {
    getPassword: vi.fn(),
    setPassword: vi.fn(),
    deletePassword: vi.fn(),
  },
}))

import keytar from '@keytar/node-keytar'
const mockKeytar = vi.mocked(keytar)

beforeEach(() => { vi.clearAllMocks() })

describe('key-store', () => {
  it('getKey returns null when no key stored', async () => {
    mockKeytar.getPassword.mockResolvedValue(null)
    const result = await getKey()
    expect(result).toBeNull()
    expect(mockKeytar.getPassword).toHaveBeenCalledWith(KEYTAR_SERVICE, KEYTAR_ACCOUNT)
  })

  it('getKey returns stored key', async () => {
    mockKeytar.getPassword.mockResolvedValue('mykey123')
    const result = await getKey()
    expect(result).toBe('mykey123')
  })

  it('setKey calls keytar.setPassword', async () => {
    mockKeytar.setPassword.mockResolvedValue(undefined)
    await setKey('mykey123')
    expect(mockKeytar.setPassword).toHaveBeenCalledWith(KEYTAR_SERVICE, KEYTAR_ACCOUNT, 'mykey123')
  })

  it('deleteKey calls keytar.deletePassword', async () => {
    mockKeytar.deletePassword.mockResolvedValue(true)
    await deleteKey()
    expect(mockKeytar.deletePassword).toHaveBeenCalledWith(KEYTAR_SERVICE, KEYTAR_ACCOUNT)
  })
})
