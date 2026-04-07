// packages/cli/src/commands/whoami.ts
import { Command } from '@oclif/core'
import { getKey, readCookie } from '@mbs/skill-shared'

export default class Whoami extends Command {
  static description = 'Show current authentication status'

  static examples = ['mbs whoami']

  async run(): Promise<void> {
    const key = await getKey()
    const cookie = readCookie()

    if (!key) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'auth',
            message: 'Not logged in',
            hint: 'Run mbs login to authenticate',
          },
        }),
      )
      return
    }

    this.log(
      JSON.stringify({
        ok: true,
        data: {
          keyPreview: `${key.slice(0, 8)}...`,
          sessionActive: cookie !== null,
        },
      }),
    )
  }
}
