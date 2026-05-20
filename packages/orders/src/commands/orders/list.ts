// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: fixtures/sample-audit-manifest.json
// Manifest: 2026-05-20T13:30:00+08:00 @ de473bfb3db122622d5a6c6445e5d2e6d505d0770c52c340821bcedfc8d00032
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OrdersList extends MBSCommand {
  static description = '查询订单列表'

  static flags = {
    status: Flags.string({ description: '订单状态' }),
    limit: Flags.integer({ description: '返回数量', default: 20 }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OrdersList)

    const data = await this.client.get('/v1/orders', { params: flags })
    this.output(data)
  }
}
