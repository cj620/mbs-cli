// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryFollowList extends MBSCommand {
  static description = '查询跟进记录：查询跟进记录'

  static flags = {
    flag: Flags.string({ description: '标志（字段名推断,语义待核实）', required: true }),
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryFollowList)

    const data = await this.client.get('/yypms/pms/infringement/queryFollowList', { params: { "flag": flags.flag, "id": flags.id } })
    this.output(data)
  }
}
