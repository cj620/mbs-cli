// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsTypeShopName extends MBSCommand {
  static description = '根据标题推荐分类：根据标题推荐分类'

  static flags = {}

  static args = {
    shopName: Args.string({ required: true, description: '店铺名称（字段名推断,语义待核实）' }),
    type: Args.string({ required: true, description: '类型（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsTypeShopName)

    const data = await this.client.post(`/yypms/pms/shopeeSinglepublishController/getString/${args.shopName}/${args.type}`, {})
    this.output(data)
  }
}
