// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
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
