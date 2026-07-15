// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListHavePublishedShopLazadaPublish extends MBSCommand {
  static description = '查询已刊登(新刊登)店铺列表：Lazada 批量刊登页面切换到“刊登完毕”Tab 时调用，查询当前用户可选的“新刊登店铺”列表，用于渲染 #PublishedShop 下拉框（art-template 模板 PublishedShopTemplate）。无请求参数，返回店铺名称集合，选中值作为 search2() 的 targetShops 参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListHavePublishedShopLazadaPublish)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaPublish/listHavePublishedShop', {})
    this.output(data)
  }
}
