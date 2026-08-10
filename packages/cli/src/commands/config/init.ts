// packages/cli/src/commands/config/init.ts
import { Command } from '@oclif/core'
import { input } from '@inquirer/prompts'
import { setConfig } from '@mb-it-org/shared'

export default class ConfigInit extends Command {
  static description = 'Initialize MBS CLI configuration'

  static examples = ['mbs config init']

  /**
   * Interactively replaces the persisted API root used by normal CLI requests.
   *
   * @returns A promise that resolves after configuration is persisted and reported.
   */
  async run(): Promise<void> {
    await this.parse(ConfigInit)
    this.log('MBS CLI Configuration Setup')
    this.log('──────────────────────────')

    const apiUrl = await input({
      message: 'API Base URL:',
      default: 'http://www.instudio.me:6206',
      validate: (value) => {
        try {
          new URL(value)
          return true
        } catch {
          return 'Please enter a valid URL (e.g. http://api.example.com)'
        }
      },
    })

    setConfig({ apiUrl })

    this.log(JSON.stringify({ ok: true, data: { apiUrl, message: 'Configuration saved' } }))
  }
}
