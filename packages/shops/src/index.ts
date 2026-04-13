import { Plugin } from '@oclif/core'

import './commands/shops/health.js'

export default class ShopsPlugin extends Plugin {
  static readonly topic = 'shops'
  static readonly description = 'Shop operational data (health, performance)'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
