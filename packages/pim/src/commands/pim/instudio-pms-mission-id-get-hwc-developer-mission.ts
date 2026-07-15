// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsMissionIdGetHwcDeveloperMission extends MBSCommand {
  static description = '查询审核人missionid：查询审核人missionid'

  static flags = {}

  static args = {
    missionId: Args.string({ required: true, description: 'MissionID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsMissionIdGetHwcDeveloperMission)

    const data = await this.client.post(`/yypms/pms/developerMission/getHwcDeveloperMission/${args.missionId}`, {})
    this.output(data)
  }
}
