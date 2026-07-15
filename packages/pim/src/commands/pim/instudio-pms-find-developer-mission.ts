// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindDeveloperMission extends MBSCommand {
  static description = '开发池列表查询：开发池列表查询'

  static flags = {
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    rejectType: Flags.string({ description: '拒绝类型： 1：一审拒绝，2： 二审拒绝' }),
    totalSaleCountMin: Flags.string({ description: '总销量范围最小值' }),
    totalSaleCountMax: Flags.string({ description: '总销量范围最大值' }),
    onlineDateStart: Flags.string({ description: '上架上架开始时间' }),
    onlineDateEnd: Flags.string({ description: '上架上架结束时间' }),
    categoryOne: Flags.string({ description: '一级分类' }),
    categoryTwo: Flags.string({ description: '二级分类' }),
    sevenSaleCountMin: Flags.string({ description: '7天销量范围最小值' }),
    sevenSaleCountMax: Flags.string({ description: '7天销量范围最大值' }),
    salePriceUsdMin: Flags.string({ description: '售价范围最小值' }),
    salePriceUsdMax: Flags.string({ description: '售价范围最大值' }),
    productKeyword: Flags.string({ description: '商品关键字' }),
    flag: Flags.string({ description: '1 我的; 2 最新；3 公共池 4 回收站' }),
    developer: Flags.string({ description: '开发员' }),
    auditor: Flags.string({ description: '审核人' }),
    orderBy: Flags.string({ description: '排序字段' }),
    developerStatus: Flags.string({ description: '开发状态(1 未提交; 2 已开发; 3 已放弃; 4 待审核；5 审核通过; 6 审核不通过)' }),
    isPush: Flags.boolean({ description: 'true 销售推送的', allowNo: true }),
    createDateStart: Flags.string({ description: '创建开始时间' }),
    createeDateEnd: Flags.string({ description: '创建结束时间' }),
    developerCon: Flags.string({ description: '开发员搜索专用' }),
    recommendSource: Flags.string({ description: '推荐来源' }),
    pushName: Flags.string({ description: '反推人名' }),
    developType: Flags.string({ description: 'Develop类型（字段名推断,语义待核实）' }),
    exportFlag: Flags.string({ description: '导出标志（字段名推断,语义待核实）' }),
    developList: Flags.string({ description: 'Develop列表（字段名推断,语义待核实） (comma-separated)' }),
    managerEmpList: Flags.string({ description: '管理EMP列表（字段名推断,语义待核实） (comma-separated)' }),
    bigChief: Flags.integer({ description: 'BIG主管（字段名推断,语义待核实）' }),
    claimSaler: Flags.string({ description: 'ClaimSaler（字段名推断,语义待核实）' }),
    oper: Flags.string({ description: '操作（字段名推断,语义待核实）' }),
    devTeam: Flags.string({ description: 'DEV团队（字段名推断,语义待核实） (comma-separated)' }),
    depart: Flags.string({ description: 'Depart（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    tabValue: Flags.integer({ description: '1:所有 2:采样待审核 3:采样审核通过 4:未认领 5:已认领6:采样未付款' }),
    companyid: Flags.integer({ description: '地区ID' }),
    develops: Flags.string({ description: 'Develops（字段名推断,语义待核实） (comma-separated)' }),
    managerCatgegorys: Flags.string({ description: '管理Catgegorys（字段名推断,语义待核实） (comma-separated)' }),
    teamId: Flags.string({ description: '小组id' }),
    developerList: Flags.string({ description: '小组开发人员list (comma-separated)' }),
    productNature: Flags.integer({ description: '产品性质:1自建 0:跟卖' }),
    auditName1: Flags.string({ description: '一审人' }),
    auditName2: Flags.string({ description: '二审人' }),
    messionId: Flags.string({ description: 'messionId' }),
    auditDateTimeBegin: Flags.string({ description: '二审审核开始时间' }),
    auditDateTimeEnd: Flags.string({ description: '二审审核结束时间' }),
    messionIdList: Flags.string({ description: 'MessionID列表（字段名推断,语义待核实） (comma-separated)' }),
    productAttribute: Flags.string({ description: '商品属性' }),
    applicablePlatform: Flags.string({ description: '适用平台' }),
    managerName: Flags.string({ description: '经理名称' }),
    applicablePlatformName: Flags.string({ description: '适用平台名称' }),
    audit: Flags.string({ description: '待1审是1 待二审是2' }),
    developTypeTaskPool: Flags.integer({ description: '开发任务池,开发类型' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindDeveloperMission)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/developerMission/findDeveloperMission', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "rejectType": flags.rejectType, "totalSaleCountMin": flags.totalSaleCountMin, "totalSaleCountMax": flags.totalSaleCountMax, "onlineDateStart": flags.onlineDateStart, "onlineDateEnd": flags.onlineDateEnd, "categoryOne": flags.categoryOne, "categoryTwo": flags.categoryTwo, "sevenSaleCountMin": flags.sevenSaleCountMin, "sevenSaleCountMax": flags.sevenSaleCountMax, "salePriceUsdMin": flags.salePriceUsdMin, "salePriceUsdMax": flags.salePriceUsdMax, "productKeyword": flags.productKeyword, "flag": flags.flag, "developer": flags.developer, "auditor": flags.auditor, "orderBy": flags.orderBy, "developerStatus": flags.developerStatus, "isPush": flags.isPush, "createDateStart": flags.createDateStart, "createeDateEnd": flags.createeDateEnd, "developerCon": flags.developerCon, "recommendSource": flags.recommendSource, "pushName": flags.pushName, "developType": flags.developType, "exportFlag": flags.exportFlag, "developList": toArray(flags.developList, 'string'), "managerEmpList": toArray(flags.managerEmpList, 'string'), "bigChief": flags.bigChief, "claimSaler": flags.claimSaler, "oper": flags.oper, "devTeam": toArray(flags.devTeam, 'string'), "depart": flags.depart, "spu": flags.spu, "tabValue": flags.tabValue, "companyid": flags.companyid, "develops": toArray(flags.develops, 'string'), "managerCatgegorys": toArray(flags.managerCatgegorys, 'string'), "teamId": flags.teamId, "developerList": toArray(flags.developerList, 'string'), "productNature": flags.productNature, "auditName1": flags.auditName1, "auditName2": flags.auditName2, "messionId": flags.messionId, "auditDateTimeBegin": flags.auditDateTimeBegin, "auditDateTimeEnd": flags.auditDateTimeEnd, "messionIdList": toArray(flags.messionIdList, 'string'), "productAttribute": flags.productAttribute, "applicablePlatform": flags.applicablePlatform, "managerName": flags.managerName, "applicablePlatformName": flags.applicablePlatformName, "audit": flags.audit, "developTypeTaskPool": flags.developTypeTaskPool, "spuList": toArray(flags.spuList, 'string') })
    this.output(data)
  }
}
