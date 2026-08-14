// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSkuRecommender extends MBSCommand {
  static description = 'SKU推荐人查询：SKU详情页加载时查询该SKU的推荐人信息，返回推荐人姓名与推荐人头像URL，用于在「推荐人」卡片区(.rementInfo)展示；无数据时隐藏该卡片。'

  static flags = {}

  static args = {
    sKU: Args.string({ required: true, description: 'SKU编号（路径变量）。来源：页面地址栏查询参数 SKU（GetQueryString(\'SKU\') 读取 window.location.search），拼入 productDetails/{SKU}/getSkuRecommender' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductGetSkuRecommender)

    const data = await this.client.get(`/erpProduct/erpProduct/productDetails/${args.sKU}/getSkuRecommender`, { params: {} })
    this.output(data)
  }
}
