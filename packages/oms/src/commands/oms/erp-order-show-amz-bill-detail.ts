// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowAmzBillDetail extends MBSCommand {
  static description = '亚马逊平台费账单明细查询：销售业绩报表中点击某日「平台费」(发货时间业绩 + 平台=Amazon)下钻，按账单日期分页查询亚马逊平台费账单明细，返回店铺/币种/费用金额/费用类型/订单号/SKU/出账时间等明细行及总条数。'

  static flags = {
    employeeType: Flags.string({ description: '业绩(日期)类型。1=订单时间业绩;3=发货时间业绩(本下钻入口固定为3)。来源:日期类型下拉(dateType)' }),
    startTime: Flags.string({ description: '开始时间(yyyy-MM-dd)。来源:开始时间日期选择器' }),
    endTime: Flags.string({ description: '结束时间(yyyy-MM-dd)。来源:结束时间日期选择器' }),
    openBeginTime: Flags.string({ description: '店龄-起始(单位:天)。来源:店龄起始输入框' }),
    openEndTime: Flags.string({ description: '店龄-结束(单位:天)。来源:店龄结束输入框' }),
    platformIds: Flags.string({ description: '平台ID列表。在 amzdetail.vue 中被强制覆盖为 [2](Amazon)。来源:平台多选(pingtai) (comma-separated)', required: true }),
    companyIdList: Flags.string({ description: '地区/公司ID列表。来源:公司(地区)多选下拉(company) (comma-separated)' }),
    siteList: Flags.string({ description: '站点列表。来源:站点多选下拉(zhandian) (comma-separated)' }),
    categoryNameList: Flags.string({ description: '一级类目名称列表(仅 employeeType=3 显示)。来源:一级类目多选(firstCategory) (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客户经理(多选逗号拼接)。来源:客户经理多选(jl)' }),
    shopName: Flags.string({ description: '店铺名称列表(多个以空格分隔后拆分)。来源:店铺多选/可输入(shop) (comma-separated)' }),
    employeeName: Flags.string({ description: '店长(取 shopmanager)。来源:店长多选下拉 (comma-separated)' }),
    bigChief: Flags.string({ description: '经理(取 manager)。来源:经理多选下拉 (comma-separated)' }),
    notFbaHwc: Flags.string({ description: '海外仓类型(仅 employeeType=1 显示)。0=海外仓;1=真实海外仓;2=虚拟海外仓;3=直销。来源:海外仓类型下拉(ordertype)' }),
    categoryNameList2: Flags.string({ description: '二级类目名称列表(仅 employeeType=3 显示)。来源:二级类目多选(secondCategory) (comma-separated)' }),
    littleLeaders: Flags.string({ description: '主管。来源:主管多选下拉(littleLeaders) (comma-separated)' }),
    leaders: Flags.string({ description: '总监。来源:总监多选下拉(leader) (comma-separated)' }),
    operateStatus: Flags.string({ description: '运营状态。1=运营中;2=暂停运营;3=永久关闭中。来源:运营状态下拉(operateStatus)' }),
    whiteList: Flags.boolean({ description: '是否白名单。true=是;false=否。来源:是否白名单下拉(whitelist)', allowNo: true }),
    groupCompanyId: Flags.string({ description: '集团/总公司ID(仅当选择了总公司 headCompany 时才写入)。来源:公司(总公司)下拉' }),
    managers: Flags.string({ description: '经理(ship 类型补充，取 manager，与 bigChief 同源) (comma-separated)' }),
    shopManagers: Flags.string({ description: '店长(ship 类型补充，取 shopmanager，与 employeeName 同源) (comma-separated)' }),
    currentdate: Flags.string({ description: '账单日期。来源:route.query.day(上级业绩页点击某日「平台费」传入)', required: true }),
    page: Flags.string({ description: '当前页码(分页组件 current-change，默认 1，每页 100 条)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowAmzBillDetail)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/showAmzBillDetail', { "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "openBeginTime": flags.openBeginTime, "openEndTime": flags.openEndTime, "platformIds": toArray(flags.platformIds, 'string'), "companyIdList": toArray(flags.companyIdList, 'string'), "siteList": toArray(flags.siteList, 'string'), "categoryNameList": toArray(flags.categoryNameList, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "notFbaHwc": flags.notFbaHwc, "categoryNameList2": toArray(flags.categoryNameList2, 'string'), "littleLeaders": toArray(flags.littleLeaders, 'string'), "leaders": toArray(flags.leaders, 'string'), "operateStatus": flags.operateStatus, "whiteList": flags.whiteList, "groupCompanyId": flags.groupCompanyId, "managers": toArray(flags.managers, 'string'), "shopManagers": toArray(flags.shopManagers, 'string'), "currentdate": flags.currentdate, "page": flags.page })
    this.output(data)
  }
}
