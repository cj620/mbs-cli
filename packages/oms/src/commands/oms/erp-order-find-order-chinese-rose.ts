// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindOrderChineseRose extends MBSCommand {
  static description = '人销售报表(订单时间业绩)曲线查询：按订单时间维度统计人员/团队销售业绩：依据人员类别、平台、品类、大酋长、组员、月份、指标类型等条件查询，返回 ECharts 曲线数据(x轴/series)、表头(title)及报表明细列表(saleReportList，含收入小计/利润/毛利率/订单量/退款金额/平台费/站内推广费/单包裹利润等分时段指标)。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别/统计维度(来源#orderStaus)。2=订单时间业绩(本接口),4=发货时间业绩', required: true }),
    platformId: Flags.string({ description: '所属平台ID(来源#reserve11，取PLATFORMID，全部时为空串)' }),
    categoryNameList: Flags.string({ description: '品类名称列表(来源#categoryNameList，无选择传[]) (comma-separated)' }),
    employeeName: Flags.string({ description: '组员(员工姓名)列表(来源#employeeList，无选择传[]) (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长(团队负责人)ID列表(来源#shopManager，无选择传[]) (comma-separated)' }),
    dateList: Flags.string({ description: '月份列表(来源#monthList逗号串split，无选择传[]) (comma-separated)' }),
    monthType: Flags.string({ description: '指标(展示列)类型列表(来源#shopTypes)。枚举:收入小计/利润/单包裹利润/毛利率/订单量/退款金额/平台费/站内推广费 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindOrderChineseRose)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/personSaleReport/findOrderChineseRose', { "employeeType": flags.employeeType, "platformId": flags.platformId, "categoryNameList": toArray(flags.categoryNameList, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "dateList": toArray(flags.dateList, 'string'), "monthType": toArray(flags.monthType, 'string') })
    this.output(data)
  }
}
