// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetEbaySinglepublishCondition extends MBSCommand {
  static description = '获取物品状况：获取物品状况'

  static flags = {
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    conditionId: Flags.integer({ description: '条件ID（字段名推断,语义待核实）' }),
    conditionName: Flags.string({ description: '条件名称（字段名推断,语义待核实）' }),
    createby: Flags.string({ description: 'Createby（字段名推断,语义待核实）' }),
    createtime: Flags.string({ description: '创建时间（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetEbaySinglepublishCondition)

    const data = await this.client.post('/yypms/pms/ebaySinglepublishInfoController/getEbaySinglepublishCondition', { "id": flags.id, "site": flags.site, "categoryId": flags.categoryId, "conditionId": flags.conditionId, "conditionName": flags.conditionName, "createby": flags.createby, "createtime": flags.createtime })
    this.output(data)
  }
}
