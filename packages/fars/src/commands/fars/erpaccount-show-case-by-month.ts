// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountShowCaseByMonth extends MBSCommand {
  static description = 'Case按月统计(按所属订单月份归类)：仪表盘经理明细页：按搜索类型(物流方式/国家/订单月份/店铺/马帮SKU)与时间区间统计 case 数。页面 search() 用同一组参数发起两次 POST：第一次绘制 ECharts 柱状图(月份-case数)，第二次渲染明细表(月份/case数/case数按订单月份归类占比)。本页固定为按所属订单月份搜索(filterType=5)。'

  static flags = {
    casetimeend: Flags.string({ description: 'case 统计结束时间(结束月份)，来源控件 #casetimeend(type=date)；search() 内重置为当前日期 getNowFormatDate()，格式 YYYY-MM-DD' }),
    casetimestart: Flags.string({ description: 'case 统计起始时间(开始月份)，来源控件 #casetimestart(type=date)；search() 内重置为结束日期前一个月 getBeforeMonth(date)，格式 YYYY-MM-DD' }),
    country: Flags.string({ description: '国家，来源控件 #country(本页 DOM 中无该控件，取值通常为空；按国家搜索时使用)(待人工确认)' }),
    detailCase: Flags.string({ description: '明细 case 标识，固定传 1(表示获取按月明细数据)', required: true }),
    filterType: Flags.string({ description: '搜索类型(过滤维度)，来源控件 #filterType。枚举：1=按物流方式搜索;0=按国家搜索;5=按所属订单月份搜索(本页默认/固定);2=按店铺搜索;3=按马帮SKU搜索。值≠5 时跳转 managerdetail.html' }),
    shoptype: Flags.string({ description: '店铺类型/店铺，来源控件 #shoptype(本页 DOM 中无该控件，取值通常为空；按店铺搜索时使用)(待人工确认)' }),
    productid: Flags.string({ description: '马帮SKU/产品ID，来源控件 #productid(本页 DOM 中无该控件，取值通常为空；按马帮SKU搜索时使用)(待人工确认)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountShowCaseByMonth)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/showCaseByMonth', { "casetimeend": flags.casetimeend, "casetimestart": flags.casetimestart, "country": flags.country, "detailCase": flags.detailCase, "filterType": flags.filterType, "shoptype": flags.shoptype, "productid": flags.productid })
    this.output(data)
  }
}
