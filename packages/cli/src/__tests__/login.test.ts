import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockDeleteKey = vi.fn()
const mockClearCookie = vi.fn()
const mockFetchCurrentUser = vi.fn()
const mockGetConfig = vi.fn()
const mockInput = vi.fn()
const mockLaunch = vi.fn()
const mockLaunchInteractiveLoginInNewTerminal = vi.fn()
const mockLoginWithPassword = vi.fn()
const mockLoginWithManagedLongToken = vi.fn()
const mockPassword = vi.fn()
const mockSaveAuthContext = vi.fn()
const mockSelect = vi.fn()
const mockHasInteractiveTerminal = vi.fn()
const mockValidatePasswordLoginApiUrl = vi.fn()
const mockValidateManagedTokenLoginApiUrl = vi.fn()

vi.mock('@inquirer/prompts', () => ({
  input: mockInput,
  password: mockPassword,
  select: mockSelect,
}))

vi.mock('@mb-it-org/shared', async importOriginal => ({
  ...await importOriginal<typeof import('@mb-it-org/shared')>(),
  createSessionCookie: (value: unknown) => typeof value === 'string' && value ? `SESSION=${value}` : null,
  clearCookie: mockClearCookie,
  deleteKey: mockDeleteKey,
  fetchCurrentUser: mockFetchCurrentUser,
  getConfig: mockGetConfig,
  LOGIN_PATH: '/eshop/manager/login.jsp',
  LOGIN_TIMEOUT_MS: 5_000,
  loginWithPassword: mockLoginWithPassword,
  loginWithManagedLongToken: mockLoginWithManagedLongToken,
  saveAuthContext: mockSaveAuthContext,
  SESSION_COOKIE_NAME: 'SESSION',
  validatePasswordLoginApiUrl: mockValidatePasswordLoginApiUrl,
  validateManagedTokenLoginApiUrl: mockValidateManagedTokenLoginApiUrl,
}))

vi.mock('playwright-core', () => ({
  chromium: {
    launch: mockLaunch,
  },
}))

vi.mock('../login/interactive-terminal.js', () => ({
  hasInteractiveTerminal: mockHasInteractiveTerminal,
  launchInteractiveLoginInNewTerminal: mockLaunchInteractiveLoginInNewTerminal,
}))

describe('login command', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.resetAllMocks()
    mockDeleteKey.mockResolvedValue(undefined)
    mockGetConfig.mockReturnValue({ apiUrl: 'https://example.com' })
    mockHasInteractiveTerminal.mockReturnValue(true)
    mockLaunchInteractiveLoginInNewTerminal.mockResolvedValue(0)
    mockSaveAuthContext.mockResolvedValue(undefined)
    mockSelect.mockResolvedValue('qr')
  })

  /** Verifies an unsafe API URL is rejected before the terminal collects credentials. */
  it('validates password transport before prompting', async () => {
    const { MBSError } = await import('@mb-it-org/shared')
    mockValidatePasswordLoginApiUrl.mockImplementation(() => {
      throw new MBSError('Password login requires HTTPS', 'validation', 'Configure HTTPS')
    })

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: true } })),
      log,
      exit,
    })

    await command.run()

    expect(mockInput).not.toHaveBeenCalled()
    expect(mockPassword).not.toHaveBeenCalled()
    expect(mockLoginWithPassword).not.toHaveBeenCalled()
    expect(log).toHaveBeenCalledWith(JSON.stringify({
      ok: false,
      error: {
        type: 'validation',
        message: 'Password login requires HTTPS',
        hint: 'Configure HTTPS',
      },
    }))
    expect(exit).toHaveBeenCalledWith(1)
  })

  /**
   * Creates a browser double whose isolated context exposes only a SESSION
   * cookie, ensuring QR login observes browser cookie state without requests.
   */
  function createBrowser() {
    const page = {
      goto: vi.fn(async () => undefined),
    }
    const context = {
      cookies: vi.fn(async () => [
        { name: 'SESSION', value: 'qr-session', expires: -1 },
        { name: 'AUTH_REFRESH', value: 'qr-refresh', expires: 4_102_444_800 },
      ]),
      newPage: vi.fn(async () => page),
    }
    const browser = {
      newContext: vi.fn(async () => context),
      close: vi.fn(async () => undefined),
    }

    return { browser, context, page }
  }

  /** Verifies bare login asks for a method and QR mode stores both auth cookies without observing requests. */
  it('selects QR login and reads browser authentication cookies', async () => {
    const { browser, context, page } = createBrowser()
    const userInfo = {
      id: 'user-1',
      loginName: 'user-1',
      userName: 'Test User',
      companyId: 1,
      companyName: 'Test Company',
      departmentName: 'Operations',
      positionName: 'Analyst',
      groupCompanyId: 1,
      groupCompanyName: 'Test Company',
    }

    mockLaunch.mockResolvedValue(browser)
    mockFetchCurrentUser.mockResolvedValue(userInfo)

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()

    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log,
      exit,
    })
    await command.run()

    expect(mockSelect).toHaveBeenCalledWith({
      message: 'Choose a login method:',
      choices: [
        { name: 'QR code (opens a browser)', value: 'qr' },
        { name: 'Account and password (terminal)', value: 'password' },
        { name: 'Long-term Refresh Token (terminal)', value: 'managed-token' },
      ],
    })
    expect(mockClearCookie).toHaveBeenCalledTimes(1)
    expect(mockClearCookie.mock.invocationCallOrder[0]).toBeLessThan(
      mockSelect.mock.invocationCallOrder[0],
    )
    expect(mockDeleteKey).toHaveBeenCalled()
    expect(mockLaunch).toHaveBeenCalledTimes(1)
    expect(mockLaunch).toHaveBeenCalledWith({ channel: 'chrome', headless: false })
    expect(page.goto).toHaveBeenCalledWith('https://example.com/eshop/manager/login.jsp')
    expect(context.cookies).toHaveBeenCalled()
    expect(mockFetchCurrentUser).toHaveBeenCalledWith(
      'https://example.com',
      'SESSION=qr-session; AUTH_REFRESH=qr-refresh',
    )
    expect(mockSaveAuthContext).toHaveBeenCalledWith({
      cookie: 'SESSION=qr-session; AUTH_REFRESH=qr-refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo,
    })
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } }))
    expect(exit).not.toHaveBeenCalled()
    expect(browser.close).toHaveBeenCalled()
  })

  /** Verifies bare login accepts a hidden managed token and never opens a browser. */
  it('selects long-term Refresh Token login', async () => {
    const managedToken = `ult_v1_${'a'.repeat(32)}.${'B'.repeat(43)}`
    mockSelect.mockResolvedValue('managed-token')
    mockPassword.mockResolvedValue(managedToken)
    mockLoginWithManagedLongToken.mockResolvedValue({
      cookie: 'SESSION=managed-session',
      managedLongToken: managedToken,
      userInfo: {
        id: 'user-1', loginName: 'user-1', userName: 'Test User', companyId: null,
        companyName: null, departmentName: null, positionName: null,
        groupCompanyId: null, groupCompanyName: null,
      },
    })

    const { default: Login } = await import('../commands/login.js')
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log: vi.fn(),
      exit: vi.fn(),
    })

    await command.run()

    expect(mockPassword).toHaveBeenCalledWith({
      mask: '*', message: 'Long-term Refresh Token:',
    })
    expect(mockClearCookie).toHaveBeenCalledTimes(1)
    expect(mockClearCookie.mock.invocationCallOrder[0]).toBeLessThan(
      mockPassword.mock.invocationCallOrder[0],
    )
    expect(mockValidateManagedTokenLoginApiUrl).toHaveBeenCalledWith('https://example.com')
    expect(mockValidateManagedTokenLoginApiUrl.mock.invocationCallOrder[0]).toBeLessThan(
      mockPassword.mock.invocationCallOrder[0],
    )
    expect(mockLoginWithManagedLongToken).toHaveBeenCalledWith('https://example.com', managedToken)
    expect(mockSaveAuthContext).toHaveBeenCalledWith(expect.objectContaining({
      managedLongToken: managedToken,
    }))
    expect(mockInput).not.toHaveBeenCalled()
    expect(mockLaunch).not.toHaveBeenCalled()
  })

  /** Verifies password login prompts in the terminal and never launches a browser. */
  it('logs in directly from terminal prompts in password mode', async () => {
    const authContext = {
      cookie: 'SESSION=password-session',
      userInfo: {
        id: 'user-1',
        loginName: 'user-1',
        userName: 'Test User',
        companyId: null,
        companyName: null,
        departmentName: null,
        positionName: null,
        groupCompanyId: null,
        groupCompanyName: null,
      },
    }
    mockInput.mockResolvedValue('test-account')
    mockPassword.mockResolvedValue('test-password')
    mockLoginWithPassword.mockResolvedValue(authContext)

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()

    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: true } })),
      log,
      exit: vi.fn(),
    })
    await command.run()

    expect(mockInput).toHaveBeenCalledWith({ message: 'MBS account:' })
    expect(mockClearCookie).toHaveBeenCalledTimes(1)
    expect(mockClearCookie.mock.invocationCallOrder[0]).toBeLessThan(
      mockInput.mock.invocationCallOrder[0],
    )
    expect(mockValidatePasswordLoginApiUrl).toHaveBeenCalledWith('https://example.com')
    expect(mockValidatePasswordLoginApiUrl.mock.invocationCallOrder[0]).toBeLessThan(
      mockInput.mock.invocationCallOrder[0],
    )
    expect(mockPassword).toHaveBeenCalledWith({ mask: '*', message: 'MBS password:' })
    expect(mockLoginWithPassword).toHaveBeenCalledWith(
      'https://example.com',
      { username: 'test-account', password: 'test-password' },
    )
    expect(mockSaveAuthContext).toHaveBeenCalledWith(authContext)
    expect(mockLaunch).not.toHaveBeenCalled()
    expect(mockSelect).not.toHaveBeenCalled()
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } }))
  })

  /** Verifies password login accepts configured remote HTTP without extra authorization state. */
  it('uses configured remote HTTP by default', async () => {
    mockGetConfig.mockReturnValue({ apiUrl: 'http://api.example.com' })
    mockInput.mockResolvedValue('test-account')
    mockPassword.mockResolvedValue('test-password')
    mockLoginWithPassword.mockResolvedValue({
      cookie: 'SESSION=password-session; AUTH_REFRESH=password-refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: {
        id: 'user-1', loginName: 'user-1', userName: 'Test User', companyId: null,
        companyName: null, departmentName: null, positionName: null,
        groupCompanyId: null, groupCompanyName: null,
      },
    })
    const { default: Login } = await import('../commands/login.js')

    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: true } })),
      log: vi.fn(),
      exit: vi.fn(),
    })
    await command.run()

    expect(mockValidatePasswordLoginApiUrl).toHaveBeenCalledWith('http://api.example.com')
    expect(mockLoginWithPassword).toHaveBeenCalledWith(
      'http://api.example.com',
      { username: 'test-account', password: 'test-password' },
    )
  })

  /** Verifies bare login can select password mode without requiring the compatibility flag. */
  it('selects direct password login from the interactive list', async () => {
    mockSelect.mockResolvedValue('password')
    mockInput.mockResolvedValue('test-account')
    mockPassword.mockResolvedValue('test-password')
    mockLoginWithPassword.mockResolvedValue({
      cookie: 'SESSION=password-session; AUTH_REFRESH=password-refresh',
      refreshExpiresAt: '2100-01-01T00:00:00.000Z',
      userInfo: {
        id: 'user-1', loginName: 'user-1', userName: 'Test User', companyId: null,
        companyName: null, departmentName: null, positionName: null,
        groupCompanyId: null, groupCompanyName: null,
      },
    })

    const { default: Login } = await import('../commands/login.js')
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log: vi.fn(),
      exit: vi.fn(),
    })

    await command.run()

    expect(mockSelect).toHaveBeenCalledTimes(1)
    expect(mockLoginWithPassword).toHaveBeenCalledTimes(1)
    expect(mockLaunch).not.toHaveBeenCalled()
  })

  /** Verifies QR login keeps the existing system-browser fallback order. */
  it('falls back from Chrome and Edge to bundled Chromium when needed', async () => {
    const { browser } = createBrowser()

    mockLaunch
      .mockRejectedValueOnce(new Error('chrome launch failed'))
      .mockRejectedValueOnce(new Error('edge launch failed'))
      .mockResolvedValueOnce(browser)
    mockFetchCurrentUser.mockResolvedValue({
      id: 'user-1',
      loginName: 'user-1',
      userName: 'Test User',
      companyId: null,
      companyName: null,
      departmentName: null,
      positionName: null,
      groupCompanyId: null,
      groupCompanyName: null,
    })

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()

    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log,
      exit,
    })
    await command.run()

    expect(mockLaunch).toHaveBeenNthCalledWith(1, { channel: 'chrome', headless: false })
    expect(mockLaunch).toHaveBeenNthCalledWith(2, { channel: 'msedge', headless: false })
    expect(mockLaunch).toHaveBeenNthCalledWith(3, { headless: false })
    expect(mockSaveAuthContext).toHaveBeenCalledTimes(1)
    expect(exit).not.toHaveBeenCalled()
    expect(browser.close).toHaveBeenCalled()
  })

  /** Verifies a missing browser is reported only for QR login. */
  it('prints a structured error when Chromium is unavailable', async () => {
    mockLaunch.mockRejectedValue(new Error("browserType.launch: Executable doesn't exist at /ms-playwright/chromium"))

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()

    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log,
      exit,
    })
    await command.run()

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

  /** Verifies Agent execution without a chosen method fails before Inquirer reads redirected stdin. */
  it('rejects bare login in a non-interactive Agent process', async () => {
    mockHasInteractiveTerminal.mockReturnValue(false)

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: false } })),
      log,
      exit,
    })

    await command.run()

    expect(mockClearCookie).toHaveBeenCalledTimes(1)
    expect(mockDeleteKey).toHaveBeenCalledTimes(1)
    expect(mockSelect).not.toHaveBeenCalled()
    expect(mockInput).not.toHaveBeenCalled()
    expect(mockPassword).not.toHaveBeenCalled()
    expect(mockLaunch).not.toHaveBeenCalled()
    expect(mockLaunchInteractiveLoginInNewTerminal).not.toHaveBeenCalled()
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({
      ok: false,
      error: {
        type: 'validation',
        message: 'Login method is required in a non-interactive environment',
        hint: 'Ask the user to choose, then run `mbs login --qr`, `mbs login --password`, or `mbs login --managed-token`',
      },
    }))
    expect(exit).toHaveBeenCalledWith(1)
  })

  /** Verifies an explicit QR choice bypasses the terminal menu in an Agent process. */
  it('runs explicit QR login without an interactive terminal', async () => {
    const { browser } = createBrowser()
    mockHasInteractiveTerminal.mockReturnValue(false)
    mockLaunch.mockResolvedValue(browser)
    mockFetchCurrentUser.mockResolvedValue({
      id: 'user-1', loginName: 'user-1', userName: 'Test User', companyId: null,
      companyName: null, departmentName: null, positionName: null,
      groupCompanyId: null, groupCompanyName: null,
    })

    const { default: Login } = await import('../commands/login.js')
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: false, qr: true } })),
      log: vi.fn(),
      exit: vi.fn(),
    })

    await command.run()

    expect(mockSelect).not.toHaveBeenCalled()
    expect(mockLaunch).toHaveBeenCalledTimes(1)
    expect(mockLaunchInteractiveLoginInNewTerminal).not.toHaveBeenCalled()
  })

  /** Verifies redirected password login opens a visible child terminal without collecting secrets in the parent. */
  it('opens a child terminal for non-interactive password login', async () => {
    mockHasInteractiveTerminal.mockReturnValue(false)

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: true } })),
      log,
      exit: vi.fn(),
    })

    await command.run()

    expect(mockLaunchInteractiveLoginInNewTerminal).toHaveBeenCalledWith('password')
    expect(mockInput).not.toHaveBeenCalled()
    expect(mockPassword).not.toHaveBeenCalled()
    expect(mockLoginWithPassword).not.toHaveBeenCalled()
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({
      ok: true,
      data: { message: 'Authenticated successfully' },
    }))
  })

  /** Verifies redirected managed-token login opens a visible child terminal without accepting the token as an argument. */
  it('opens a child terminal for non-interactive managed-token login', async () => {
    mockHasInteractiveTerminal.mockReturnValue(false)

    const { default: Login } = await import('../commands/login.js')
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { 'managed-token': true, password: false } })),
      log: vi.fn(),
      exit: vi.fn(),
    })

    await command.run()

    expect(mockLaunchInteractiveLoginInNewTerminal).toHaveBeenCalledWith('managed-token')
    expect(mockPassword).not.toHaveBeenCalled()
    expect(mockLoginWithManagedLongToken).not.toHaveBeenCalled()
  })

  /** Verifies a failed child login is reported safely and preserves its authentication exit code. */
  it('propagates a failed child login', async () => {
    mockHasInteractiveTerminal.mockReturnValue(false)
    mockLaunchInteractiveLoginInNewTerminal.mockResolvedValue(2)

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({ flags: { password: true } })),
      log,
      exit,
    })

    await command.run()

    expect(log).toHaveBeenLastCalledWith(JSON.stringify({
      ok: false,
      error: {
        type: 'auth',
        message: 'Interactive login did not complete',
        hint: 'Review the login window, then try again',
      },
    }))
    expect(exit).toHaveBeenCalledWith(2)
  })

  /** Verifies the hidden child marker never falls back to secret prompts without a real TTY. */
  it('rejects an interactive child that has no TTY', async () => {
    mockHasInteractiveTerminal.mockReturnValue(false)

    const { default: Login } = await import('../commands/login.js')
    const log = vi.fn()
    const exit = vi.fn()
    const command = Object.assign(Object.create(Login.prototype), {
      parse: vi.fn(async () => ({
        flags: { 'interactive-child': true, password: true },
      })),
      log,
      exit,
    })

    await command.run()

    expect(mockLaunchInteractiveLoginInNewTerminal).not.toHaveBeenCalled()
    expect(mockInput).not.toHaveBeenCalled()
    expect(mockPassword).not.toHaveBeenCalled()
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({
      ok: false,
      error: {
        type: 'validation',
        message: 'The interactive login window did not provide a TTY',
        hint: 'Run the selected login command in a local interactive terminal',
      },
    }))
    expect(exit).toHaveBeenCalledWith(1)
  })
})
