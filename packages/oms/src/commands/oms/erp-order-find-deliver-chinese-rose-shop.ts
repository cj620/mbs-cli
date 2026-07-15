// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDeliverChineseRoseShop extends MBSCommand {
  static description = '月度店销报表-发货时间业绩查询(findDeliverChineseRoseShop)：月度店销报表「发货时间业绩」维度查询：按人员类别、平台、品类、客户经理、组织架构(总监/经理/主管/店长)、店铺、月份、统计类型、公司、海外仓、店龄等条件筛选，返回 ECharts 折线图系列(series/x)、表头(title)与店铺明细行列表(saleReportList，含发货小计/利润/毛利率/运营毛利率/订单量/退款金额/平台费/站内推广费等分时段汇总)。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别/业绩时间类型。1=订单时间业绩;3=发货时间业绩(本接口由3触发)。来源 #orderStaus 下拉' }),
    platformId: Flags.string({ description: '所属平台ID(PLATFORMID)。来源 #reserve11 平台下拉,空串=全部' }),
    categoryNameList: Flags.string({ description: '品类名称列表。来源 #categoryNameList,多选品类名按逗号拆分为数组,未选为[] (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客户经理(多选,逗号拼接字符串),未选为空串。来源 #custService' }),
    shopName: Flags.string({ description: '店铺名称列表。来源 Vue shop,多店铺以空格分隔后拆为数组,未选为[] (comma-separated)' }),
    employeeName: Flags.string({ description: '组员/店长列表(店长姓名数组)。来源 Vue shopmanager (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长/经理列表(经理ID数组)。来源 Vue manager (comma-separated)' }),
    leaders: Flags.string({ description: '总监列表(总监ID数组)。来源 Vue leaders (comma-separated)' }),
    littleLeaders: Flags.string({ description: '主管列表(主管ID数组)。来源 Vue littleLeaders (comma-separated)' }),
    operateStatus: Flags.string({ description: '运营状态。1=运营中;2=暂停运营;3=永久关闭。来源 Vue operateStatus 下拉' }),
    dateList: Flags.string({ description: '月份列表(选中的年月,逗号拆分为数组),未选为[]。来源 #monthList (comma-separated)' }),
    monthType: Flags.string({ description: '统计类型列表(逗号拆分),未选为[]。可选:发货小计/利润/毛利率/运营毛利率/订单量/退款金额/平台费/站内推广费。来源 #shopTypes2 (comma-separated)' }),
    companyId: Flags.string({ description: '公司ID。来源 #componey 公司下拉' }),
    notFbaHwc: Flags.string({ description: '海外仓类型。空串=未选;0=全部;1=真实海外仓;2=虚拟海外仓。来源 #notFbaHwc' }),
    opendaySmall: Flags.string({ description: '店龄区间-起(天)。来源 #opendaySmall' }),
    opendaysLarge: Flags.string({ description: '店龄区间-止(天)。来源 #opendaysLarge' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDeliverChineseRoseShop)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/personSaleReport/findDeliverChineseRoseShop', { "employeeType": flags.employeeType, "platformId": flags.platformId, "categoryNameList": toArray(flags.categoryNameList, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "leaders": toArray(flags.leaders, 'string'), "littleLeaders": toArray(flags.littleLeaders, 'string'), "operateStatus": flags.operateStatus, "dateList": toArray(flags.dateList, 'string'), "monthType": toArray(flags.monthType, 'string'), "companyId": flags.companyId, "notFbaHwc": flags.notFbaHwc, "opendaySmall": flags.opendaySmall, "opendaysLarge": flags.opendaysLarge })
    this.output(data)
  }
}
