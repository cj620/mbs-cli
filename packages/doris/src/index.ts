import { Plugin } from '@oclif/core'

import './commands/doris/my-tables.js'
import './commands/doris/query.js'
import './commands/doris/schemas.js'
import './commands/doris/show-create-table.js'

export default class DorisPlugin extends Plugin {
  static readonly topic = 'doris'
  static readonly description = 'Multi-source database exploration and SELECT query commands for agents'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
