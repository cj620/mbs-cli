// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderCustomerServiceAssessShop extends MBSCommand {
  static description = '店铺客服考核(平台店铺评估)查询：店铺业绩列表(chakanShop)中鼠标悬浮店铺名时触发，按店铺名查询该店铺在所属平台(Shopee/Lazada/ebay)的客服考核/店铺评估明细，返回评估项数组(obj)。前端按 platform 套用不同模板(shopeeTemplate/lazadaTemplate/ebayTemplate)渲染，code=500 时直接展示 desc 文案。'

  static flags = {
    shopName: Flags.string({ description: '店铺名。查询条件，拼接到 URL ?shopName= 后。来源：列表行 data-shopname(即 value.shopName)，由悬浮事件透传，单值', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderCustomerServiceAssessShop)

    const data = await this.client.get('/erpOrder/erpOrder/shopAchievements/customerServiceAssessShop', { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
