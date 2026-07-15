// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopByPt extends MBSCommand {
  static description = '按平台查询可刊登店铺(Wish刊登选店)：库存看板「Wish刊登」弹窗触发：按平台ID(固定\'16\'=Wish)查询当前用户可刊登的店铺名称列表，前端渲染到 #selectShop 下拉框供用户选择后跳转 /EditInformation 刊登页。'

  static flags = {
    platformid: Flags.string({ description: '平台ID。前端硬编码固定传 \'16\'(=Wish 平台)，用于按平台过滤可刊登店铺。来源：代码常量(非控件)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopByPt)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/findShopByPt', { "platformid": flags.platformid })
    this.output(data)
  }
}
