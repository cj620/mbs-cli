// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSupplyPoolSpuDetailBySpu extends MBSCommand {
  static description = '根据supplySpu查询SupplyPoolSpu的相关信息：根据supplySpu查询SupplyPoolSpu的相关信息'

  static flags = {
    supplySpu: Flags.string({ description: '供应SPU（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSupplyPoolSpuDetailBySpu)

    const data = await this.client.get('/yypms/pms/SupplyPoolController/getSupplyPoolSpuDetailBySpu', { params: { "supplySpu": flags.supplySpu } })
    this.output(data)
  }
}
