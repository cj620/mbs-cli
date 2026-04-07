// packages/cli/src/commands/login.ts
import { Command } from '@oclif/core'
import { chromium } from 'playwright'
import { setKey, LOGIN_URL, ERPLOGIN_PATH, KEY_PARAM, LOGIN_TIMEOUT_MS } from '@mbs/skill-shared'

export default class Login extends Command {
  static description = 'Authenticate with the MBS system via browser'

  static examples = ['mbs login']

  async run(): Promise<void> {
    this.log('Opening browser for authentication...')
    this.log(`URL: ${LOGIN_URL}`)

    const browser = await chromium.launch({ headless: false })

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
      this.log(JSON.stringify({ ok: true, data: { message: 'Authenticated successfully' } }))
    } finally {
      await browser.close()
    }
  }
}
