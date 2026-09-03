import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getWhoamiStatus } from '../whoami.js'

const safeUserInfo = {
  id: 'user-1',
  loginName: 'user-1',
  userName: 'Test User',
  companyId: null,
  companyName: null,
  departmentName: null,
  positionName: null,
  groupCompanyId: null,
  groupCompanyName: null,
}

vi.mock('../auth/cookie-cache.js', () => ({
  readAuthContextCache: vi.fn(),
  readCacheTimestamp: vi.fn(),
}))

vi.mock('../auth/key-store.js', () => ({
  deleteKey: vi.fn(),
}))

import { readAuthContextCache, readCacheTimestamp } from '../auth/cookie-cache.js'
import { deleteKey } from '../auth/key-store.js'

const mockDeleteKey = vi.mocked(deleteKey)
const mockReadAuthContextCache = vi.mocked(readAuthContextCache)
const mockReadCacheTimestamp = vi.mocked(readCacheTimestamp)

beforeEach(() => {
  vi.clearAllMocks()
  mockDeleteKey.mockResolvedValue(undefined)
  mockReadAuthContextCache.mockReturnValue(null)
})

describe('getWhoamiStatus', () => {
  /** Verifies status exposes no key preview and reports only safe SESSION identity. */
  it('returns the active safe user summary', async () => {
    mockReadAuthContextCache.mockReturnValue({ cookie: 'SESSION=test-session', userInfo: safeUserInfo })
    mockReadCacheTimestamp.mockReturnValue('2026-09-02T08:00:00.000Z')

    const result = await getWhoamiStatus()

    expect(mockDeleteKey).toHaveBeenCalledTimes(1)
    expect(result).toMatchObject({
      ok: true,
      data: { sessionActive: true, user: safeUserInfo },
    })
    expect(JSON.stringify(result)).not.toContain('keyPreview')
  })

  /** Verifies partial cache state is treated as unauthenticated. */
  it('requires both SESSION and user identity', async () => {
    await expect(getWhoamiStatus()).resolves.toEqual({
      ok: false,
      error: {
        type: 'auth',
        message: 'Not logged in',
        hint: 'Run mbs login and choose an authentication method',
      },
    })
  })
})
