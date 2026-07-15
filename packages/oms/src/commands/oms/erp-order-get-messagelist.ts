// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetMessagelist extends MBSCommand {
  static description = '订单留言列表查询：订单详情页加载该订单客户的站内信/留言列表。以客户ID(sender)与订单操作时间(opertime)为条件，返回该客户对应的留言记录(创建时间、星期、序号ID、留言主题)，前端在客户留言卡片中循环渲染，点击留言主题可跳转留言详情页。'

  static flags = {
    sender: Flags.string({ description: '留言发送方=客户ID，来源订单详情对象 obj.customerid（下单客户标识，留言归属过滤条件）', required: true }),
    opertime: Flags.string({ description: '订单操作时间，来源订单详情对象 obj.opertime，作为留言时间维度过滤条件(格式待人工确认)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetMessagelist)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getMessagelist', {}, { params: { "sender": flags.sender, "opertime": flags.opertime } })
    this.output(data)
  }
}
