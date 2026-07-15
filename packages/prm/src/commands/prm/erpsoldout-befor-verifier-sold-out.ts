// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutBeforVerifierSoldOut extends MBSCommand {
  static description = '下架任务审核前关联SKU查询：平台商品下架页点击某下架任务“审核通过”链接时调用：传任务ID，返回该任务待审核的SKU列表(listbefore，左栏)与系统关联出的SKU列表(listAfter，右栏)，前端用 art-template(contentTemplate7) 渲染双栏勾选框，供审核人勾选后调用 passAudit 通过审核。'

  static flags = {
    id: Flags.string({ description: '下架任务ID。来源：列表行数据 value.id(任务编号)，经“审核通过”链接传入；用于查询该任务下待审核SKU及关联SKU', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutBeforVerifierSoldOut)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/beforVerifier', {}, { params: { "id": flags.id } })
    this.output(data)
  }
}
