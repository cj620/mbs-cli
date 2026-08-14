// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSpuPurchase extends MBSCommand {
  static description = '更新拍照任务：更新拍照任务'

  static flags = {}

  static args = {
    spu: Args.string({ required: true, description: 'SPU（字段名推断,语义待核实）' }),
    purchaseId: Args.string({ required: true, description: '采购ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsGetSpuPurchase)

    const data = await this.client.get(`/yypms/pms/ProductPhotographController/${args.spu}/${args.purchaseId}/getSpuPurchase`, { params: {} })
    this.output(data)
  }
}
