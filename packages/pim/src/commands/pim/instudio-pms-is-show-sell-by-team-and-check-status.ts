// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsIsShowSellByTeamAndCheckStatus extends MBSCommand {
  static description = '根据登录人所在组和Spu审核状态判断是否展示提交售卖：根据登录人所在组和Spu审核状态判断是否展示提交售卖'

  static flags = {
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsIsShowSellByTeamAndCheckStatus)

    const data = await this.client.get('/yypms/pms/developerMission/isShowSellByTeamAndCheckStatus', { params: { "spu": flags.spu } })
    this.output(data)
  }
}
