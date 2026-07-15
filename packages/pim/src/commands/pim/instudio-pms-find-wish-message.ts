// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindWishMessage extends MBSCommand {
  static description = '查询Wish消息：查询Wish消息(源码无注释,按方法名推断)'

  static flags = {
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindWishMessage)

    const data = await this.client.post('/yypms/pms/EbayOrAliexpressMessage/FindWishMessage', {}, { params: { "category_id": flags.categoryId } })
    this.output(data)
  }
}
