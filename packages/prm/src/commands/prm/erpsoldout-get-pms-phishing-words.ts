// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetPmsPhishingWords extends MBSCommand {
  static description = '钓鱼词详情查询：根据钓鱼词记录ID查询单条钓鱼词配置详情，用于「编辑」弹窗回填表单（钓鱼词、替换词、平台、描述、站点、一级分类、包含词、是否包含for、是否车标词等）。'

  static flags = {
    id: Flags.string({ description: '钓鱼词记录ID（主键），来源表格行 row.id（编辑操作）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetPmsPhishingWords)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/getPmsPhishingWords', { "id": flags.id })
    this.output(data)
  }
}
