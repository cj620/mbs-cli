// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindOnLineProduct extends MBSCommand {
  static description = '查看线上(侵权)商品列表查询：移动端马帮ERP「查看线上商品」页：按商品ID与关键词(sku/店铺)分页查询线上侵权商品列表，返回商品标题、SKU、侵权关键词及移除状态、店铺、刊登时间等，支持「加载更多」分页。'

  static flags = {
    currPage: Flags.string({ description: '当前页码。search()固定传1；getMore()传++currPage递增；来源：前端分页计数器', required: true }),
    id: Flags.string({ description: '商品ID。来源：页面URL查询参数id(GetQueryString(\'id\'))；用于定位要查询线上商品的关联ID' }),
    search: Flags.string({ description: '搜索关键词。来源：搜索输入框#search(占位提示「sku/店铺」)，按SKU或店铺名模糊查询' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindOnLineProduct)

    const data = await this.client.post('/erpMobile/erpMobile/infringing/findOnLineProduct', { "currPage": flags.currPage, "id": flags.id, "search": flags.search })
    this.output(data)
  }
}
