// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindEbayMessage extends MBSCommand {
  static description = '查询eBay消息：查询eBay消息(源码无注释,按方法名推断)'

  static flags = {
    index: Flags.integer({ description: '索引（字段名推断,语义待核实）', required: true }),
    path: Flags.string({ description: '路径（字段名推断,语义待核实）' }),
    state: Flags.integer({ description: '状态（字段名推断,语义待核实）', required: true }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    categoryIdPath: Flags.string({ description: '类目ID路径（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindEbayMessage)

    const data = await this.client.post('/yypms/pms/EbayOrAliexpressMessage/findEbayMessage', {}, { params: { "index": flags.index, "path": flags.path, "state": flags.state, "category_id": flags.categoryId, "category_id_path": flags.categoryIdPath } })
    this.output(data)
  }
}
