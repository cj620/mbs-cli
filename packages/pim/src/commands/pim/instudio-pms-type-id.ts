// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsTypeId extends MBSCommand {
  static description = '查询海外仓类型：查询海外仓类型'

  static flags = {}

  static args = {
    typeId: Args.string({ required: true, description: '类型ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsTypeId)

    const data = await this.client.post(`/yypms/pms/developerMission/getWarehouseTypeNameCheck/${args.typeId}`, {})
    this.output(data)
  }
}
