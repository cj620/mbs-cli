// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
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
