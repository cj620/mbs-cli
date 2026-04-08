import { Plugin } from '@oclif/core'
import type { Command } from '@oclif/core'

// Import all commands so they are registered
import './commands/org/platforms.js'
import './commands/org/sites.js'
import './commands/org/leaders.js'
import './commands/org/managers.js'
import './commands/org/little-leaders.js'
import './commands/org/shop-managers.js'
import './commands/org/employees.js'
import './commands/org/shops.js'

export default class OrgPlugin extends Plugin {
  static readonly topic = 'org'
  static readonly description = 'Organization structure commands (platforms, sites, teams)'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
