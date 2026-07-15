// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPublishShopEbayProductController extends MBSCommand {
  static description = '查询当前用户刊登店铺列表（侧边栏）：eBay 自动刊登页（eabyAutPublished.html）打开后约 500ms 自动调用，无入参（用户身份由会话/Cookie 推导）。返回当前用户头像、累计刊登成功数及其名下店铺列表（含各店铺累计刊登成功数）。前端用于渲染左侧店铺导航栏，并填充顶部“请选择店铺”下拉。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPublishShopEbayProductController)

    const data = await this.client.post('/erpProduct/erpProduct/ebayProductController/findPublishShop', {})
    this.output(data)
  }
}
