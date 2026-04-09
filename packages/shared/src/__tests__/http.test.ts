// packages/skill-shared/src/__tests__/http.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { APIClient } from '../http.js'

vi.mock('axios')
const mockAxios = vi.mocked(axios)

beforeEach(() => {
  vi.clearAllMocks()
})

describe('APIClient', () => {
  it('sends GET with Cookie header', async () => {
    const mockCreate = vi.fn().mockReturnValue({
      get: vi.fn().mockResolvedValue({ data: { items: [] } }),
      post: vi.fn(),
    })
    mockAxios.create = mockCreate

    const c = new APIClient('http://api.example.com', 'SESSION=abc123')
    await c.get('/v1/orders')

    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: 'http://api.example.com',
      headers: { Cookie: 'SESSION=abc123' },
    })
  })

  it('sends POST with body', async () => {
    const mockPost = vi.fn().mockResolvedValue({ data: {} })
    mockAxios.create = vi.fn().mockReturnValue({
      get: vi.fn(),
      post: mockPost,
    })

    const c = new APIClient('http://api.example.com', 'SESSION=abc123')
    await c.post('/v1/export', { from: '2026-01-01' })
    expect(mockPost).toHaveBeenCalledWith('/v1/export', { from: '2026-01-01' }, undefined)
  })
})
