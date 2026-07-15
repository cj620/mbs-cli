// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindGoodsSupplyById extends MBSCommand {
  static description = '查询货源信息：查询货源信息'

  static flags = {
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindGoodsSupplyById)

    const data = await this.client.post('/yypms/pms/developerMission/findGoodsSupplyById', {}, { params: { "id": flags.id } })
    this.output(data)
  }
}
