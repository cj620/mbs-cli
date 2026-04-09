// packages/cli/src/commands/config/init.ts
import { Command } from '@oclif/core'
import { input } from '@inquirer/prompts'
import { setConfig } from '@mbs/shared'

export default class ConfigInit extends Command {
  static description = 'Initialize MBS CLI configuration'

  static examples = ['mbs config init']

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
