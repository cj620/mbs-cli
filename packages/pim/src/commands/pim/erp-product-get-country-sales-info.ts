// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetCountrySalesInfo extends MBSCommand {
  static description = 'SKU国家销量统计查询：查询指定SKU近15天按国家维度的销量统计，用于SKU详情页 ECharts 横向柱状图「国家15天销量(单)」渲染。仅当商品 salesLevel 为超级爆款/爆A/爆B/旺A/旺B 时由 getProductInfoSku 成功回调触发调用。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号。来源：当前页面 URL 查询参数 SKU（GetQueryString(\'SKU\')），拼接到接口 query string。无对应输入控件，由页面地址带入', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetCountrySalesInfo)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getCountrySalesInfo', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
