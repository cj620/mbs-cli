// packages/skill-shared/src/__tests__/auth/refresher.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { refreshCookieAndUserInfo } from '../../auth/refresher.js'

vi.mock('axios')
const mockAxios = vi.mocked(axios)

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

beforeEach(() => { vi.clearAllMocks() })

describe('refreshCookieAndUserInfo', () => {
  it('posts to erplogin and extracts Set-Cookie header and userInfo', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: {
        'set-cookie': ['SESSION=newcookie123; Path=/; HttpOnly'],
      },
      data: {
        code: 200,
        success: true,
        obj: mockUserInfo,
      },
    })

    const result = await refreshCookieAndUserInfo('http://api.example.com', 'mykey123')
    expect(result.cookie).toBe('SESSION=newcookie123; Path=/; HttpOnly')
    expect(result.userInfo).toEqual(mockUserInfo)
    expect(mockAxios.post).toHaveBeenCalledWith(
      'http://api.example.com/yyaccount/account/user/erplogin',
      null,
      { params: { key: 'mykey123' } },
    )
  })

  it('throws NotAuthenticatedError when no Set-Cookie in response', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({ headers: {} })

    await expect(refreshCookieAndUserInfo('http://api.example.com', 'mykey123')).rejects.toThrow(
      'Not authenticated',
    )
  })

  it('throws NotAuthenticatedError when success is false', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: { 'set-cookie': ['SESSION=abc; Path=/'] },
      data: { code: 500, success: false, obj: null },
    })

    await expect(refreshCookieAndUserInfo('http://api.example.com', 'mykey123')).rejects.toThrow(
      'Not authenticated',
    )
  })

  it('throws NotAuthenticatedError when key is null', async () => {
    await expect(refreshCookieAndUserInfo('http://api.example.com', null)).rejects.toThrow(
      'Not authenticated',
    )
  })
})
