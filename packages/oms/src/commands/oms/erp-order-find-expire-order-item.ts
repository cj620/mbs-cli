// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindExpireOrderItem extends MBSCommand {
  static description = '到期订单明细查询：在「到期订单」列表展开某行时，按 orderId 查询该订单下的商品明细行，返回商品图片、销量、产品等级、单价、币种、原价、库存/在途、成本价等字段，前端用 art-template dutoTemplate2 渲染子表并计算毛利额与毛利率。'

  static flags = {
    orderId: Flags.string({ description: '订单号(URL query 参数)。来源：列表行 tr 的 data-id', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindExpireOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findExpireOrderItem', {}, { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
