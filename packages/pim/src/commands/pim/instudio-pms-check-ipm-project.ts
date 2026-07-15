// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheckIpmProject extends MBSCommand {
  static description = '选品任务审核：选品任务审核'

  static flags = {
    missionId: Flags.integer({ description: 'MissionID（字段名推断,语义待核实）' }),
    auditRemark: Flags.string({ description: '审核备注（字段名推断,语义待核实）' }),
    auditPerson: Flags.string({ description: '审核人员（字段名推断,语义待核实）' }),
    auditStatus: Flags.integer({ description: '审核状态（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheckIpmProject)

    const data = await this.client.post('/yypms/pms/developerMission/checkIpmProject', { "missionId": flags.missionId, "auditRemark": flags.auditRemark, "auditPerson": flags.auditPerson, "auditStatus": flags.auditStatus })
    this.output(data)
  }
}
