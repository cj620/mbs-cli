// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindBuchaOrderOrderItem extends MBSCommand {
  static description = '补差大订单-商品明细查询(第二层)：在订单管理“补差大”页签的订单列表中，点击某条订单的展开图标时触发；以该订单 orderId 为入参，POST 查询该订单下的补差商品明细行(图片/标题/SKU/销量/等级/单价/补差金额/库存等)，渲染到二级明细表格。'

  static flags = {
    orderId: Flags.string({ description: '订单ID——“补差大”订单列表中被展开的那条订单的主键，用于查询其商品明细(以URL查询串传递)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindBuchaOrderOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findBuchaOrderOrderItem', { "orderId": flags.orderId })
    this.output(data)
  }
}
