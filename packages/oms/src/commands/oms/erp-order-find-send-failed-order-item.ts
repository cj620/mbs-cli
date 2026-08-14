// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindSendFailedOrderItem extends MBSCommand {
  static description = '发货失败订单-商品明细查询：在“发货失败订单”面板中展开某一订单行时，按 orderId 查询该订单下的全部商品(SKU行)明细，返回图片、标题、SKU、产品等级、售价、销量、库存/在途、原价、开发员、成本价等字段，前端据此计算并展示毛利与毛利率。'

  static flags = {
    orderId: Flags.string({ description: '订单ID，定位要查询明细的发货失败订单(URL查询串传参，来源为列表行 item.orderId)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindSendFailedOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findSendFailedOrderItem', {}, { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
