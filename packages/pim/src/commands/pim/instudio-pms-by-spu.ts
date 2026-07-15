// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsBySpu extends MBSCommand {
  static description = '根据SPU查询商标侵权词（已过滤白名单）：根据SPU查询商标侵权词（已过滤白名单）'

  static flags = {
    spuId: Flags.string({ description: 'SPUID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsBySpu)

    const data = await this.client.get('/yypms/pms/trademark/names/by-spu', { params: { "spuId": flags.spuId } })
    this.output(data)
  }
}
