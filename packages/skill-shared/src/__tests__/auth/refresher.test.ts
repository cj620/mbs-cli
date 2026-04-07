// packages/skill-shared/src/__tests__/auth/refresher.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { refreshCookie } from '../../auth/refresher.js'

vi.mock('axios')
const mockAxios = vi.mocked(axios)

beforeEach(() => { vi.clearAllMocks() })

describe('refreshCookie', () => {
  it('posts to erplogin and extracts Set-Cookie header', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({
      headers: {
        'set-cookie': ['SESSION=newcookie123; Path=/; HttpOnly'],
      },
    })

    const cookie = await refreshCookie('http://api.example.com', 'mykey123')
    expect(cookie).toBe('SESSION=newcookie123; Path=/; HttpOnly')
    expect(mockAxios.post).toHaveBeenCalledWith(
      'http://api.example.com/yyaccount/account/user/erplogin',
      null,
      { params: { key: 'mykey123' } },
    )
  })

  it('throws NotAuthenticatedError when no Set-Cookie in response', async () => {
    mockAxios.post = vi.fn().mockResolvedValue({ headers: {} })

    await expect(refreshCookie('http://api.example.com', 'mykey123')).rejects.toThrow(
      'Not authenticated',
    )
  })

  it('throws NotAuthenticatedError when key is null', async () => {
    await expect(refreshCookie('http://api.example.com', null)).rejects.toThrow(
      'Not authenticated',
    )
  })
})
