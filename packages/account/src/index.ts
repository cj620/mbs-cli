import { Plugin } from '@oclif/core'

import './commands/account/page.js'

export default class AccountPlugin extends Plugin {
  static readonly topic = 'account'
  static readonly description = 'Account page query'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
