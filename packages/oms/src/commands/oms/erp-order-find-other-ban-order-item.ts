// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindOtherBanOrderItem extends MBSCommand {
  static description = '其他禁止订单明细查询：在“其他禁止”订单列表中点击某行展开时，按 orderId 查询该订单下的商品明细(SKU 行)，返回图片/标题/SKU/产品等级/单价/销量/库存/在途/原价/开发员/成本价等字段，前端用 art-template otherContentTemplate2 渲染子表并现算利润额与利润率。'

  static flags = {
    orderId: Flags.string({ description: '订单ID，指定要查询明细的“其他禁止”订单；来源为主表行 data-id', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindOtherBanOrderItem)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findOtherBanOrderItem', {}, { params: { "orderId": flags.orderId } })
    this.output(data)
  }
}
