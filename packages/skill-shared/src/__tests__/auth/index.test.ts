// packages/skill-shared/src/__tests__/auth/index.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getAuthContext } from '../../auth/index.js'

vi.mock('../../auth/cookie-cache.js', () => ({
  readCookie: vi.fn(),
  writeCookie: vi.fn(),
}))

vi.mock('../../auth/key-store.js', () => ({
  getKey: vi.fn(),
}))

vi.mock('../../auth/refresher.js', () => ({
  refreshCookie: vi.fn(),
}))

vi.mock('../../config.js', () => ({
  getConfig: vi.fn().mockReturnValue({ apiUrl: 'http://api.example.com' }),
  getConfigDir: vi.fn().mockReturnValue('/tmp/mbs-test'),
  setConfig: vi.fn(),
}))

import { readCookie, writeCookie } from '../../auth/cookie-cache.js'
import { getKey } from '../../auth/key-store.js'
import { refreshCookie } from '../../auth/refresher.js'

const mockReadCookie = vi.mocked(readCookie)
const mockWriteCookie = vi.mocked(writeCookie)
const mockGetKey = vi.mocked(getKey)
const mockRefreshCookie = vi.mocked(refreshCookie)

beforeEach(() => { vi.clearAllMocks() })

describe('getAuthContext', () => {
  it('returns cached cookie when valid', async () => {
    mockReadCookie.mockReturnValue('SESSION=cached; Path=/')

    const ctx = await getAuthContext()
    expect(ctx.cookie).toBe('SESSION=cached; Path=/')
    expect(mockRefreshCookie).not.toHaveBeenCalled()
  })

  it('refreshes cookie when cache is empty', async () => {
    mockReadCookie.mockReturnValue(null)
    mockGetKey.mockResolvedValue('mykey123')
    mockRefreshCookie.mockResolvedValue('SESSION=new; Path=/')

    const ctx = await getAuthContext()
    expect(ctx.cookie).toBe('SESSION=new; Path=/')
    expect(mockWriteCookie).toHaveBeenCalledWith('SESSION=new; Path=/')
  })

  it('throws NotAuthenticatedError when no key and no cookie', async () => {
    mockReadCookie.mockReturnValue(null)
    mockGetKey.mockResolvedValue(null)

    await expect(getAuthContext()).rejects.toThrow('Not authenticated')
  })
})
