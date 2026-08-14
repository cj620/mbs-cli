// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindEmployeenameByCategorId extends MBSCommand {
  static description = '通过分类id 获取分类负责人：通过分类id 获取分类负责人'

  static flags = {
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindEmployeenameByCategorId)

    const data = await this.client.post('/yypms/pms/category/findEmployeenameByCategorId', {}, { params: { "CategoryId": flags.categoryId } })
    this.output(data)
  }
}
