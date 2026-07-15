// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsDeptId extends MBSCommand {
  static description = '初始化降本任务：初始化降本任务'

  static flags = {}

  static args = {
    deptId: Args.string({ required: true, description: '部门ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsDeptId)

    const data = await this.client.get(`/yypms/pms/developerMission/getEmpBydept/${args.deptId}`, { params: {} })
    this.output(data)
  }
}
