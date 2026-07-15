// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindRefundOrderItem extends MBSCommand {
  static description = '退款(退货)订单明细查询：在「退包订单」列表中点击订单展开时，按 orderId 查询该订单下的退款明细行(SKU级)，返回明细数组并渲染到子表(returnContentTemplate2)，展示图片/标题/SKU/产品等级/售价/数量/库存/在途/原价/开发员及前端计算的毛利与毛利率。'

  static flags = {
    orderId: Flags.string({ description: '订单ID，作为 URL query 参数拼接(?orderId=+orderId)，用于查询该订单的退款明细；来源为退货列表行 tr 的 data-id', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindRefundOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findRefundOrderItem', {}, { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
