// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindSpuByProjectid extends MBSCommand {
  static description = '根据项目id查询spu：根据项目id查询spu'

  static flags = {
    projectid: Flags.string({ description: 'Projectid（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindSpuByProjectid)

    const data = await this.client.post('/yypms/pms/developerMission/findSpuByProjectid', {}, { params: { "projectid": flags.projectid } })
    this.output(data)
  }
}
