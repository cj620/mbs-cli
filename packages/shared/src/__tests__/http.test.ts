// packages/skill-shared/src/__tests__/http.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { APIClient } from '../http.js'
import { NotAuthenticatedError, PermissionError, MBSError } from '../errors.js'

vi.mock('axios')
const mockAxios = vi.mocked(axios)

beforeEach(() => {
  vi.clearAllMocks()
})

describe('APIClient', () => {
  it('sends GET with Cookie header', async () => {
    const instance = {
      get: vi.fn().mockResolvedValue({ data: { code: 0, data: { items: [] } } }),
      post: vi.fn(),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const c = new APIClient('http://api.example.com', 'SESSION=abc123')
    await c.get('/v1/orders')

    expect(mockAxios.create).toHaveBeenCalledWith({
      baseURL: 'http://api.example.com',
      headers: { Cookie: 'SESSION=abc123' },
    })
  })

  it('sends POST with body', async () => {
    const instance = {
      get: vi.fn(),
      post: vi.fn().mockResolvedValue({ data: { code: 0, data: {} } }),
      request: vi.fn(),
      interceptors: { response: { use: vi.fn() } },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)

    const c = new APIClient('http://api.example.com', 'SESSION=abc123')
    await c.post('/v1/export', { from: '2026-01-01' })
    expect(instance.post).toHaveBeenCalledWith('/v1/export', { from: '2026-01-01' })
  })
})

describe('APIClient response interceptor', () => {
  function captureInterceptor() {
    let onFulfilled!: (res: { data: unknown }) => unknown
    const instance = {
      get: vi.fn(),
      post: vi.fn(),
      request: vi.fn(),
      interceptors: {
        response: {
          use: vi.fn().mockImplementation((fn: (res: { data: unknown }) => unknown) => {
            onFulfilled = fn
          }),
        },
      },
    }
    mockAxios.create = vi.fn().mockReturnValue(instance)
    new APIClient('http://api.example.com', 'SESSION=abc123')
    return onFulfilled
  }

  it('passes through when code === 0', () => {
    const interceptor = captureInterceptor()
    const res = { data: { code: 0, data: { id: 1 }, msg: 'ok' } }
    expect(interceptor(res)).toEqual(res)
  })

  it('throws NotAuthenticatedError when code === 601', () => {
    const interceptor = captureInterceptor()
    expect(() => interceptor({ data: { code: 601, data: null, msg: 'not login' } })).toThrow(NotAuthenticatedError)
  })

  it('throws PermissionError when code === 109', () => {
    const interceptor = captureInterceptor()
    expect(() => interceptor({ data: { code: 109, data: null, msg: 'no permission' } })).toThrow(PermissionError)
  })

  it('throws PermissionError when code === 403', () => {
    const interceptor = captureInterceptor()
    expect(() => interceptor({ data: { code: 403, data: null, msg: 'forbidden' } })).toThrow(PermissionError)
  })

  it('throws MBSError with server msg for unknown error code', () => {
    const interceptor = captureInterceptor()
    expect(() => interceptor({ data: { code: 500, data: null, msg: 'internal error' } })).toThrow(MBSError)
  })

  it('uses fallback message when msg is missing', () => {
    const interceptor = captureInterceptor()
    try {
      interceptor({ data: { code: 500, data: null } })
    } catch (e) {
      expect((e as MBSError).message).toBe('API error (code: 500)')
    }
  })

  it('passes through when response.data has no code field (non-standard endpoint)', () => {
    const interceptor = captureInterceptor()
    const res = { data: { items: [] } }
    expect(interceptor(res)).toEqual(res)
  })
})
