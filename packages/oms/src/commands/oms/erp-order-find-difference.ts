// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDifference extends MBSCommand {
  static description = '销售报表-差异费用明细查询(findDifference)：日订单时效/销售报表中点击某日某类费用金额时，按上一页报表查询条件(localStorage params)+当日日期 oneDay+费用类型 type 分页查询该费用对应的订单/批次费用明细列表。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别(取自报表页 #orderStaus；3=按店铺维度时才传 shopName；findDifference 中 employeeType!==\'4\' 用于站内推广费跳转判断)' }),
    startTime: Flags.string({ description: '统计起始日期(报表页 #time1)' }),
    endTime: Flags.string({ description: '统计结束日期(报表页 #time2)' }),
    platformIds: Flags.string({ description: '平台ID列表(报表页 #reserve11 多选，无选择时为[]；示例 10/138=SMT,16=wish,18=lazada) (comma-separated)' }),
    siteList: Flags.string({ description: '站点列表(报表页 #getSiteList) (comma-separated)' }),
    categoryNameList: Flags.string({ description: '品类列表(报表页品类选择 #show1 的 fs-label，未选为[]) (comma-separated)' }),
    categoryNameList2: Flags.string({ description: '二级品类列表(报表页 #CategoryList) (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客服经理(报表页 #custService 多选逗号拼接，未选为空串)' }),
    shopName: Flags.string({ description: '店铺(报表页 #shopList，仅 employeeType=3 且有输入时传，否则[]) (comma-separated)' }),
    employeeName: Flags.string({ description: '组员(报表页 #employeeList，未选为[]) (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长/店长大区(报表页 #shopManager，未选为[]) (comma-separated)' }),
    oneDay: Flags.string({ description: '当日日期(取自 URL 参数 oneDay，即点击的报表单日)', required: true }),
    type: Flags.string({ description: '费用类型(取自 URL 参数 type)。枚举:平台费/付款交易费/罚款/站内推广费/站外推广费/店铺成本', required: true }),
    pageSize: Flags.string({ description: '每页条数(findDifference.html 固定置 50)', required: true }),
    page: Flags.string({ description: '当前页码(首次查询固定 1，分页回调取 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDifference)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/findDifference', { "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "platformIds": toArray(flags.platformIds, 'string'), "siteList": toArray(flags.siteList, 'string'), "categoryNameList": toArray(flags.categoryNameList, 'string'), "categoryNameList2": toArray(flags.categoryNameList2, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "oneDay": flags.oneDay, "type": flags.type, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
