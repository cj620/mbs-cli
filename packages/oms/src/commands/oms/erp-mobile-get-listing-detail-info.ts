// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetListingDetailInfo extends MBSCommand {
  static description = '热销商品-在线刊登详情查询：移动端「在线详情」页加载时调用，按父SPU(商品)ID与店铺ID查询该刊登商品的在线详情：标题/主图/店铺/刊登人/发布时间/30天销量，以及各SKU的属性、净重、在线售价/运费、在线库存、马帮库存、调价/改库存状态等，用于详情卡片渲染。'

  static flags = {
    parentSPUId: Flags.string({ description: '父SPU(商品)ID。来源：页面URL查询参数itemId(GetQueryString(\'itemId\'))；取不到时回填空字符串', required: true }),
    shopId: Flags.string({ description: '店铺ID。来源：页面URL查询参数shopId(GetQueryString(\'shopId\'))；取不到时回填空字符串', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetListingDetailInfo)

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/getListingDetailInfo', { "parentSPUId": flags.parentSPUId, "shopId": flags.shopId })
    this.output(data)
  }
}
