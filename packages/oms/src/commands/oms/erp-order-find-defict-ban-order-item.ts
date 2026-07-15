// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDefictBanOrderItem extends MBSCommand {
  static description = '缺货禁售订单明细查询：根据订单ID(orderId)查询该订单下缺货/禁售商品明细列表，返回每个商品的图片、标题、SKU、销量、售卖等级、单价、币种原价、库存/在途、成本价等，前端在表格中渲染并计算毛利与毛利率。'

  static flags = {
    orderId: Flags.string({ description: '订单ID。URL查询参数；来源=父级订单列表行点击时传入的该订单orderId', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDefictBanOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findDefictBanOrderItem', {}, { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
