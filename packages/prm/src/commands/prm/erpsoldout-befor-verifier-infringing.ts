// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutBeforVerifierInfringing extends MBSCommand {
  static description = '侵权审核-关联SKU查询(beforVerifier)：在“商品侵权”列表点击单条/批量审核时，按侵权记录ID(id)查询该记录关联的“审核后(listAfter)”与“审核前(listbefore)”SKU列表，用于侵权审核弹框中展示并勾选要提交的侵权SKU；返回每个SKU的图片、子SKU、相似度评分、是否侵权等。'

  static flags = {
    id: Flags.string({ description: '侵权记录ID(待审核侵权提交记录主键)，来源列表行复选框value(item.id)，以表单字段id提交', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutBeforVerifierInfringing)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/beforVerifier', { "id": flags.id })
    this.output(data)
  }
}
