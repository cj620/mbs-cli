// packages/skill-shared/src/__tests__/auth/index.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  establishAuthSession,
  forceRefreshAuthContext,
  getAuthContext,
  getRequestAuthContext,
  logoutAuthSession,
} from '../../auth/index.js'

const mockUserInfo = {
  id: '15357',
  loginName: '15779582731',
  userName: '昌建',
  employeeId: '4202',
  departmentId: 71,
  departmentName: '胤元总经办',
  positionId: 145,
  positionName: '运营总经理',
  permission: '10,1010,1020',
  companyId: null,
  companyName: null,
  dataPermission: '0',
  allPlatformId: null,
  createdBy: '15198',
  createdOn: '2025-04-14 10:32:30.0',
  groupCompanyId: 1,
  groupCompanyName: '上海胤元电子科技有限公司（上海总部）',
  jumpType: '0',
  mabangLoginName: '昌建',
  mabangPassword: '无法查看 ^_^',
  mabangerpId: null,
  manageAuthority: null,
  password: '无法查看 ^_^',
  platformId: null,
  roleList: null,
  status: 1,
  teamId: null,
}

vi.mock('../../auth/cookie-cache.js', () => ({
  clearCookie: vi.fn(),
  readCookie: vi.fn(),
  readUserInfo: vi.fn(),
  writeCookieAndUserInfo: vi.fn(),
  readAuthSession: vi.fn(),
  touchAuthSession: vi.fn(),
  expireAuthSession: vi.fn(),
  writeAuthenticatedSession: vi.fn(),
}))

vi.mock('../../auth/key-store.js', () => ({
  getKey: vi.fn(),
  setKey: vi.fn(),
  deleteKey: vi.fn(),
}))

vi.mock('../../auth/refresher.js', () => ({
  refreshCookieAndUserInfo: vi.fn(),
}))

vi.mock('../../config.js', () => ({
  getConfig: vi.fn().mockReturnValue({ apiUrl: 'http://api.example.com' }),
  getConfigDir: vi.fn().mockReturnValue('/tmp/mbs-test'),
  setConfig: vi.fn(),
}))

import {
  expireAuthSession,
  clearCookie,
  readAuthSession,
  readCookie,
  readUserInfo,
  touchAuthSession,
  writeAuthenticatedSession,
  writeCookieAndUserInfo,
} from '../../auth/cookie-cache.js'
import { deleteKey, getKey, setKey } from '../../auth/key-store.js'
import { refreshCookieAndUserInfo } from '../../auth/refresher.js'

const mockReadCookie = vi.mocked(readCookie)
const mockReadUserInfo = vi.mocked(readUserInfo)
const mockWriteCookieAndUserInfo = vi.mocked(writeCookieAndUserInfo)
const mockReadAuthSession = vi.mocked(readAuthSession)
const mockExpireAuthSession = vi.mocked(expireAuthSession)
const mockTouchAuthSession = vi.mocked(touchAuthSession)
const mockWriteAuthenticatedSession = vi.mocked(writeAuthenticatedSession)
const mockClearCookie = vi.mocked(clearCookie)
const mockGetKey = vi.mocked(getKey)
const mockDeleteKey = vi.mocked(deleteKey)
const mockSetKey = vi.mocked(setKey)
const mockRefreshCookieAndUserInfo = vi.mocked(refreshCookieAndUserInfo)

beforeEach(() => {
  vi.clearAllMocks()
  mockReadAuthSession.mockReturnValue({
    verifiedAt: Date.now(),
    lastActivityAt: Date.now(),
  })
})

describe('getAuthContext', () => {
  it('returns cached cookie and userInfo when valid', async () => {
    mockReadCookie.mockReturnValue('SESSION=cached; Path=/')
    mockReadUserInfo.mockReturnValue(mockUserInfo)

    const ctx = await getAuthContext()
    expect(ctx.cookie).toBe('SESSION=cached; Path=/')
    expect(ctx.userInfo).toEqual(mockUserInfo)
    expect(mockRefreshCookieAndUserInfo).not.toHaveBeenCalled()
  })

  it('refreshes cookie and userInfo when cache is empty', async () => {
    mockReadCookie.mockReturnValue(null)
    mockReadUserInfo.mockReturnValue(null)
    mockGetKey.mockResolvedValue('mykey123')
    mockRefreshCookieAndUserInfo.mockResolvedValue({
      cookie: 'SESSION=new; Path=/',
      userInfo: mockUserInfo,
    })

    const ctx = await getAuthContext()
    expect(ctx.cookie).toBe('SESSION=new; Path=/')
    expect(ctx.userInfo).toEqual(mockUserInfo)
    expect(mockWriteCookieAndUserInfo).toHaveBeenCalledWith('SESSION=new; Path=/', mockUserInfo)
  })

  it('throws NotAuthenticatedError when no key and no cookie', async () => {
    mockReadCookie.mockReturnValue(null)
    mockReadUserInfo.mockReturnValue(null)
    mockGetKey.mockResolvedValue(null)

    await expect(getAuthContext()).rejects.toThrow('Not authenticated')
  })

  it('requires browser reauthentication after the idle deadline', async () => {
    mockReadAuthSession.mockReturnValue({
      verifiedAt: Date.now() - 60 * 60 * 1000,
      lastActivityAt: Date.now() - 8 * 60 * 60 * 1000,
    })

    await expect(getAuthContext()).rejects.toMatchObject({ reason: 'idle_timeout' })
    expect(mockExpireAuthSession).toHaveBeenCalledWith('idle_timeout')
    expect(mockDeleteKey).toHaveBeenCalled()
  })

  it('does not return a refreshed cookie when the absolute deadline passes during refresh', async () => {
    const now = Date.now()
    mockReadAuthSession
      .mockReturnValueOnce({
        verifiedAt: now - 23 * 60 * 60 * 1000,
        lastActivityAt: now,
      })
      .mockReturnValueOnce({
        verifiedAt: now - 24 * 60 * 60 * 1000,
        lastActivityAt: now,
      })
    mockGetKey.mockResolvedValue('candidate-key')
    mockRefreshCookieAndUserInfo.mockResolvedValue({
      cookie: 'SESSION=new; Path=/',
      userInfo: mockUserInfo,
    })

    await expect(forceRefreshAuthContext()).rejects.toMatchObject({ reason: 'absolute_timeout' })
    expect(mockWriteCookieAndUserInfo).not.toHaveBeenCalled()
  })

  it('records activity only when a business request obtains credentials', async () => {
    mockReadCookie.mockReturnValue('SESSION=cached; Path=/')
    mockReadUserInfo.mockReturnValue(mockUserInfo)

    await expect(getRequestAuthContext()).resolves.toMatchObject({ cookie: 'SESSION=cached; Path=/' })
    expect(mockTouchAuthSession).toHaveBeenCalledOnce()
  })

  it('commits a newly verified key with fresh session timestamps', async () => {
    mockRefreshCookieAndUserInfo.mockResolvedValue({
      cookie: 'SESSION=new; Path=/',
      userInfo: mockUserInfo,
    })

    await expect(establishAuthSession('candidate-key')).resolves.toMatchObject({ cookie: 'SESSION=new; Path=/' })
    expect(mockSetKey).toHaveBeenCalledWith('candidate-key')
    expect(mockWriteAuthenticatedSession).toHaveBeenCalledWith(
      'SESSION=new; Path=/',
      mockUserInfo,
      expect.objectContaining({
        verifiedAt: expect.any(Number),
        lastActivityAt: expect.any(Number),
      }),
    )
  })

  it('clears both the key and the cache on logout', async () => {
    await logoutAuthSession()

    expect(mockDeleteKey).toHaveBeenCalledOnce()
    expect(mockClearCookie).toHaveBeenCalledOnce()
  })

  it('shares an in-flight cookie refresh across concurrent requests', async () => {
    mockGetKey.mockResolvedValue('candidate-key')
    let resolveRefresh!: (value: { cookie: string; userInfo: typeof mockUserInfo }) => void
    mockRefreshCookieAndUserInfo.mockReturnValue(
      new Promise((resolve) => {
        resolveRefresh = resolve
      }),
    )

    const first = forceRefreshAuthContext()
    const second = forceRefreshAuthContext()
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(mockRefreshCookieAndUserInfo).toHaveBeenCalledOnce()
    resolveRefresh({ cookie: 'SESSION=new; Path=/', userInfo: mockUserInfo })
    await expect(Promise.all([first, second])).resolves.toHaveLength(2)
  })
})
