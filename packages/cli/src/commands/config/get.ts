// packages/cli/src/commands/config/get.ts
import { Command } from '@oclif/core'
import { getConfig } from '@mb-it-org/shared'

export default class ConfigGet extends Command {
  static description = 'Show current configuration'

  static examples = ['mbs config get']

  /**
   * Prints the active non-secret API configuration.
   *
   * @returns A promise that resolves after a structured configuration or safe error is printed.
   */
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
