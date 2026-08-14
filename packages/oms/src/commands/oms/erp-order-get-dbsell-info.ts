// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDbsellInfo extends MBSCommand {
  static description = '订单SKU(商品)明细列表查询(getDbsellInfo)：订单详情页根据订单ID(orderid)查询该订单下的全部商品(SKU)明细行，返回 obj.list 数组，含每行 SKU 的产品信息、价格(售价/成本)、订购数量、库存/在途/缺货、仓库仓位、收入金额、状态/侵权/折扣等字段；前端据此渲染商品明细表并计算订单总成本(totalCost = Σ ordernum × costprice)。'

  static flags = {
    orderid: Flags.string({ description: '订单ID(query 参数)。来源：页面 URL query GetQueryString("orderid")', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDbsellInfo)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getDbsellInfo', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
