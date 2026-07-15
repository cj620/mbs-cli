// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelLastMonthAdvanceInfos extends MBSCommand {
  static description = 'eBay上月预收余额信息查询：eBay 平台「上月已收」页面的余额信息分页查询：按 ids、平台订单号、店铺名称、余额月份区间、公司等条件分页查询，返回订单金额/平台费/发货金额/账单退款/上月余额/余额等对账字段列表及总条数。'

  static flags = {
    shortBalanceMonth: Flags.string({ description: '余额月份-起始(格式 YYYY-MM)，来源余额月份范围选择器左值，默认当前时间前约90天' }),
    longBalanceMonth: Flags.string({ description: '余额月份-结束(格式 YYYY-MM)，来源余额月份范围选择器右值，默认当前月' }),
    shopName: Flags.string({ description: '店铺名称，来源店铺名称输入框' }),
    ids: Flags.string({ description: 'ids 集合，来源 ids 输入框按英文逗号拆分为字符串数组，空时为[] (comma-separated)' }),
    orderIds: Flags.string({ description: '平台订单号集合，来源平台订单号输入框按英文逗号拆分为字符串数组，空时为[] (comma-separated)' }),
    companyId: Flags.string({ description: '公司ID(所属公司)，来源公司下拉选择(选项来自 companyList)' }),
    pageSize: Flags.string({ description: '每页条数，来源分页组件，默认100，可选100/200/300/400', required: true }),
    page: Flags.string({ description: '当前页码，来源分页组件 current，搜索按钮固定传1', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelLastMonthAdvanceInfos)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinManageData/erpFinManageData/ebayFinance/parallelLastMonthAdvanceInfos', { "shortBalanceMonth": flags.shortBalanceMonth, "longBalanceMonth": flags.longBalanceMonth, "shopName": flags.shopName, "ids": toArray(flags.ids, 'string'), "orderIds": toArray(flags.orderIds, 'string'), "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
