import { input, password, select } from '@inquirer/prompts'
import { Command, Flags } from '@oclif/core'
import {
  AUTH_REFRESH_COOKIE_NAME,
  clearCookie,
  createBrowserAuthCookies,
  createSessionCookie,
  deleteKey,
  fetchCurrentUser,
  getConfig,
  LOGIN_PATH,
  LOGIN_TIMEOUT_MS,
  loginWithManagedLongToken,
  loginWithPassword,
  MBSError,
  NotAuthenticatedError,
  saveAuthContext,
  SESSION_COOKIE_NAME,
  validateManagedTokenLoginApiUrl,
  validatePasswordLoginApiUrl,
  validateQrLoginApiUrl,
} from '@mb-it-org/shared'
import { chromium } from 'playwright-core'
import type { BrowserContext } from 'playwright-core'

import {
  hasInteractiveTerminal,
  launchInteractiveLoginInNewTerminal,
} from '../login/interactive-terminal.js'
import type { SecretLoginMethod } from '../login/interactive-terminal.js'

const MISSING_BROWSER_MESSAGE = 'No supported browser runtime is available'
const MISSING_BROWSER_HINT = 'Make sure Chrome or Edge is installed and available, then try `mbs login` again. Only install an extra browser runtime if the system browsers cannot be used.'
const SESSION_POLL_INTERVAL_MS = 250
const LOGIN_SUCCESS = JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } })
const HTTP_QR_SESSION_WARNING = '警告：当前扫码登录使用 HTTP，仅保存最长 2 小时的 SESSION；无法自动刷新，请尽快改用 HTTPS。'

type LoginMethod = 'qr' | SecretLoginMethod

/**
 * Parsed login selectors used by the command and its isolated terminal child.
 *
 * Public selectors are mutually exclusive in oclif. The hidden child marker carries no
 * credential and only prevents a redirected child from recursively opening another terminal.
 */
interface LoginFlags {
  'interactive-child'?: boolean
  'managed-token'?: boolean
  password?: boolean
  qr?: boolean
}

/**
 * Authentication cookies observed after a QR login completes in the isolated browser.
 *
 * <p>HTTPS normally supplies a rotating AUTH_REFRESH credential and its expiry. The
 * temporary remote-HTTP compatibility branch deliberately omits both, leaving the shared
 * cache to apply its existing two-hour lifetime to the validated SESSION.</p>
 */
interface BrowserLoginCookies {
  /** Canonical request Cookie header containing one SESSION and optional AUTH_REFRESH. */
  cookie: string
  /** Browser-declared AUTH_REFRESH expiry; absent only for the HTTP SESSION fallback. */
  refreshExpiresAt?: string
}

/** Returns true when Playwright reports that no launchable browser exists. */
function isMissingChromiumError(error: unknown): boolean {
  if (!(error instanceof Error)) return false

  const message = error.message.toLowerCase()
  return (
    message.includes("executable doesn't exist") ||
    (message.includes('browser') && message.includes('executable')) ||
    message.includes('playwright install')
  )
}

type BrowserInstance = Awaited<ReturnType<typeof chromium.launch>>

/**
 * Launches an installed interactive browser using the supported fallback order.
 *
 * @returns A browser instance for QR authentication.
 * @throws The last Playwright launch failure when no candidate can start.
 */
async function launchBrowser(): Promise<BrowserInstance> {
  const launchOptions = [
    { channel: 'chrome' as const, headless: false },
    { channel: 'msedge' as const, headless: false },
    { headless: false },
  ]

  let lastError: unknown
  for (const options of launchOptions) {
    try {
      return await chromium.launch(options)
    } catch (error) {
      lastError = error
    }
  }
  throw lastError
}

/** Resolves after a short polling delay without retaining authentication data. */
async function waitForNextCookiePoll(): Promise<void> {
  await new Promise<void>(resolve => setTimeout(resolve, SESSION_POLL_INTERVAL_MS))
}

/**
 * Resolves an authentication operation only while the shared QR deadline remains valid.
 *
 * <p>The operation factory is not invoked after expiry. The helper owns one AbortController
 * and aborts it when the deadline wins; operations with cancellation support must forward the
 * supplied signal. Browser operations are additionally terminated when the caller closes its
 * owned browser in {@code finally}.</p>
 *
 * @param operation Deferred browser or auth-center operation to start when time remains;
 * it receives the exact positive millisecond budget and borrowed deadline signal also used by
 * the outer fallback timer.
 * @param deadlineEpochMs Absolute QR completion deadline in Unix milliseconds.
 * @returns The operation result when it settles before the deadline.
 * @throws NotAuthenticatedError when no time remains or the deadline wins the race.
 */
async function completeBeforeQrDeadline<T>(
  operation: (remainingMs: number, signal: AbortSignal) => Promise<T>,
  deadlineEpochMs: number,
): Promise<T> {
  const remainingMs = deadlineEpochMs - Date.now()
  if (remainingMs <= 0) throw new NotAuthenticatedError()

  const deadlineController = new AbortController()
  let deadlineTimer: ReturnType<typeof setTimeout> | undefined
  try {
    return await Promise.race([
      operation(remainingMs, deadlineController.signal),
      new Promise<never>((_resolve, reject) => {
        deadlineTimer = setTimeout(() => {
          reject(new NotAuthenticatedError())
          deadlineController.abort()
        }, remainingMs)
      }),
    ])
  } finally {
    if (deadlineTimer !== undefined) clearTimeout(deadlineTimer)
  }
}

/**
 * Waits for the target login origin to own a usable authentication cookie set.
 *
 * <p>A unique, unexpired SESSION plus AUTH_REFRESH pair always wins. A unique safe SESSION
 * without any AUTH_REFRESH is accepted only when the actual login URL uses plain HTTP.
 * Auth-center deliberately does not create or send a long-lived Refresh credential for that
 * plaintext QR callback; duplicate, malformed, or expired Refresh entries therefore never
 * downgrade to SESSION-only authentication.</p>
 *
 * @param context Fresh isolated browser context used by the QR login page.
 * @param loginUrl Exact QR page URL used both to scope browser Cookie reads and to decide
 * whether the bounded HTTP-only compatibility branch is available.
 * @param deadlineEpochMs Absolute completion deadline shared with navigation and identity lookup.
 * @param rejectedHttpSessionCookies HTTP-only candidate Cookie headers already rejected by
 * current-user verification. They remain process-local and are skipped until the callback rotates
 * the browser Session; HTTPS dual-Cookie candidates are never placed in this set.
 * @returns Minimal Cookie header plus Refresh expiry when the browser owns the full pair.
 * @throws NotAuthenticatedError when the deadline expires.
 */
async function waitForAuthCookies(
  context: BrowserContext,
  loginUrl: string,
  deadlineEpochMs: number,
  rejectedHttpSessionCookies: ReadonlySet<string> = new Set<string>(),
): Promise<BrowserLoginCookies> {
  const allowHttpSessionOnly = new URL(loginUrl).protocol === 'http:'
  while (Date.now() < deadlineEpochMs) {
    const cookies = await completeBeforeQrDeadline(
      () => context.cookies(loginUrl),
      deadlineEpochMs,
    )
    const authCookies = createBrowserAuthCookies(cookies)
    if (authCookies) return authCookies
    if (allowHttpSessionOnly) {
      const sessions = cookies.filter(cookie => cookie.name === SESSION_COOKIE_NAME)
      const refreshes = cookies.filter(cookie => cookie.name === AUTH_REFRESH_COOKIE_NAME)
      const sessionCookie = sessions.length === 1 && refreshes.length === 0
        ? createSessionCookie(sessions[0].value)
        : null
      if (sessionCookie && !rejectedHttpSessionCookies.has(sessionCookie)) {
        return { cookie: sessionCookie }
      }
    }
    await completeBeforeQrDeadline(waitForNextCookiePoll, deadlineEpochMs)
  }
  throw new NotAuthenticatedError()
}

export default class Login extends Command {
  static description = 'Authenticate with MBS by QR code, account password, or long-term Refresh Token'

  static examples = [
    'mbs login',
    'mbs login --qr',
    'mbs login --password',
    'mbs login --managed-token',
  ]

  static flags = {
    qr: Flags.boolean({
      description: 'Open the QR login browser without showing the terminal method menu',
      default: false,
      exclusive: ['password', 'managed-token'],
    }),
    password: Flags.boolean({
      char: 'p',
      description: 'Prompt for account and password in the terminal without opening a browser',
      default: false,
      exclusive: ['qr', 'managed-token'],
    }),
    'managed-token': Flags.boolean({
      description: 'Prompt for a management-issued long-term Refresh Token in the terminal',
      default: false,
      exclusive: ['qr', 'password'],
    }),
    'interactive-child': Flags.boolean({
      description: 'Internal marker for a login process running in an isolated terminal',
      hidden: true,
      default: false,
    }),
  }

  /**
   * Authenticates interactively while persisting only approved auth state and safe user data.
   *
   * <p>Password mode prompts in the terminal and calls auth-center directly. QR mode opens a
   * browser but polls only browser cookie state. Managed-token mode accepts a hidden terminal
   * secret and calls the exclusive LongToken exchange. Bare interactive login asks between all
   * three modes. Bare redirected login fails with deterministic Agent guidance instead of
   * attempting to read Inquirer input.</p>
   *
   * <p>Before any method selection or credential collection, login deletes the
   * complete Cookie, Refresh credential, and user cache. Cancellation or failure
   * leaves the CLI logged out so credentials from different users cannot mix. Redirected
   * password or managed-token mode opens an isolated Windows terminal and waits for its exit;
   * only the fixed mode crosses the process seam, never the secret.</p>
   */
  async run(): Promise<void> {
    const { flags } = await this.parse(Login)

    try {
      clearCookie()
      await deleteKey()
      const method = await this.resolveLoginMethod(flags)
      if (method !== 'qr' && !hasInteractiveTerminal()) {
        if (flags['interactive-child']) {
          throw new MBSError(
            'The interactive login window did not provide a TTY',
            'validation',
            'Run the selected login command in a local interactive terminal',
          )
        }

        const childExitCode = await launchInteractiveLoginInNewTerminal(method)
        if (childExitCode !== 0) {
          this.reportChildLoginFailure(childExitCode)
          return
        }
        this.log(LOGIN_SUCCESS)
        return
      }

      const { apiUrl } = getConfig()
      if (method === 'password') {
        await this.loginFromTerminal(apiUrl)
      } else if (method === 'managed-token') {
        await this.loginFromManagedToken(apiUrl)
      } else {
        await this.loginFromBrowser(apiUrl)
      }
      this.log(LOGIN_SUCCESS)
    } catch (error) {
      if (error instanceof NotAuthenticatedError) {
        this.log(JSON.stringify({
          ok: false,
          error: {
            type: 'auth',
            message: 'Authentication failed',
            hint: 'Check the selected login credential, then try again',
          },
        }))
        this.exit(2)
        return
      }
      if (error instanceof MBSError) {
        this.log(JSON.stringify({
          ok: false,
          error: { type: error.type, message: error.message, hint: error.hint },
        }))
        this.exit(1)
        return
      }
      throw error
    }
  }

  /**
   * Resolves one deterministic login mode without reading redirected Agent input.
   *
   * @param flags Parsed oclif flags. Public mode flags are mutually exclusive; the hidden child
   * marker only prevents recursive terminal launch and does not select a method.
   * @returns Explicit mode, or the user's Inquirer selection when running in a real terminal.
   * @throws MBSError when a redirected process omits the method, so the Agent can ask the user in
   * conversation and retry with `--qr`, `--password`, or `--managed-token`.
   */
  private async resolveLoginMethod(flags: LoginFlags): Promise<LoginMethod> {
    if (flags.qr) return 'qr'
    if (flags.password) return 'password'
    if (flags['managed-token']) return 'managed-token'
    if (!hasInteractiveTerminal()) {
      throw new MBSError(
        'Login method is required in a non-interactive environment',
        'validation',
        'Ask the user to choose, then run `mbs login --qr`, `mbs login --password`, or `mbs login --managed-token`',
      )
    }

    return select({
      message: 'Choose a login method:',
      choices: [
        { name: 'QR code (opens a browser)', value: 'qr' as const },
        { name: 'Account and password (terminal)', value: 'password' as const },
        { name: 'Long-term Refresh Token (terminal)', value: 'managed-token' as const },
      ],
    })
  }

  /**
   * Converts an isolated terminal's failure into the stable parent-process CLI response.
   *
   * @param childExitCode Exit code returned by the visible login process; authentication code `2`
   * is preserved, while cancellation or other failures normalize to validation code `1`.
   * @returns Nothing. The method writes one safe error and requests the matching oclif exit code.
   */
  private reportChildLoginFailure(childExitCode: number): void {
    const isAuthenticationFailure = childExitCode === 2
    this.log(JSON.stringify({
      ok: false,
      error: {
        type: isAuthenticationFailure ? 'auth' : 'validation',
        message: 'Interactive login did not complete',
        hint: 'Review the login window, then try again',
      },
    }))
    this.exit(isAuthenticationFailure ? 2 : 1)
  }

  /**
   * Prompts for credentials and performs one direct auth-center login request.
   *
   * @param apiUrl Configured MBS API root.
   * @returns A promise that resolves only after the validated context is persisted.
   * @throws Error when transport validation, prompting, login, response validation,
   * or protected cache persistence fails; the password is cleared from the local variable.
   */
  private async loginFromTerminal(apiUrl: string): Promise<void> {
    validatePasswordLoginApiUrl(apiUrl)
    const username = await input({ message: 'MBS account:' })
    let enteredPassword = await password({ mask: '*', message: 'MBS password:' })
    try {
      const context = await loginWithPassword(
        apiUrl,
        { username, password: enteredPassword },
      )
      await saveAuthContext(context)
    } finally {
      enteredPassword = ''
    }
  }

  /**
   * Prompts for a management-issued long-term Refresh Token and establishes login.
   *
   * <p>The API root is validated before secret collection. Input is hidden and
   * passed only to auth-center's LongToken compatibility exchange; it is never
   * accepted as a flag or environment variable.</p>
   *
   * @param apiUrl Configured MBS API root.
   * @returns A promise that resolves only after compatible SESSION state is persisted.
   * @throws Error when input, exchange, identity lookup, or protected cache persistence fails.
   */
  private async loginFromManagedToken(apiUrl: string): Promise<void> {
    validateManagedTokenLoginApiUrl(apiUrl)
    let managedLongToken = await password({ mask: '*', message: 'Long-term Refresh Token:' })
    try {
      const context = await loginWithManagedLongToken(apiUrl, managedLongToken)
      await saveAuthContext(context)
    } finally {
      managedLongToken = ''
    }
  }

  /**
   * Opens the QR page and persists only identity-verified authentication state.
   *
   * <p>Navigation, URL-scoped Cookie polling, and current-user verification share one
   * absolute deadline so stalled browser or network work reaches the closing finally block.
   * HTTPS requires the complete rotating Cookie pair. Plain HTTP may store a SESSION-only
   * context for the shared cache's existing two-hour limit, but only after current-user
   * verification. If the public page's authentication interceptor creates an anonymous HTTP
   * Session, the rejected candidate remains process-local and polling continues until the login
   * callback rotates the Session. The compatibility result emits a credential-free warning.</p>
   *
   * @param apiUrl Configured MBS API root.
   * @returns A promise that resolves only after validated Cookie state and safe user data
   * have been persisted; the public command prints the final success response afterward.
   * @throws NotAuthenticatedError when the deadline expires or identity cannot be verified.
   * @throws MBSError when the API root is unsafe or no supported browser is installed.
   * @throws Error when browser startup, navigation, or protected cache persistence fails.
   */
  private async loginFromBrowser(apiUrl: string): Promise<void> {
    validateQrLoginApiUrl(apiUrl)
    const loginUrl = `${apiUrl.replace(/\/+$/, '')}${LOGIN_PATH}`
    const deadlineEpochMs = Date.now() + LOGIN_TIMEOUT_MS
    this.log('Opening browser for authentication...')
    this.log(`URL: ${loginUrl}`)

    let browser: BrowserInstance
    try {
      browser = await launchBrowser()
    } catch (error) {
      if (isMissingChromiumError(error)) {
        throw new MBSError(MISSING_BROWSER_MESSAGE, 'validation', MISSING_BROWSER_HINT)
      }
      throw error
    }

    try {
      const context = await browser.newContext()
      const page = await context.newPage()
      const navigationResponse = await completeBeforeQrDeadline(
        () => page.goto(loginUrl),
        deadlineEpochMs,
      )
      if (navigationResponse && !navigationResponse.ok()) {
        throw new MBSError(
          `QR login page request failed (HTTP ${navigationResponse.status()})`,
          'api',
          'Check the configured API URL and auth-center availability',
        )
      }
      const rejectedHttpSessionCookies = new Set<string>()
      let authCookies: BrowserLoginCookies
      let userInfo: Awaited<ReturnType<typeof fetchCurrentUser>>
      while (true) {
        authCookies = await waitForAuthCookies(
          context,
          loginUrl,
          deadlineEpochMs,
          rejectedHttpSessionCookies,
        )
        try {
          userInfo = await completeBeforeQrDeadline(
            (remainingMs, signal) => fetchCurrentUser(
              apiUrl,
              authCookies.cookie,
              remainingMs,
              signal,
            ),
            deadlineEpochMs,
          )
          break
        } catch (error) {
          const isRejectedHttpSession = error instanceof NotAuthenticatedError
            && new URL(loginUrl).protocol === 'http:'
            && authCookies.refreshExpiresAt === undefined
          if (!isRejectedHttpSession) throw error
          rejectedHttpSessionCookies.add(authCookies.cookie)
        }
      }
      await saveAuthContext({ ...authCookies, userInfo })
      if (!authCookies.refreshExpiresAt) this.log(HTTP_QR_SESSION_WARNING)
    } finally {
      await browser.close()
    }
  }
}
