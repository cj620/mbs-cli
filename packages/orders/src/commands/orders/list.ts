// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: fixtures/sample-audit-manifest.json @ 86039d68d81f134f663cee899251e9b43d384ddcb190570a5c2f8e3b6f0fb3b2
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
