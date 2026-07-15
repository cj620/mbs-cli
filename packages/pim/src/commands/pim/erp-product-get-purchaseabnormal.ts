// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPurchaseabnormal extends MBSCommand {
  static description = 'SKU采购异常统计查询：SKU详情页加载时调用，查询该SKU近60天的采购收货异常统计：少发、多发、漏发、错发、正常各类型的数量及其占总数比例，渲染到“查看采购单”旁的标签区(#infoContent)。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编号，查询该SKU近60天采购异常统计(URL查询参数,来源 GetQueryString(\'SKU\'))', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPurchaseabnormal)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPurchaseabnormal', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
