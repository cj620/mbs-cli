// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
