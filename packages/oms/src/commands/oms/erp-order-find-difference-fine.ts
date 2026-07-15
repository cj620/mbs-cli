// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDifferenceFine extends MBSCommand {
  static description = '销售报表-罚款差异明细查询：日销售报表费用差异下钻：平台含Wish(16)且费用类型为罚款时，按报表搜索条件+指定日期分页查询罚款明细。'

  static flags = {
    employeeType: Flags.string({ description: '统计/员工维度类型(来源 dateType)' }),
    startTime: Flags.string({ description: '统计开始时间(yyyy-MM-dd)' }),
    endTime: Flags.string({ description: '统计结束时间(yyyy-MM-dd)' }),
    openBeginTime: Flags.string({ description: '开店时间-起始 (待人工确认)' }),
    openEndTime: Flags.string({ description: '开店时间-结束 (待人工确认)' }),
    platformIds: Flags.string({ description: '平台ID列表(eBay=\'1\'；含\'16\'=Wish 且 type==\'罚款\' 时才调用本接口) (comma-separated)', required: true }),
    companyIdList: Flags.string({ description: '公司ID列表(默认[]) (comma-separated)' }),
    siteList: Flags.string({ description: '站点列表 (comma-separated)' }),
    categoryNameList: Flags.string({ description: '一级分类名称列表 (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客服主管(多选逗号拼接)' }),
    shopName: Flags.string({ description: '店铺名称列表(空格拆分) (comma-separated)' }),
    employeeName: Flags.string({ description: '员工/店长姓名(来源 shopmanager)' }),
    bigChief: Flags.string({ description: '大主管(来源 manager)' }),
    notFbaHwc: Flags.string({ description: '订单类型筛选(是否非FBA海外仓)(待人工确认)' }),
    categoryNameList2: Flags.string({ description: '二级分类名称列表 (comma-separated)' }),
    littleLeaders: Flags.string({ description: '小组长 (comma-separated)' }),
    leaders: Flags.string({ description: '组长(来源 leader) (comma-separated)' }),
    operateStatus: Flags.string({ description: '运营状态' }),
    whiteList: Flags.string({ description: '白名单(来源 whitelist)' }),
    groupCompanyId: Flags.string({ description: '集团公司ID(仅 headCompany 存在时追加)' }),
    managers: Flags.string({ description: '经理/总管(type==\'ship\' 时追加,来源 manager)' }),
    shopManagers: Flags.string({ description: '店长(type==\'ship\' 时追加,来源 shopmanager)' }),
    credits2: Flags.string({ description: '信用/账期筛选(待人工确认)' }),
    orderTypes: Flags.string({ description: '订单类型集合 (comma-separated)' }),
    oneDay: Flags.string({ description: '指定单日(URL 参数 oneDay,本页追加)', required: true }),
    type: Flags.string({ description: '费用类型(URL 参数 type,本接口对应\'罚款\')', required: true }),
    pageSize: Flags.string({ description: '每页条数(本页固定 50)', required: true }),
    page: Flags.string({ description: '当前页码(首查=1,分页回调取 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDifferenceFine)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/findDifferenceFine', { "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "openBeginTime": flags.openBeginTime, "openEndTime": flags.openEndTime, "platformIds": toArray(flags.platformIds, 'string'), "companyIdList": toArray(flags.companyIdList, 'string'), "siteList": toArray(flags.siteList, 'string'), "categoryNameList": toArray(flags.categoryNameList, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": flags.employeeName, "bigChief": flags.bigChief, "notFbaHwc": flags.notFbaHwc, "categoryNameList2": toArray(flags.categoryNameList2, 'string'), "littleLeaders": toArray(flags.littleLeaders, 'string'), "leaders": toArray(flags.leaders, 'string'), "operateStatus": flags.operateStatus, "whiteList": flags.whiteList, "groupCompanyId": flags.groupCompanyId, "managers": flags.managers, "shopManagers": flags.shopManagers, "credits2": flags.credits2, "orderTypes": toArray(flags.orderTypes, 'string'), "oneDay": flags.oneDay, "type": flags.type, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
