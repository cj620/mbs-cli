// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryInfrineMentCategory extends MBSCommand {
  static description = '查询侵权case的字典表(infinge_code)：查询侵权case的字典表(infinge_code)'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    infingeId: Flags.integer({ description: '下拉框id' }),
    infingeName: Flags.string({ description: '下拉框内容' }),
    infingeFlag: Flags.string({ description: '标识' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryInfrineMentCategory)

    const data = await this.client.post('/yypms/pms/infringement/queryInfrineMentCategory', { "id": flags.id, "infingeId": flags.infingeId, "infingeName": flags.infingeName, "infingeFlag": flags.infingeFlag })
    this.output(data)
  }
}
