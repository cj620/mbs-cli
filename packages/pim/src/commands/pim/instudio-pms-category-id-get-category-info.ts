// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCategoryIdGetCategoryInfo extends MBSCommand {
  static description = '获取分类详情：获取分类详情'

  static flags = {}

  static args = {
    categoryId: Args.string({ required: true, description: '类目ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsCategoryIdGetCategoryInfo)

    const data = await this.client.get(`/yypms/pms/category/getCategoryInfo/${args.categoryId}`, { params: {} })
    this.output(data)
  }
}
