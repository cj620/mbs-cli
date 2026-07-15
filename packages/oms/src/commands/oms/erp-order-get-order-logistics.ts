// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetOrderLogistics extends MBSCommand {
  static description = '订单物流轨迹查询：根据订单ID查询该订单的物流轨迹（物流跟踪节点）列表，用于订单详情页点击「物流轨迹」时以时间线（el-timeline）形式展示每个轨迹节点的时间与描述文本。'

  static flags = {
    orderid: Flags.string({ description: '订单ID（订单唯一标识），URL query 参数，来源 GetQueryString("orderid") / basedata.orderid', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetOrderLogistics)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getOrderLogistics', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
