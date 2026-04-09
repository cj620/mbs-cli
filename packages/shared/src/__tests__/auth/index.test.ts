// packages/skill-shared/src/__tests__/auth/index.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getAuthContext } from '../../auth/index.js'

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
  readCookie: vi.fn(),
  readUserInfo: vi.fn(),
  writeCookieAndUserInfo: vi.fn(),
}))

vi.mock('../../auth/key-store.js', () => ({
  getKey: vi.fn(),
}))

vi.mock('../../auth/refresher.js', () => ({
  refreshCookieAndUserInfo: vi.fn(),
}))

vi.mock('../../config.js', () => ({
  getConfig: vi.fn().mockReturnValue({ apiUrl: 'http://api.example.com' }),
  getConfigDir: vi.fn().mockReturnValue('/tmp/mbs-test'),
  setConfig: vi.fn(),
}))

import { readCookie, readUserInfo, writeCookieAndUserInfo } from '../../auth/cookie-cache.js'
import { getKey } from '../../auth/key-store.js'
import { refreshCookieAndUserInfo } from '../../auth/refresher.js'

const mockReadCookie = vi.mocked(readCookie)
const mockReadUserInfo = vi.mocked(readUserInfo)
const mockWriteCookieAndUserInfo = vi.mocked(writeCookieAndUserInfo)
const mockGetKey = vi.mocked(getKey)
const mockRefreshCookieAndUserInfo = vi.mocked(refreshCookieAndUserInfo)

beforeEach(() => { vi.clearAllMocks() })

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
})
