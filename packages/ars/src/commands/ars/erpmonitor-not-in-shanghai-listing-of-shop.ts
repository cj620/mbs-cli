// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorNotInShanghaiListingOfShop extends MBSCommand {
  static description = '店铺非上海刊登商品查询：按店铺ID分页查询该店铺“违规地（非上海地址）”刊登的商品列表，返回店铺名称、SPU、图片、上架时间、标题、商品链接、商品ID等，前端 art-template 渲染表格并分页展示。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID。来源=浏览器地址栏 query 参数（GetQueryString(\'shopId\')），用于指定要查询的店铺', required: true }),
    currPage: Flags.string({ description: '当前页码。首次加载固定为 1；翻页时取分页控件当前页（api.getCurrent()），每页固定 100 条', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorNotInShanghaiListingOfShop)

    const data = await this.client.get('/erpmonitor/erpmonitor/monitor/notInShanghaiListingOfShop', { params: {} })
    this.output(data)
  }
}
