// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderExportChineseRoses extends MBSCommand {
  static description = '月度店销报表导出：导出「月度店销报表」。按人员类别(订单时间业绩/发货时间业绩)、平台、品类、客户经理、总监/大酋长/组员、店铺、年月、展示指标类型、公司、海外仓类型、店龄区间等条件，导出 Excel(.xls) 文件流；无数据或异常时返回 JSON 提示。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别/业绩口径。1=订单时间业绩;3=发货时间业绩。来源下拉 #orderStaus', required: true }),
    startTime: Flags.string({ description: '起始日期(YYYY-MM-DD)。来源 #time1(该输入框在页面中已注释，实际多为空)' }),
    endTime: Flags.string({ description: '结束日期(YYYY-MM-DD)。来源 #time2(该输入框在页面中已注释，实际多为空)' }),
    platformId: Flags.string({ description: '所属平台ID。来源平台下拉 #reserve11(取值为 PLATFORMID，全部=空)' }),
    categoryNameList: Flags.string({ description: '品类名称列表。来源 #categoryNameList 多选，按逗号拆分为数组；未选时传 [] (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客户经理(多选，逗号拼接字符串)。来源 #custService；未选时传 ""' }),
    shopName: Flags.string({ description: '店铺名称列表。来源 Vue shop，以空格拆分为数组；未选时传 [] (comma-separated)' }),
    employeeName: Flags.string({ description: '店长/组员列表(店长名称)。来源 Vue shopmanager (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长/经理列表(经理ID)。来源 Vue manager (comma-separated)' }),
    leaders: Flags.string({ description: '总监列表(总监ID)。来源 Vue leaders (comma-separated)' }),
    dateList: Flags.string({ description: '年月列表(如 2024-01)。来源 #monthList 月份多选，按逗号拆分；未选时传 [] (comma-separated)' }),
    monthType: Flags.string({ description: '展示指标类型列表。employeeType=1 取自 #shopTypes(收入小计/利润/毛利率/订单量/退款金额/平台费/站内推广费)；employeeType=3 取自 #shopTypes2(发货小计/利润/毛利率/运营毛利率/订单量/退款金额/平台费/站内推广费)；未选时传 [] (comma-separated)' }),
    companyId: Flags.string({ description: '公司ID。来源公司下拉 #componey(companyid)' }),
    notFbaHwc: Flags.string({ description: '海外仓类型。""=请选择;0=全部;1=真实海外仓;2=虚拟海外仓。来源 #notFbaHwc' }),
    opendaySmall: Flags.string({ description: '店龄(店铺天数)区间-起始。来源 #opendaySmall' }),
    opendaysLarge: Flags.string({ description: '店龄(店铺天数)区间-结束。来源 #opendaysLarge' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderExportChineseRoses)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/personSaleReport/exportChineseRoses', { "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "platformId": flags.platformId, "categoryNameList": toArray(flags.categoryNameList, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "leaders": toArray(flags.leaders, 'string'), "dateList": toArray(flags.dateList, 'string'), "monthType": toArray(flags.monthType, 'string'), "companyId": flags.companyId, "notFbaHwc": flags.notFbaHwc, "opendaySmall": flags.opendaySmall, "opendaysLarge": flags.opendaysLarge })
    this.output(data)
  }
}
