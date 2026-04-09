// packages/cli/src/commands/config/get.ts
import { Command } from '@oclif/core'
import { getConfig } from '@mbs/shared'

export default class ConfigGet extends Command {
  static description = 'Show current configuration'

  static examples = ['mbs config get']

  async run(): Promise<void> {
    await this.parse(ConfigGet)
    try {
      const config = getConfig()
      this.log(JSON.stringify({ ok: true, data: config }))
    } catch (err) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'api',
            message: (err as Error).message,
            hint: 'Run mbs config init to configure',
          },
        }),
      )
    }
  }
}
