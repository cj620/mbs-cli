import { Command } from '@oclif/core'
import { getWhoamiStatus } from '@mb-it-org/shared'

export default class TestWhoami extends Command {
  static description = 'Show current authentication status through the test module'

  static examples = ['mbs test whoami']

  async run(): Promise<void> {
    await this.parse(TestWhoami)
    this.log(JSON.stringify(await getWhoamiStatus()))
  }
}
