// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindSmtBanTuoRefundOrderItem extends MBSCommand {
  static description = 'SMT半托管退款订单明细查询：SMT(速卖通)半托管退款订单列表中，点击某交易订单行展开时，按交易订单ID查询该订单下的退款商品明细行（图片/标题/SKU/产品等级/单价/销量/库存在途/币种原价/开发员/成本毛利等），用于渲染展开子表。'

  static flags = {
    tradeOrderId: Flags.string({ description: '交易订单ID（SMT半托管退款订单列表行主键，平台/交易单号），URL Query 参数，取自 row.tradeOrderId', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindSmtBanTuoRefundOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findSmtBanTuoRefundOrderItem', {}, { params: { "tradeOrderId": flags.tradeOrderId } })
    this.output(data)
  }
}
