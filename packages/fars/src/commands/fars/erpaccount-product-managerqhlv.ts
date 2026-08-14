// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountProductManagerqhlv extends MBSCommand {
  static description = '开发SKU平均订单缺货时长(开发酋长缺货率)查询：看板首页加载时调用，查询各开发酋长(productManager)近60-15天开发SKU在出单后各缺货时长区间(0-4/4-7/7-15/15-20/20天以上)的订单量、SKU数、缺货占比，以及总缺货订单量与总平均缺货天数；前端按 skunum04Ratio 计算最大/最小项加红绿高亮，渲染至 #content11 表格。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountProductManagerqhlv)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/productManagerqhlv', {})
    this.output(data)
  }
}
