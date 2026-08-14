// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetOperationalOpinions extends MBSCommand {
  static description = '查询运营意见：查询运营意见'

  static flags = {
    missionId: Flags.integer({ description: 'MissionID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetOperationalOpinions)

    const data = await this.client.post('/yypms/pms/developerMission/getOperationalOpinions', {}, { params: { "missionId": flags.missionId } })
    this.output(data)
  }
}
