import { beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => ({
  apiClient: vi.fn(),
  forceRefreshAuthContext: vi.fn(),
  getAuthContext: vi.fn(),
  getConfig: vi.fn(),
  normalizeSessionCookie: vi.fn(),
}))

vi.mock('@mb-it-org/shared', () => ({
  APIClient: mocks.apiClient,
  forceRefreshAuthContext: mocks.forceRefreshAuthContext,
  getAuthContext: mocks.getAuthContext,
  getConfig: mocks.getConfig,
  normalizeSessionCookie: mocks.normalizeSessionCookie,
}))

import { createRecallClient } from '../find/remote-client.js'

describe('production recall authentication', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mocks.apiClient.mockImplementation(function apiClient(
      this: Record<string, unknown>,
      baseUrl: string,
      cookie: string,
      refreshAuth: () => Promise<{ cookie: string; accessToken: string }>,
    ) {
      this.baseUrl = baseUrl
      this.cookie = cookie
      this.refreshAuth = refreshAuth
    })
    mocks.getAuthContext.mockResolvedValue({ cookie: 'SESSION=saved-cookie' })
    mocks.getConfig.mockReturnValue({ apiUrl: 'https://api.example.com/' })
    mocks.normalizeSessionCookie.mockImplementation((cookie: string) => cookie.split(';')[0])
    mocks.forceRefreshAuthContext.mockResolvedValue({
      cookie: 'SESSION=refreshed-cookie; AUTH_REFRESH=rotated',
      accessToken: 'memory-access-token',
    })
  })

  /**
   * Verifies recall uses saved CLI authentication and both required service layers.
   */
  it('creates the authenticated gateway cli-service client', async () => {
    const client = await createRecallClient() as unknown as {
      baseUrl: string
      cookie: string
      refreshAuth: () => Promise<{ cookie: string; accessToken: string }>
    }

    expect(client.baseUrl).toBe('https://api.example.com/gateway/cli/cli-service')
    expect(client.cookie).toBe('SESSION=saved-cookie')
    expect(mocks.getAuthContext).toHaveBeenCalledOnce()
    expect(mocks.getConfig).toHaveBeenCalledOnce()
    await expect(client.refreshAuth()).resolves.toEqual({
      cookie: 'SESSION=refreshed-cookie',
      accessToken: 'memory-access-token',
    })
    expect(mocks.forceRefreshAuthContext).toHaveBeenCalledOnce()
  })
})
