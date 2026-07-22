import { Plugin } from '@oclif/core'

import './commands/pim/instudio-pms-get-shop-manager-ranking-list.js'
import './commands/pim/instudio-pms-list.js'

export default class PimPlugin extends Plugin {
  static readonly topic = 'pim'
  static readonly description = '商品管理'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
