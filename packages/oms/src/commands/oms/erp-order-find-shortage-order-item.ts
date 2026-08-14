// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindShortageOrderItem extends MBSCommand {
  static description = '投递失败订单-缺货商品明细查询：客户评价(差评)页「投递失败订单」Tab中，点击某一行的展开图标时，按订单号(orderId)查询该订单下的商品明细列表(图片/标题/SKU/数量/销量级别/单价/库存/在途/成本等)，用于渲染子表格并计算商品毛利与毛利率。'

  static flags = {
    orderId: Flags.string({ description: '订单编号(订单号)。取自“投递失败订单”行的 data-id，以查询串 ?orderId= 拼接', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindShortageOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findShortageOrderItem', {}, { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
