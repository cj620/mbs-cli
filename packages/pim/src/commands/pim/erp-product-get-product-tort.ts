// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductTort extends MBSCommand {
  static description = '商品SPU侵权信息查询：根据商品 SPU 与平台(固定 Walmart)查询该商品的侵权提示信息，前端将返回的 content 文本以告警条形式展示在限价/侵权提示组件中，用于刊登前提醒卖家避免侵权下架风险。'

  static flags = {
    spu: Flags.string({ description: '商品 SPU 编号，来源组件 props.spu，URL query 参数，无值则不发请求', required: true }),
    platform: Flags.string({ description: '平台标识，当前调用点硬编码为 Walmart，URL query 参数', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductTort)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getProductTort', { "spu": flags.spu, "platform": flags.platform })
    this.output(data)
  }
}
