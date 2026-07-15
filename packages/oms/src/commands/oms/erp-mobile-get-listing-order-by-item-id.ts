// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetListingOrderByItemId extends MBSCommand {
  static description = '商品在线详情-销售单列表查询：移动端马帮ERP「在线详情」页根据商品ID(SPU)与平台ID查询该商品对应的销售单(订单)列表，返回订单号、状态、售价/数量、总收入/总毛利、国家、成交账号、下单时间等，前端按前10条/其余两段渲染。'

  static flags = {
    parentSPUId: Flags.string({ description: '父SPU商品ID(取自URL参数 itemId，取不到时传空字符串)' }),
    platformId: Flags.string({ description: '平台ID(取自URL参数 platformId，取不到时传空字符串)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetListingOrderByItemId)

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/getListingOrderByItemId', { "parentSPUId": flags.parentSPUId, "platformId": flags.platformId })
    this.output(data)
  }
}
