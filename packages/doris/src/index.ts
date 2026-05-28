import { Plugin } from '@oclif/core'

import './commands/doris/query.js'
import './commands/doris/schemas.js'
import './commands/doris/show-create-table.js'

export default class DorisPlugin extends Plugin {
  static readonly topic = 'doris'
  static readonly description = 'Doris database exploration and SELECT query commands for agents'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
