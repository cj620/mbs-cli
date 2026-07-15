// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListPublishShopProductPublish extends MBSCommand {
  static description = '未刊登店铺列表查询：获取当前用户尚未刊登过的 eBay 店铺列表，用于 eBay 批量刊登页的目标店铺下拉框(#pubshop)与未刊登店铺筛选下拉框(#shopName)渲染。前端不传任何业务参数，直接 POST 调用。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListPublishShopProductPublish)

    const data = await this.client.post('/erpPublish/erpPublish/productPublish/listPublishShop', {})
    this.output(data)
  }
}
