// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSpuLogBySpu extends MBSCommand {
  static description = '按SPU查SKU在EBAY可以用的图：按SPU查SKU在EBAY可以用的图'

  static flags = {}

  static args = {
    spu: Args.string({ required: true, description: 'SPU（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsGetSpuLogBySpu)

    const data = await this.client.get(`/yypms/pms/spu/${args.spu}/getSpuLogBySpu`, { params: {} })
    this.output(data)
  }
}
