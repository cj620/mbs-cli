// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsParentCatIdGetCategoryList extends MBSCommand {
  static description = '查询类目列表：查询类目列表(源码无注释,按方法名推断)'

  static flags = {}

  static args = {
    parentCatId: Args.string({ required: true, description: '父级CATID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsParentCatIdGetCategoryList)

    const data = await this.client.post(`/yypms/pms/yandexBasicDate/getCategoryList/${args.parentCatId}`, {})
    this.output(data)
  }
}
