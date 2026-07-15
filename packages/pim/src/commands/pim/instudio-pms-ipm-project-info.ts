// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsIpmProjectInfo extends MBSCommand {
  static description = '海外仓计划列表：海外仓计划列表'

  static flags = {
    projectCode: Flags.string({ description: '项目编码（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsIpmProjectInfo)

    const data = await this.client.post('/yypms/pms/developerMission/ipmProjectInfo', {}, { params: { "projectCode": flags.projectCode } })
    this.output(data)
  }
}
