// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductAddContent extends MBSCommand {
  static description = '根据SKU/平台/备货内容获取可备货数量(getSaleNumBySku)：SKU详情页「申请备货」弹窗中，选择备货平台与备货内容后，按 SKU + 平台 + 备货内容 三个路径参数请求后端，返回该 SKU 在该平台下的最大可备货量(max)、可输入上限(other)、平台已备货量(platform)，用于回填输入框上限、placeholder 及前置校验。'

  static flags = {}

  static args = {
    sku: Args.string({ required: true, description: 'SKU编号(路径第1段)。来源：浏览器URL查询参数 SKU，前端 GetQueryString(\'SKU\') 取得' }),
    platform: Args.string({ required: true, description: '平台ID(路径第2段)。来源 platform.value=this.id。枚举：97=walmart;26=shopee;18=lazada;120=tiktok;10=aliexpress(smt);128=temu' }),
    addContent: Args.string({ required: true, description: '备货内容/备货类型(路径第3段)。来源 addContent.value。枚举：新品备货/低库存备货/大促活动备货/销量上升期备货/到货周期长备货/爆款延伸款' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductAddContent)

    const data = await this.client.post(`/erpProduct/erpProduct/product/getSaleNumBySku/${args.sku}/${args.platform}/${args.addContent}`, {})
    this.output(data)
  }
}
