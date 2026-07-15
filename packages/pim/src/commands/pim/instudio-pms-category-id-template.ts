// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCategoryIdTemplate extends MBSCommand {
  static description = '根据分类获取刊登模板数据：根据分类获取刊登模板数据'

  static flags = {}

  static args = {
    categoryId: Args.string({ required: true, description: '类目ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimInstudioPmsCategoryIdTemplate)

    const data = await this.client.post(`/yypms/pms/mercadolibre/template/${args.categoryId}`, {})
    this.output(data)
  }
}
