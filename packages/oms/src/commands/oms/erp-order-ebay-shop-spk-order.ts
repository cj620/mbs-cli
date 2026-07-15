// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderEbayShopSpkOrder extends MBSCommand {
  static description = 'eBay店铺SPK发货比例(周报)查询：按店铺/店铺负责人/国家及周次维度，分页查询 eBay 店铺一周(周日~周六)每天的「符合SPK考核范围订单数 / 客户自选SPK订单数 / 自选并匹配SPK订单数 / 符合且自选且匹配SPK订单数」，并返回考核范围内实际发SPK比例与自选SPK实际发SPK比例；支持上一周/下一周翻页。'

  static flags = {
    page: Flags.string({ description: '当前页码。search() 固定传 1；分页回调传 api.getCurrent()。来源：分页控件', required: true }),
    shopId: Flags.string({ description: '店铺ID(多选逗号拼接)。来源控件：#shopName 店铺多选下拉(选项 value=SHOPID)' }),
    shopManager: Flags.string({ description: '店铺负责人/店长(多选逗号拼接)。来源控件：#commodity 店铺负责人多选下拉(选项 value=oper.name)' }),
    country: Flags.string({ description: '国家(多选逗号拼接)。来源控件：#countrys 国家多选下拉' }),
    week: Flags.string({ description: '周次标识。空字符串=本周；翻「上一周」时取上次响应 obj.lastWeek 值(#lastWeek)；翻「下一周」时取 obj.nextWeek 值(#nextWeek)。来源控件：上一周/下一周按钮' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderEbayShopSpkOrder)

    const data = await this.client.post('/erpOrder/erpOrder/ebayShopSpkRate/ebayShopSpkOrder', { "page": flags.page, "shopId": flags.shopId, "shopManager": flags.shopManager, "country": flags.country, "week": flags.week })
    this.output(data)
  }
}
