import { Plugin } from '@oclif/core'

import './commands/product/erp-monitor-hot-product-all-listing.js'
import './commands/product/erp-product-product.js'

export default class ProductPlugin extends Plugin {
  static readonly topic = 'product'
  static readonly description = '线商品监控'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
