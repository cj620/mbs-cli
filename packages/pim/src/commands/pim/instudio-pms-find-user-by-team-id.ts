// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindUserByTeamId extends MBSCommand {
  static description = '按团队ID查询用户：按团队ID查询用户(源码无注释,按方法名推断)'

  static flags = {
    teamId: Flags.string({ description: '团队ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindUserByTeamId)

    const data = await this.client.post('/yypms/pms/spu/findUserByTeamId', {}, { params: { "teamId": flags.teamId } })
    this.output(data)
  }
}
