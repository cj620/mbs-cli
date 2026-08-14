// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsAttributeFlag extends MBSCommand {
  static description = '获取品类的颜色和尺码列表：获取品类的颜色和尺码列表'

  static flags = {}

  static args = {
    categoryId: Args.string({ required: true, description: '类目ID（字段名推断,语义待核实）' }),
    attributeFlag: Args.string({ required: true, description: '属性标志（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsAttributeFlag)

    const data = await this.client.get(`/yypms/pms/product/getCategoryAttributeList/${args.categoryId}/${args.attributeFlag}`, { params: {} })
    this.output(data)
  }
}
