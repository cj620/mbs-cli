// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSupplyUrlBySkuProduct extends MBSCommand {
  static description = '获取sku供应链接信息：获取sku供应链接信息'

  static flags = {
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSupplyUrlBySkuProduct)

    const data = await this.client.post('/yypms/pms/product/getSupplyUrlBySku', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
