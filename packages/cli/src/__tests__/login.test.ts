import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockEstablishAuthSession = vi.fn()
const mockAcquireLoginClaim = vi.fn()
const mockLaunch = vi.fn()

vi.mock('@mb-it-org/shared', () => ({
  getConfig: () => ({ apiUrl: 'https://example.com' }),
  LOGIN_PATH: '/login',
  LOGIN_PATH_PASSWORD: '/loginit2',
  ERPLOGIN_PATH: '/yyaccount/account/user/erplogin',
  KEY_PARAM: 'key',
  LOGIN_TIMEOUT_MS: 5_000,
  withCliPathPrefix: (apiUrl: string, path = '') => `${apiUrl}/cli${path}`,
  establishAuthSession: mockEstablishAuthSession,
  acquireLoginClaim: mockAcquireLoginClaim,
}))

vi.mock('playwright-core', () => ({
  chromium: {
    launch: mockLaunch,
  },
}))

describe('login command', () => {
  beforeEach(() => {
    vi.resetModules()
    mockEstablishAuthSession.mockReset()
    mockAcquireLoginClaim.mockReset()
    mockAcquireLoginClaim.mockReturnValue(() => undefined)
    mockLaunch.mockReset()
  })

  function createBrowser() {
    let requestHandler: ((request: { url: () => string }) => void) | undefined

    const page = {
      on: vi.fn((event: string, handler: (request: { url: () => string }) => void) => {
        if (event === 'request') requestHandler = handler
      }),
      goto: vi.fn(async () => {
        requestHandler?.({
          url: () => 'https://example.com/yyaccount/account/user/erplogin?key=test-key',
        })
      }),
    }

    const browser = {
      newContext: vi.fn(async () => ({
        newPage: vi.fn(async () => page),
      })),
      close: vi.fn(async () => undefined),
    }

    return { browser, page }
  }

  it('prefers the system Chrome channel, commits the authenticated session, and prints success JSON', async () => {
    const { browser, page } = createBrowser()

    mockLaunch.mockResolvedValue(browser)
    mockEstablishAuthSession.mockResolvedValue({ userInfo: { name: 'test user' } })

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()

    await Login.prototype.run.call({
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log,
      exit,
    })

    expect(mockLaunch).toHaveBeenCalledTimes(1)
    expect(mockLaunch).toHaveBeenCalledWith({ channel: 'chrome', headless: false })
    expect(page.goto).toHaveBeenCalledWith('https://example.com/cli/login')
    expect(mockEstablishAuthSession).toHaveBeenCalledWith('test-key')
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } }))
    expect(exit).not.toHaveBeenCalled()
    expect(browser.close).toHaveBeenCalled()
  })

  it('falls back from Chrome and Edge to bundled Chromium when needed', async () => {
    const { browser } = createBrowser()

    mockLaunch
      .mockRejectedValueOnce(new Error('chrome launch failed'))
      .mockRejectedValueOnce(new Error('edge launch failed'))
      .mockResolvedValueOnce(browser)
    mockEstablishAuthSession.mockResolvedValue({ userInfo: { name: 'test user' } })

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()

    await Login.prototype.run.call({
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log,
      exit,
    })

    expect(mockLaunch).toHaveBeenNthCalledWith(1, { channel: 'chrome', headless: false })
    expect(mockLaunch).toHaveBeenNthCalledWith(2, { channel: 'msedge', headless: false })
    expect(mockLaunch).toHaveBeenNthCalledWith(3, { headless: false })
    expect(mockEstablishAuthSession).toHaveBeenCalledWith('test-key')
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } }))
    expect(exit).not.toHaveBeenCalled()
    expect(browser.close).toHaveBeenCalled()
  })

  it('prints a structured error when Chromium is unavailable', async () => {
    mockLaunch.mockRejectedValue(new Error("browserType.launch: Executable doesn't exist at /ms-playwright/chromium"))

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()

    await Login.prototype.run.call({
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log,
      exit,
    })

    expect(log).toHaveBeenLastCalledWith(
      JSON.stringify({
        ok: false,
        error: {
          type: 'validation',
          message: 'No supported browser runtime is available',
          hint: 'Make sure Chrome or Edge is installed and available, then try `mbs login` again. Only install an extra browser runtime if the system browsers cannot be used.',
        },
      }),
    )
    expect(exit).toHaveBeenCalledWith(1)
  })

  it('does not open another browser while login is already in progress', async () => {
    mockAcquireLoginClaim.mockReturnValue(null)
    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()

    await Login.prototype.run.call({
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log,
      exit,
    })

    expect(mockLaunch).not.toHaveBeenCalled()
    expect(exit).toHaveBeenCalledWith(2)
  })
})
