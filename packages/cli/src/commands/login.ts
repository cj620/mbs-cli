// packages/cli/src/commands/login.ts
import { Command } from '@oclif/core'
import { chromium } from 'playwright-core'
import { setKey, getAuthContext, LOGIN_URL, ERPLOGIN_PATH, KEY_PARAM, LOGIN_TIMEOUT_MS } from '@mb-it-org/shared'

const MISSING_BROWSER_MESSAGE = 'Chromium runtime is not installed'
const MISSING_BROWSER_HINT = 'Run `npx -y playwright install chromium` and try `mbs login` again'

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

export default class Login extends Command {
  static description = 'Authenticate with the MBS system via browser'

  static examples = ['mbs login']

  async run(): Promise<void> {
    await this.parse(Login)
    this.log('Opening browser for authentication...')
    this.log(`URL: ${LOGIN_URL}`)

    let browser: BrowserInstance | undefined

    try {
      browser = await launchBrowser()
    } catch (error) {
      if (isMissingChromiumError(error)) {
        this.log(
          JSON.stringify({
            ok: false,
            error: {
              type: 'validation',
              message: MISSING_BROWSER_MESSAGE,
              hint: MISSING_BROWSER_HINT,
            },
          }),
        )
        this.exit(1)
        return
      }
      throw error
    }

    try {
      const context = await browser.newContext()
      const page = await context.newPage()

      const key = await new Promise<string>((resolve, reject) => {
        const timeout = setTimeout(
          () => reject(new Error('Login timeout — please try again')),
          LOGIN_TIMEOUT_MS,
        )

        page.on('request', request => {
          if (request.url().includes(ERPLOGIN_PATH)) {
            const url = new URL(request.url())
            const keyValue = url.searchParams.get(KEY_PARAM)
            if (keyValue) {
              clearTimeout(timeout)
              resolve(keyValue)
            }
          }
        })

        // Navigate to login page AFTER attaching listener to avoid race condition
        void page.goto(LOGIN_URL)
      })

      await setKey(key)
      // Immediately fetch and cache cookie + userInfo
      await getAuthContext()
      this.log(JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } }))
    } finally {
      await browser.close()
    }
  }
}
