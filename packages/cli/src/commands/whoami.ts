// packages/cli/src/commands/whoami.ts
import { Command } from '@oclif/core'
import { getWhoamiStatus } from '@mb-it-org/shared'

export default class Whoami extends Command {
  static description = 'Show current authentication status'

  static examples = ['mbs whoami']

  async run(): Promise<void> {
    await this.parse(Whoami)
    this.log(JSON.stringify(await getWhoamiStatus()))
  }
}
