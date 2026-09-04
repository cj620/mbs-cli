// packages/cli/src/commands/config/init.ts
import { Command } from '@oclif/core'
import { input } from '@inquirer/prompts'
import { setConfig } from '@mb-it-org/shared'

/**
 * Validates the interactive API root before it can influence persisted routing.
 *
 * @param value User-entered absolute URL.
 * @returns True for an HTTP(S) root without embedded credentials, query, or fragment;
 * otherwise a safe validation message that contains no input echo.
 */
function validateApiUrl(value: string): true | string {
  try {
    const parsed = new URL(value)
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return 'Please enter an HTTP or HTTPS URL'
    }
    if (parsed.username || parsed.password || parsed.search || parsed.hash) {
      return 'Please enter an API root without credentials, query, or fragment'
    }
    return true
  } catch {
    return 'Please enter a valid URL (e.g. https://api.example.com)'
  }
}

export default class ConfigInit extends Command {
  static description = 'Initialize the MBS API URL'

  static examples = ['mbs config init']

  /**
   * Interactively replaces the persisted HTTP(S) API root.
   *
   * <p>Remote HTTP is accepted without a second confirmation for temporary
   * compatibility, but later authentication sends credentials without transport
   * encryption. This command itself collects and transmits no credentials.</p>
   *
   * @returns A promise that resolves after configuration is persisted and reported.
   * @throws Error when prompting is cancelled or configuration cannot be written.
   */
  async run(): Promise<void> {
    await this.parse(ConfigInit)
    this.log('MBS CLI Configuration Setup')
    this.log('──────────────────────────')

    const apiUrl = await input({
      message: 'API Base URL:',
      default: 'http://www.instudio.me:6206',
      validate: validateApiUrl,
    })

    setConfig({ apiUrl })

    this.log(JSON.stringify({
      ok: true,
      data: {
        apiUrl,
        message: 'Configuration saved',
      },
    }))
  }
}
