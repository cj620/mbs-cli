// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGroupid extends MBSCommand {
  static description = '查询刊登确认信息(UPC/刊登编号)：亚马逊自动刊登确认页，点击父SKU时根据变体组ID(groupid)查询该刊登任务下父/子变体的刊登编号(sellerSku)与UPC(productId)信息，回填到「修改UPC并提交刊登」弹窗(upcModal)供编辑确认。'

  static flags = {}

  static args = {
    groupid: Args.string({ required: true, description: '刊登任务变体组ID(路径参数)，来源列表行模板 {{v.groupid}}，点击父SKU时传入 onClickParentSku(groupid) 并拼接到URL末尾' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductGroupid)

    const data = await this.client.get(`/erpProduct/erpProduct/amazonProductPublish/getPublishConfirmInfo/${args.groupid}`, { params: {} })
    this.output(data)
  }
}
