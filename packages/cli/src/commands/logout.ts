// packages/cli/src/commands/logout.ts
import { Command } from '@oclif/core'
import { deleteKey, clearCookie } from '@mb-it-org/shared'

export default class Logout extends Command {
  static description = 'Log out and clear stored credentials'

  static examples = ['mbs logout']

  async run(): Promise<void> {
    await this.parse(Logout)
    await deleteKey()
    clearCookie()
    this.log(JSON.stringify({ ok: true, data: { message: 'Logged out successfully' } }))
  }
}
