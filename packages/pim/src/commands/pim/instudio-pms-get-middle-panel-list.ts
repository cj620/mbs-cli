// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetMiddlePanelList extends MBSCommand {
  static description = '获取中台数据列表：获取中台数据列表'

  static flags = {
    times: Flags.string({ description: '年月' }),
    platformName: Flags.string({ description: '平台名称' }),
    platformNameList: Flags.string({ description: '平台名称列表（字段名推断,语义待核实） (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长' }),
    teamNumber: Flags.string({ description: '组员' }),
    shopName: Flags.string({ description: '店铺名称' }),
    grade: Flags.integer({ description: '-1 差, 0一般, 1优秀' }),
    warningIndexs: Flags.string({ description: '警戒指标 选中, 显示对应指标触发警戒的, 如果选择多个 or的关系 (comma-separated)' }),
    shopManagers: Flags.string({ description: '店铺Managers（字段名推断,语义待核实） (comma-separated)' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    customerServiceList: Flags.string({ description: '客户服务列表（字段名推断,语义待核实） (comma-separated)' }),
    shopNameList: Flags.string({ description: '店铺名称列表（字段名推断,语义待核实） (comma-separated)' }),
    smallScore: Flags.integer({ description: 'Small评分（字段名推断,语义待核实）' }),
    bigScore: Flags.integer({ description: 'BIG评分（字段名推断,语义待核实）' }),
    shopManager: Flags.string({ description: '店铺管理（字段名推断,语义待核实）' }),
    chartType: Flags.string({ description: 'sales 销售额, profitAmount 毛利额, profitRate 毛利率, refundRate 退款率, stockoutRate 缺货率, cancellationRate 作废率' }),
    position: Flags.integer({ description: '0 组员 1 经理 2 总监 3 平台(换表)' }),
    operateStatus: Flags.integer({ description: '1 运营中 、2暂停运营、3永久关闭中' }),
    managerEmployeeList: Flags.string({ description: '管理员工列表（字段名推断,语义待核实） (comma-separated)' }),
    sqlList: Flags.string({ description: 'SQL列表（字段名推断,语义待核实） (comma-separated)' }),
    grades: Flags.string({ description: 'Grades（字段名推断,语义待核实） (comma-separated)' }),
    keyWord: Flags.string({ description: '键词（字段名推断,语义待核实）' }),
    keyWordList: Flags.string({ description: '键词列表（字段名推断,语义待核实） (comma-separated)' }),
    platformIds: Flags.string({ description: '平台ID列表（字段名推断,语义待核实） (comma-separated)' }),
    bigChiefList: Flags.string({ description: 'BIG主管列表（字段名推断,语义待核实） (comma-separated)' }),
    employeeList: Flags.string({ description: '员工列表（字段名推断,语义待核实） (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客户服务管理（字段名推断,语义待核实）' }),
    shopNames: Flags.string({ description: '店铺名称列表（字段名推断,语义待核实） (comma-separated)' }),
    lastTimes: Flags.string({ description: '最近次数（字段名推断,语义待核实）' }),
    directors: Flags.string({ description: '总监 (comma-separated)' }),
    managers: Flags.string({ description: '经理 (comma-separated)' }),
    shopManagerIds: Flags.string({ description: '店长id (comma-separated)' }),
    sites: Flags.string({ description: 'Sites（字段名推断,语义待核实） (comma-separated)' }),
    shopManagerStar: Flags.string({ description: '人员维度星级 (comma-separated)' }),
    tableName: Flags.string({ description: '表名称（字段名推断,语义待核实）' }),
    skuOperList: Flags.string({ description: 'SKU操作列表（字段名推断,语义待核实） (comma-separated)' }),
    openShopStartTime: Flags.string({ description: '开启店铺开始时间（字段名推断,语义待核实）' }),
    openShopEndTime: Flags.string({ description: '开启店铺结束时间（字段名推断,语义待核实）' }),
    qualifyTotalAmountFlag: Flags.integer({ description: 'Qualify总金额标志（字段名推断,语义待核实）' }),
    qualifyfhmaoliFlag: Flags.integer({ description: 'Qualifyfhmaoli标志（字段名推断,语义待核实）' }),
    firstMonthFlag: Flags.integer({ description: '首个月份标志（字段名推断,语义待核实）' }),
    submitStrategy: Flags.boolean({ description: 'true --> 已提交', allowNo: true }),
    shopModel: Flags.string({ description: '店铺模式' }),
    categoryId: Flags.string({ description: '店铺分类' }),
    companyId: Flags.string({ description: '公司id' }),
    companyIdSpecial: Flags.string({ description: '公司ID特殊（字段名推断,语义待核实）' }),
    companyIdEmp: Flags.string({ description: '公司下的人员 (comma-separated)' }),
    companyIdSpecialEmp: Flags.string({ description: '公司下的人员 (comma-separated)' }),
    categoryShopList: Flags.string({ description: '目前是在导出的时候会用到这个字段。 (comma-separated)' }),
    specialSumRanking: Flags.boolean({ description: '是否为 需要汇总的排行。。', allowNo: true }),
    exportTitleList: Flags.string({ description: '需要导出的标题头 (comma-separated)' }),
    exportTimeList: Flags.string({ description: '导出使用的时间字段 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetMiddlePanelList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/middlePanel/getMiddlePanelList', { "times": flags.times, "platformName": flags.platformName, "platformNameList": toArray(flags.platformNameList, 'string'), "bigChief": flags.bigChief, "teamNumber": flags.teamNumber, "shopName": flags.shopName, "grade": flags.grade, "warningIndexs": toArray(flags.warningIndexs, 'string'), "shopManagers": toArray(flags.shopManagers, 'string'), "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "customerServiceList": toArray(flags.customerServiceList, 'string'), "shopNameList": toArray(flags.shopNameList, 'string'), "smallScore": flags.smallScore, "bigScore": flags.bigScore, "shopManager": flags.shopManager, "chartType": flags.chartType, "position": flags.position, "operateStatus": flags.operateStatus, "managerEmployeeList": toArray(flags.managerEmployeeList, 'string'), "sqlList": toArray(flags.sqlList, 'string'), "grades": toArray(flags.grades, 'integer'), "keyWord": flags.keyWord, "keyWordList": toArray(flags.keyWordList, 'string'), "platformIds": toArray(flags.platformIds, 'string'), "bigChiefList": toArray(flags.bigChiefList, 'string'), "employeeList": toArray(flags.employeeList, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopNames": toArray(flags.shopNames, 'string'), "lastTimes": flags.lastTimes, "directors": toArray(flags.directors, 'string'), "managers": toArray(flags.managers, 'string'), "shopManagerIds": toArray(flags.shopManagerIds, 'string'), "sites": toArray(flags.sites, 'string'), "shopManagerStar": toArray(flags.shopManagerStar, 'string'), "tableName": flags.tableName, "skuOperList": toArray(flags.skuOperList, 'string'), "openShopStartTime": flags.openShopStartTime, "openShopEndTime": flags.openShopEndTime, "qualifyTotalAmountFlag": flags.qualifyTotalAmountFlag, "qualifyfhmaoliFlag": flags.qualifyfhmaoliFlag, "firstMonthFlag": flags.firstMonthFlag, "submitStrategy": flags.submitStrategy, "shopModel": flags.shopModel, "categoryId": flags.categoryId, "companyId": flags.companyId, "companyIdSpecial": flags.companyIdSpecial, "companyIdEmp": toArray(flags.companyIdEmp, 'string'), "companyIdSpecialEmp": toArray(flags.companyIdSpecialEmp, 'string'), "categoryShopList": toArray(flags.categoryShopList, 'string'), "specialSumRanking": flags.specialSumRanking, "exportTitleList": toArray(flags.exportTitleList, 'string'), "exportTimeList": toArray(flags.exportTimeList, 'string') })
    this.output(data)
  }
}
