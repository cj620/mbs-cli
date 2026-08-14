// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
