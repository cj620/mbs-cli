// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetAmazonProductType extends MBSCommand {
  static description = '根据店铺和大类确定商品类型：根据店铺和大类确定商品类型'

  static flags = {
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）', required: true }),
    mainCategory: Flags.string({ description: '主类目（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetAmazonProductType)

    const data = await this.client.get('/yypms/pms/amazon/getAmazonProductType', { params: { "spu": flags.spu, "site": flags.site, "mainCategory": flags.mainCategory } })
    this.output(data)
  }
}
