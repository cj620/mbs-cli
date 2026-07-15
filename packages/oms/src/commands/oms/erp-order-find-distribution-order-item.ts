// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDistributionOrderItem extends MBSCommand {
  static description = '自建商品订单详情查询：在自建商品订单列表中点击某行展开时，按 orderId 查询该分销订单下的全部商品明细行，返回图片/标题/SKU/售卖等级/单价/销量/库存/在途/成本等字段，渲染到子表 buildContentTemplate2。'

  static flags = {
    orderId: Flags.string({ description: '分销订单ID（来源：列表行 data-id，即 $(tr).data(\'id\')），用于查询该订单下的商品明细', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDistributionOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findDistributionOrderItem', { "orderId": flags.orderId })
    this.output(data)
  }
}
