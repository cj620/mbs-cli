// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindShopsTiktokRevisepriceConfirm extends MBSCommand {
  static description = 'TikTok提价-店铺列表查询（findShops）：TikTok改价（提价确认）页面查询店铺列表：按关键词(店铺名)与站点过滤，返回店铺名称/店铺ID列表；供搜索店铺名下拉(select2)、Element Plus 店铺多选框及选择店铺弹层复选列表使用；无参调用则返回全部店铺。'

  static flags = {
    keyword: Flags.string({ description: '店铺名搜索关键词。来源：Vue getShopNameList(query) 的入参 / select2 输入框 params.term；getAllShopList() 不传此参数(查全部)' }),
    site: Flags.string({ description: '站点(多选逗号拼接)。来源：站点选择器 .site-select 的选中值 join(\',\')；getAllShopList() 不传此参数' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindShopsTiktokRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/findShops', { "keyword": flags.keyword, "site": flags.site })
    this.output(data)
  }
}
