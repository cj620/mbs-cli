// packages/skill-shared/src/__tests__/auth/cookie-cache.test.ts
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { readCookie, readUserInfo, writeCookieAndUserInfo, clearCookie } from '../../auth/cookie-cache.js'
import { COOKIE_TTL_MS } from '../../auth/constants.js'

let tmpDir: string

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

beforeEach(() => {
  tmpDir = mkdtempSync(join(tmpdir(), 'mbs-cookie-test-'))
  process.env.MBS_CONFIG_DIR = tmpDir
})

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true })
  delete process.env.MBS_CONFIG_DIR
  vi.useRealTimers()
})

describe('cookie-cache', () => {
  it('returns null when no cache file exists', async () => {
    expect(readCookie()).toBeNull()
    expect(readUserInfo()).toBeNull()
  })

  it('stores and retrieves a cookie and userInfo', () => {
    writeCookieAndUserInfo('SESSION=abc123; Path=/', mockUserInfo)
    expect(readCookie()).toBe('SESSION=abc123; Path=/')
    expect(readUserInfo()).toEqual(mockUserInfo)
  })

  it('returns null when cookie is expired', () => {
    vi.useFakeTimers()
    writeCookieAndUserInfo('SESSION=abc123; Path=/', mockUserInfo)

    // advance time past TTL
    vi.advanceTimersByTime(COOKIE_TTL_MS + 1000)
    expect(readCookie()).toBeNull()
    expect(readUserInfo()).toBeNull()
  })

  it('clearCookie removes the cache file', () => {
    writeCookieAndUserInfo('SESSION=abc123; Path=/', mockUserInfo)
    clearCookie()
    expect(readCookie()).toBeNull()
    expect(readUserInfo()).toBeNull()
  })
})
