// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPublishShopLazadaAutopublishController extends MBSCommand {
  static description = '查询Lazada自动刊登店铺列表(含汇总数)：Lazada自动刊登页加载时调用，无入参。返回当前用户头像、刊登成功/等待汇总数，以及该用户名下的刊登店铺列表(每店含店铺名与刊登成功数)，用于渲染左侧店铺栏与顶部店铺筛选下拉。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPublishShopLazadaAutopublishController)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaAutopublishController/findPublishShop', {})
    this.output(data)
  }
}
