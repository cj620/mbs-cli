// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorForbiddenListingsOfShop extends MBSCommand {
  static description = '店铺违禁词刊登列表查询：按店铺ID分页查询该店铺下命中违禁词(禁词)的刊登商品列表，返回商品店铺、主图、SPU、命中禁词标识、上架时间、标题、商品链接、商品ID等，以及分页汇总(总页数/总条数)。前端每页固定100条，使用art-template(#contentTemplate)渲染表格并配合分页控件翻页。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID。来源于当前页面URL query(GetQueryString(\'shopId\'))，指定要查询违禁词刊登的店铺', required: true }),
    currPage: Flags.string({ description: '当前页码。首次加载固定传1；翻页时取分页控件api.getCurrent()。来源控件：分页组件.M-box(jquery.pagination)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorForbiddenListingsOfShop)

    const data = await this.client.get('/erpmonitor/erpmonitor/monitor/forbiddenListingsOfShop', { params: { "shopId": flags.shopId, "currPage": flags.currPage } })
    this.output(data)
  }
}
