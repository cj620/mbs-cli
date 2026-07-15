// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindOrderChineseRoseShop extends MBSCommand {
  static description = '月度店销报表(按订单时间)查询：月度店销报表页订单时间业绩维度查询：按平台、品类、客户经理、店铺、组员/大酋长/总监/主管、运营状态、月份、统计指标、公司、海外仓类型、店龄区间等筛选，返回echarts折线序列、动态时间表头及报表行数据。'

  static flags = {
    employeeType: Flags.string({ description: '业绩时间类型/人员类别。1=订单时间业绩;3=发货时间业绩(本接口=1)', required: true }),
    platformId: Flags.string({ description: '所属平台ID(取自#reserve11，值为PLATFORMID，空串=全部)' }),
    categoryNameList: Flags.string({ description: '品类名称列表(取自#categoryNameList，逗号拆分，未选为[]) (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客户经理(客服经理),多选逗号拼接(取自#custService，未选为空串)' }),
    shopName: Flags.string({ description: '店铺名称列表(取自selectdata.shop，空格连接后再拆分，未选为[]) (comma-separated)' }),
    employeeName: Flags.string({ description: '组员/店长列表(取自店长下拉selectdata.shopmanager) (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长/经理列表(取自经理下拉selectdata.manager，id集合) (comma-separated)' }),
    leaders: Flags.string({ description: '总监列表(取自总监下拉selectdata.leaders，id集合) (comma-separated)' }),
    littleLeaders: Flags.string({ description: '主管列表(取自主管下拉selectdata.littleLeaders，id集合) (comma-separated)' }),
    operateStatus: Flags.string({ description: '运营状态。1=运营中;2=暂停运营;3=永久关闭(默认1)' }),
    dateList: Flags.string({ description: '月份列表(取自#monthList，逗号拆分，未选为[]) (comma-separated)' }),
    monthType: Flags.string({ description: '统计指标类型(取自#shopTypes，逗号拆分):收入小计/利润/毛利率/订单量/退款金额/平台费/站内推广费 (comma-separated)' }),
    companyId: Flags.string({ description: '公司ID(取自#componey，值为companyid)' }),
    notFbaHwc: Flags.string({ description: '海外仓类型筛选。空=请选择;0=全部;1=真实海外仓;2=虚拟海外仓' }),
    opendaySmall: Flags.string({ description: '店龄(号龄)起始(下限)(取自#opendaySmall)' }),
    opendaysLarge: Flags.string({ description: '店龄(号龄)结束(上限)(取自#opendaysLarge)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindOrderChineseRoseShop)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/personSaleReport/findOrderChineseRoseShop', { "employeeType": flags.employeeType, "platformId": flags.platformId, "categoryNameList": toArray(flags.categoryNameList, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "leaders": toArray(flags.leaders, 'string'), "littleLeaders": toArray(flags.littleLeaders, 'string'), "operateStatus": flags.operateStatus, "dateList": toArray(flags.dateList, 'string'), "monthType": toArray(flags.monthType, 'string'), "companyId": flags.companyId, "notFbaHwc": flags.notFbaHwc, "opendaySmall": flags.opendaySmall, "opendaysLarge": flags.opendaysLarge })
    this.output(data)
  }
}
