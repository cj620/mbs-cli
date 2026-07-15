// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindInfrigingOrderItem extends MBSCommand {
  static description = '侵权商品订单明细查询：在「侵权或禁售」订单列表中点击某条订单行展开时，按订单ID查询该订单下的商品明细(订单项)列表，返回每个订单项的图片、标题、SKU、产品等级、单价、销量、库存/在途、币种/原价、开发员、利润计算所需成本及侵权平台，渲染到子表格 tortContentTemplate2。'

  static flags = {
    orderId: Flags.string({ description: '订单ID。来源：侵权订单列表当前行<tr>的data-id，以URL查询参数?orderId=传递，用于查询该订单下的商品明细', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindInfrigingOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findInfrigingOrderItem', {}, { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
