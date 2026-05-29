import { Plugin } from '@oclif/core'

import './commands/test/whoami.js'

export default class TestPlugin extends Plugin {
  static readonly topic = 'test'
  static readonly description = 'Local CLI test utilities'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
