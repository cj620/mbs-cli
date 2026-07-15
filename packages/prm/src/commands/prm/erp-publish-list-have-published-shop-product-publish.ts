// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListHavePublishedShopProductPublish extends MBSCommand {
  static description = '查询已刊登过的店铺列表：加载当前用户已刊登过的 eBay 店铺列表，用于批量刊登页面顶部「选择新刊登店铺」下拉框（#PublishedShop）的渲染。页面加载时调用一次，无任何请求参数；返回店铺名称数组，前端用 art-template 模板 PublishedShopTemplate 渲染为 option。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListHavePublishedShopProductPublish)

    const data = await this.client.post('/erpPublish/erpPublish/productPublish/listHavePublishedShop', {})
    this.output(data)
  }
}
