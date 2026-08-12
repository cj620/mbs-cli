import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockSetKey = vi.fn()
const mockGetAuthContext = vi.fn()
const mockLaunch = vi.fn()

vi.mock('@mb-it-org/shared', () => ({
  getConfig: () => ({ apiUrl: 'https://example.com' }),
  LOGIN_PATH: '/eshop/manager/login.jsp',
  LOGIN_PATH_PASSWORD: '/eshop/manager/loginit2.jsp',
  ERPLOGIN_PATH: '/yyaccount/account/user/erplogin',
  KEY_PARAM: 'key',
  LOGIN_TIMEOUT_MS: 5_000,
  setKey: mockSetKey,
  getAuthContext: mockGetAuthContext,
}))

vi.mock('playwright-core', () => ({
  chromium: {
    launch: mockLaunch,
  },
}))

describe('login command', () => {
  beforeEach(() => {
    vi.resetModules()
    mockSetKey.mockReset()
    mockGetAuthContext.mockReset()
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

  /** Verifies QR login opens the direct eshop route and captures the login key. */
  it('prefers the system Chrome channel, captures the login key, and prints success JSON', async () => {
    const { browser, page } = createBrowser()

    mockLaunch.mockResolvedValue(browser)
    mockGetAuthContext.mockResolvedValue({ userInfo: { name: '张三' } })

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
    expect(page.goto).toHaveBeenCalledWith('https://example.com/eshop/manager/login.jsp')
    expect(mockSetKey).toHaveBeenCalledWith('test-key')
    expect(mockGetAuthContext).toHaveBeenCalled()
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } }))
    expect(exit).not.toHaveBeenCalled()
    expect(browser.close).toHaveBeenCalled()
  })

  /** Verifies password login opens the direct eshop password route without a CLI prefix. */
  it('opens the direct password login route', async () => {
    const { browser, page } = createBrowser()

    mockLaunch.mockResolvedValue(browser)
    mockGetAuthContext.mockResolvedValue({ userInfo: { name: 'test-user' } })

    const { default: Login } = await import('../commands/login.js')

    await Login.prototype.run.call({
      parse: vi.fn(async () => ({ flags: { password: true } })),
      log: vi.fn(),
      exit: vi.fn(),
    })

    expect(page.goto).toHaveBeenCalledWith('https://example.com/eshop/manager/loginit2.jsp')
  })

  it('falls back from Chrome and Edge to bundled Chromium when needed', async () => {
    const { browser } = createBrowser()

    mockLaunch
      .mockRejectedValueOnce(new Error('chrome launch failed'))
      .mockRejectedValueOnce(new Error('edge launch failed'))
      .mockResolvedValueOnce(browser)
    mockGetAuthContext.mockResolvedValue({ userInfo: { name: '张三' } })

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
    expect(mockSetKey).toHaveBeenCalledWith('test-key')
    expect(mockGetAuthContext).toHaveBeenCalled()
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
})
