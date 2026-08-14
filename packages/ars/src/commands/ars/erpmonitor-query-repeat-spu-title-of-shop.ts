// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorQueryRepeatSpuTitleOfShop extends MBSCommand {
  static description = '店铺重复SPU标题查询：按店铺分页查询该店铺下存在重复标题/重复铺货的 SPU 列表：返回店铺名、主图、ERP SPU、重复数、上架时间、标题、商品链接等，并携带总条数与总页数用于分页。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID，指定要查询重复SPU标题的店铺(来源页面URL查询串 GetQueryString(\'shopId\'))', required: true }),
    currPage: Flags.string({ description: '当前页码，首次请求固定为 1，翻页由分页控件 api.getCurrent() 传入(每页100条)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorQueryRepeatSpuTitleOfShop)

    const data = await this.client.get('/erpmonitor/erpmonitor/monitor/queryRepeatSpuTitleOfShop', { params: { "shopId": flags.shopId, "currPage": flags.currPage } })
    this.output(data)
  }
}
