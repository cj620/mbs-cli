// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
