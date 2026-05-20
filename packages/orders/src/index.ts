import { Plugin } from '@oclif/core'

import './commands/orders/list.js'

export default class OrdersPlugin extends Plugin {
  static readonly topic = 'orders'
  static readonly description = '订单查询'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
