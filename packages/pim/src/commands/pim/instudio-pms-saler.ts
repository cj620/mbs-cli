// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsSaler extends MBSCommand {
  static description = '广告预警信息：广告预警信息'

  static flags = {}

  static args = {
    times: Args.string({ required: true, description: '次数（字段名推断,语义待核实）' }),
    status: Args.string({ required: true, description: '状态（字段名推断,语义待核实）' }),
    platform: Args.string({ required: true, description: '平台（字段名推断,语义待核实）' }),
    saler: Args.string({ required: true, description: 'Saler（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsSaler)

    const data = await this.client.get(`/yypms/pms/middlePanel/advertisingWarning/detail/${args.times}/${args.status}/${args.platform}/${args.saler}`, { params: {} })
    this.output(data)
  }
}
