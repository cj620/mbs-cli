// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindAutoCreateOrderItem extends MBSCommand {
  static description = '自动创建(自建商品)订单明细查询：在「自动创建/自建商品订单」列表中点击某一行的展开图标时，按订单ID(orderId)查询该订单下的商品明细行(图片、标题、SKU、等级、价格、库存、在途、毛利等)，结果渲染到子表 buildContentTemplate2。'

  static flags = {
    orderId: Flags.string({ description: '订单ID(URL 查询参数)。来源：所点击展开行的 data-id，即自建订单列表行的 orderId', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindAutoCreateOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findAutoCreateOrderItem', {}, { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
