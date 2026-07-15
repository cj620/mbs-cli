// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListHavePublishedShopShopeeProductPublish extends MBSCommand {
  static description = '查询已刊登店铺列表：切换到“刊登完毕”视图时调用，获取当前已经刊登过商品的 Shopee 店铺集合，用于渲染页面“选择新刊登店铺”下拉框(#PublishedShop)。请求不携带任何参数(空请求体)，仅返回店铺名称列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListHavePublishedShopShopeeProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/listHavePublishedShop', {})
    this.output(data)
  }
}
