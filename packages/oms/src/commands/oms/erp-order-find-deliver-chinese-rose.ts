// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDeliverChineseRose extends MBSCommand {
  static description = '人员发货时间业绩报表查询：按发货时间维度统计人员（大酋长/组员）销售业绩，支持平台、品类、组员、大酋长、月份、统计类型等多维筛选；返回 ECharts 折线图序列（series + x 轴）、表头标题对象（title）及报表行列表（saleReportList），用于发货时间业绩页表格与图表渲染。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别/业绩类型。来源下拉 #orderStaus。2=订单时间业绩；4=发货时间业绩（本页调用本接口时为 4）', required: true }),
    platformId: Flags.string({ description: '所属平台ID。来源下拉 #reserve11（数据来自 getPlatformList），空字符串=全部平台' }),
    categoryNameList: Flags.string({ description: '品类名称列表。来源 #categoryNameList 多选输入（逗号拼接后 split 为数组），未选时为 [] (comma-separated)' }),
    employeeName: Flags.string({ description: '组员（员工姓名）列表。来源多选 #employeeList，未选时为 [] (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长（店长/团队负责人）列表。来源多选 #shopManager，未选时为 [] (comma-separated)' }),
    dateList: Flags.string({ description: '月份列表（年月）。来源 #monthList（按逗号 split），未选时为 [] (comma-separated)' }),
    monthType: Flags.string({ description: '统计指标类型列表。来源多选 #shopTypes2（按逗号 split），取值：发货小计/利润/单包裹利润/毛利率/运营毛利率/退款金额/平台费/站内推广费；未选时为 [] (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDeliverChineseRose)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/personSaleReport/findDeliverChineseRose', { "employeeType": flags.employeeType, "platformId": flags.platformId, "categoryNameList": toArray(flags.categoryNameList, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "dateList": toArray(flags.dateList, 'string'), "monthType": toArray(flags.monthType, 'string') })
    this.output(data)
  }
}
