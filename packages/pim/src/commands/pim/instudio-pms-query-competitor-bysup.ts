// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryCompetitorBysup extends MBSCommand {
  static description = '根据商品spu获取竞品url地址：根据商品spu获取竞品url地址'

  static flags = {
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryCompetitorBysup)

    const data = await this.client.post('/yypms/pms/productImage/queryCompetitorBysup', {}, { params: { "spu": flags.spu } })
    this.output(data)
  }
}
