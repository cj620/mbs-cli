// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductSkuCountryPlatformSaleInfo extends MBSCommand {
  static description = 'SKU国家/平台/刊登销量分布查询：SKU销量统计弹窗(sales-chart-sku 自定义组件)右侧三张柱状图的数据源：按指定SKU返回该SKU的平台销量分布(platform)、国家销量分布(country)、刊登量分布(publish)三组数据，每组含分类名称数组(title)与对应销量数组(saleNum)，前端分别渲染到右下、右上、中间三个 ECharts 柱状图。'

  static flags = {
    sku: Flags.string({ description: 'SKU编码。来源：组件 <sales-chart-sku sku="..."> 的 sku 属性(prop.sku)。以 URL Query 传参，定位要统计的单个SKU', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductSkuCountryPlatformSaleInfo)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/skuCountryPlatformSaleInfo', { "sku": flags.sku })
    this.output(data)
  }
}
