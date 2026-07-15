// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsSkuOper extends MBSCommand {
  static description = '开发中台的列表数据：开发中台的列表数据'

  static flags = {}

  static args = {
    times: Args.string({ required: true, description: '次数（字段名推断,语义待核实）' }),
    position: Args.string({ required: true, description: '位置（字段名推断,语义待核实）' }),
    skuOper: Args.string({ required: true, description: 'SKU操作（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsSkuOper)

    const data = await this.client.get(`/yypms/pms/skuManager/get/${args.times}/${args.position}/${args.skuOper}`, { params: {} })
    this.output(data)
  }
}
