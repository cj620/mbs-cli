// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetField extends MBSCommand {
  static description = '获取配置的color,size 字段：获取配置的color,size 字段'

  static flags = {
    type: Flags.string({ description: '类型（字段名推断,语义待核实）', required: true }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）', required: true }),
    mainCategory: Flags.string({ description: '主类目（字段名推断,语义待核实）', required: true }),
    productType: Flags.string({ description: '商品类型（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetField)

    const data = await this.client.get('/yypms/pms/amazon/getField', { params: { "type": flags.type, "site": flags.site, "mainCategory": flags.mainCategory, "productType": flags.productType } })
    this.output(data)
  }
}
