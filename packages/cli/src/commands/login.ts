import { input, password, select } from '@inquirer/prompts'
import { Command, Flags } from '@oclif/core'
import {
  clearCookie,
  createBrowserAuthCookies,
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
  validateManagedTokenLoginApiUrl,
  validatePasswordLoginApiUrl,
} from '@mb-it-org/shared'
import { chromium } from 'playwright-core'
import type { BrowserContext } from 'playwright-core'

const MISSING_BROWSER_MESSAGE = 'No supported browser runtime is available'
const MISSING_BROWSER_HINT = 'Make sure Chrome or Edge is installed and available, then try `mbs login` again. Only install an extra browser runtime if the system browsers cannot be used.'
const SESSION_POLL_INTERVAL_MS = 250

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
 * Waits for the browser to own valid SESSION and AUTH_REFRESH cookies without observing requests.
 *
 * @param context Fresh isolated browser context used by the QR login page.
 * @param timeoutMs Maximum interactive login duration.
 * @returns Minimal Cookie header and server-declared Refresh expiry.
 * @throws NotAuthenticatedError when the deadline expires.
 */
async function waitForAuthCookies(
  context: BrowserContext,
  timeoutMs: number,
): Promise<{ cookie: string; refreshExpiresAt: string }> {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    const cookies = await context.cookies()
    const authCookies = createBrowserAuthCookies(cookies)
    if (authCookies) return authCookies
    await waitForNextCookiePoll()
  }
  throw new NotAuthenticatedError()
}

export default class Login extends Command {
  static description = 'Authenticate with MBS by QR code, account password, or long-term Refresh Token'

  static examples = ['mbs login', 'mbs login --password']

  static flags = {
    password: Flags.boolean({
      char: 'p',
      description: 'Prompt for account and password in the terminal without opening a browser',
      default: false,
    }),
  }

  /**
   * Authenticates interactively while persisting only approved auth state and safe user data.
   *
   * <p>Password mode prompts in the terminal and calls auth-center directly. QR
   * mode opens a browser but polls only browser cookie state. Managed-token mode
   * accepts a hidden terminal secret and calls the exclusive LongToken exchange.
   * Bare login asks between all three modes. All modes delete known legacy key
   * storage without reading it.</p>
   *
   * <p>Before any method selection or credential collection, login deletes the
   * complete Cookie, Refresh credential, and user cache. Cancellation or failure
   * leaves the CLI logged out so credentials from different users cannot mix.</p>
   */
  async run(): Promise<void> {
    const { flags } = await this.parse(Login)

    try {
      clearCookie()
      await deleteKey()
      const { apiUrl } = getConfig()
      const method = flags.password ? 'password' : await select({
        message: 'Choose a login method:',
        choices: [
          { name: 'QR code (opens a browser)', value: 'qr' as const },
          { name: 'Account and password (terminal)', value: 'password' as const },
          { name: 'Long-term Refresh Token (terminal)', value: 'managed-token' as const },
        ],
      })
      if (method === 'password') {
        await this.loginFromTerminal(apiUrl)
      } else if (method === 'managed-token') {
        await this.loginFromManagedToken(apiUrl)
      } else {
        await this.loginFromBrowser(apiUrl)
      }
      this.log(JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } }))
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
   * Prompts for credentials and performs one direct auth-center login request.
   *
   * @param apiUrl Configured MBS API root.
   */
  private async loginFromTerminal(apiUrl: string): Promise<void> {
    validatePasswordLoginApiUrl(apiUrl)
    const username = await input({ message: 'MBS account:' })
    let enteredPassword = await password({ mask: '*', message: 'MBS password:' })
    try {
      const context = await loginWithPassword(apiUrl, { username, password: enteredPassword })
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
   * Opens the QR page and stores the resulting minimal authentication Cookie context.
   *
   * @param apiUrl Configured MBS API root.
   */
  private async loginFromBrowser(apiUrl: string): Promise<void> {
    const loginUrl = `${apiUrl.replace(/\/+$/, '')}${LOGIN_PATH}`
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
      await page.goto(loginUrl)
      const authCookies = await waitForAuthCookies(context, LOGIN_TIMEOUT_MS)
      const userInfo = await fetchCurrentUser(apiUrl, authCookies.cookie)
      await saveAuthContext({ ...authCookies, userInfo })
    } finally {
      await browser.close()
    }
  }
}
