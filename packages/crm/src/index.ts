import { Plugin } from '@oclif/core'

import './commands/crm/crm-web-service-get-amazon-acc-health-info.js'

export default class CrmPlugin extends Plugin {
  static readonly topic = 'crm'
  static readonly description = '店铺运营监控：账号健康、违规与合规数据（当前仅 Amazon）'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
