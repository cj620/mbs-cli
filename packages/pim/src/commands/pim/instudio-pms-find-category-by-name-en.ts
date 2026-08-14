// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindCategoryByNameEn extends MBSCommand {
  static description = '根据英文名查询分类：根据英文名查询分类'

  static flags = {
    name: Flags.string({ description: '名称（字段名推断,语义待核实）', required: true }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）', required: true }),
    vtype: Flags.string({ description: 'Vtype（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindCategoryByNameEn)

    const data = await this.client.post('/yypms/pms/ebaySinglepublishInfoController/findCategoryByNameEn', {}, { params: { "name": flags.name, "site": flags.site, "vtype": flags.vtype } })
    this.output(data)
  }
}
