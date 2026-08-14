// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetCateforyNameByUsername extends MBSCommand {
  static description = '通过用户名称 获取用户的分类名称：通过用户名称 获取用户的分类名称'

  static flags = {
    username: Flags.string({ description: '用户名（字段名推断,语义待核实）', required: true }),
    categoryName: Flags.string({ description: '类目名称（字段名推断,语义待核实）' }),
    categoryId: Flags.integer({ description: '类目ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetCateforyNameByUsername)

    const data = await this.client.post('/yypms/pms/category/getCateforyNameByUsername', {}, { params: { "username": flags.username, "categoryName": flags.categoryName, "categoryId": flags.categoryId } })
    this.output(data)
  }
}
