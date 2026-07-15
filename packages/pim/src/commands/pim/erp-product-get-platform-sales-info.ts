// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPlatformSalesInfo extends MBSCommand {
  static description = 'SKU平台销量查询(平台15天销量)：SKU详情页查询该SKU各销售平台近15天销量，返回 平台名称 + 平台销量 列表，前端用 ECharts 横向柱状图渲染「平台15天销量(单)」。'

  static flags = {
    sku: Flags.string({ description: 'SKU编码（查询串拼接 ?sku=+SKU，取自当前页面 URL 的 SKU 参数；定位要查询平台销量的具体SKU）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPlatformSalesInfo)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPlatformSalesInfo', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
