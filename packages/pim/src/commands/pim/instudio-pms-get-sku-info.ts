// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSkuInfo extends MBSCommand {
  static description = '查询SKU信息：查询SKU信息(源码无注释,按方法名推断)'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    projectId: Flags.integer({ description: '项目ID（字段名推断,语义待核实）' }),
    code: Flags.string({ description: '编码（字段名推断,语义待核实）' }),
    name: Flags.string({ description: '名称（字段名推断,语义待核实）' }),
    logisticsType: Flags.integer({ description: '物流类型（字段名推断,语义待核实）' }),
    wareHouseType: Flags.integer({ description: 'WAREHouse类型（字段名推断,语义待核实）' }),
    nowScheduleType: Flags.integer({ description: 'NOW定时类型（字段名推断,语义待核实）' }),
    nowSchedule: Flags.string({ description: 'NOW定时（字段名推断,语义待核实）' }),
    nextSchedule: Flags.string({ description: '下一个定时（字段名推断,语义待核实）' }),
    budgeSkuCnt: Flags.integer({ description: 'BudgeSKUCNT（字段名推断,语义待核实）' }),
    budgetSkuCnt: Flags.string({ description: '预算SKUCNT（字段名推断,语义待核实）' }),
    skuCnt: Flags.integer({ description: 'SKUCNT（字段名推断,语义待核实）' }),
    budgeAmount: Flags.string({ description: 'Budge金额（字段名推断,语义待核实）' }),
    budgetAmount: Flags.string({ description: '预算金额（字段名推断,语义待核实）' }),
    lastAmount: Flags.string({ description: '最近金额（字段名推断,语义待核实）' }),
    budgeWeight: Flags.integer({ description: 'Budge重量（字段名推断,语义待核实）' }),
    budgetWeight: Flags.string({ description: '预算重量（字段名推断,语义待核实）' }),
    totalWeight: Flags.integer({ description: '总重量（字段名推断,语义待核实）' }),
    startTime: Flags.string({ description: '开始时间（字段名推断,语义待核实）' }),
    endTime: Flags.string({ description: '结束时间（字段名推断,语义待核实）' }),
    realEndTime: Flags.string({ description: '实际结束时间（字段名推断,语义待核实）' }),
    realEndTimeUnix: Flags.integer({ description: '实际结束时间UNIX（字段名推断,语义待核实）' }),
    isFinished: Flags.integer({ description: '是否Finished（字段名推断,语义待核实）' }),
    deliveryTime: Flags.string({ description: '配送时间（字段名推断,语义待核实）' }),
    publishTime: Flags.string({ description: '刊登时间（字段名推断,语义待核实）' }),
    dateCode: Flags.string({ description: '日期编码（字段名推断,语义待核实）' }),
    timeCreated: Flags.string({ description: '时间创建（字段名推断,语义待核实）' }),
    selectProductEndOpId: Flags.integer({ description: '查询商品结束OPID（字段名推断,语义待核实）' }),
    selectProductEndOpName: Flags.string({ description: '查询商品结束OP名称（字段名推断,语义待核实）' }),
    selectProductEndTime: Flags.string({ description: '查询商品结束时间（字段名推断,语义待核实）' }),
    remark: Flags.string({ description: '备注（字段名推断,语义待核实）' }),
    packageRemark: Flags.string({ description: '包裹备注（字段名推断,语义待核实）' }),
    receiveInfo: Flags.string({ description: '收货信息（字段名推断,语义待核实）' }),
    extend: Flags.string({ description: 'Extend（字段名推断,语义待核实）' }),
    dateCodeNumber: Flags.integer({ description: '日期编码编号（字段名推断,语义待核实）' }),
    opUserId: Flags.string({ description: 'OP用户ID（字段名推断,语义待核实）' }),
    opUserName: Flags.string({ description: 'OP用户名称（字段名推断,语义待核实）' }),
    skuList: Flags.string({ description: 'SKU列表（字段名推断,语义待核实） (comma-separated)' }),
    addProductCntStr: Flags.string({ description: '新增商品CNT字符串（字段名推断,语义待核实）' }),
    skuStr: Flags.string({ description: 'SKU字符串（字段名推断,语义待核实）' }),
    taskPurchaseType: Flags.integer({ description: '任务采购类型（字段名推断,语义待核实）' }),
    createby: Flags.string({ description: 'Createby（字段名推断,语义待核实）' }),
    orderId: Flags.string({ description: '订单ID（字段名推断,语义待核实）' }),
    waitAuditSkuCnt: Flags.integer({ description: 'WAIT审核SKUCNT（字段名推断,语义待核实）' }),
    warehouseTypeText: Flags.string({ description: '仓库类型文本（字段名推断,语义待核实）' }),
    logisticsTypeText: Flags.string({ description: '物流类型文本（字段名推断,语义待核实）' }),
    outStockCount: Flags.integer({ description: '出库库存数量（字段名推断,语义待核实）' }),
    warehouseType: Flags.string({ description: '仓库类型（字段名推断,语义待核实）' }),
    paohuoRate: Flags.string({ description: 'Paohuo比率（字段名推断,语义待核实）' }),
    startTimeFormat: Flags.string({ description: '开始时间格式（字段名推断,语义待核实）' }),
    deliveryTimeFormat: Flags.string({ description: '配送时间格式（字段名推断,语义待核实）' }),
    publishTimeFormat: Flags.string({ description: '刊登时间格式（字段名推断,语义待核实）' }),
    expressFee: Flags.string({ description: '快递费用（字段名推断,语义待核实）' }),
    orderIdList: Flags.string({ description: '订单ID列表（字段名推断,语义待核实） (comma-separated)' }),
    taskCode: Flags.string({ description: '任务编码（字段名推断,语义待核实）' }),
    isSelectProductEnd: Flags.integer({ description: '是否查询商品结束（字段名推断,语义待核实）' }),
    verifyStatus: Flags.string({ description: '验证状态（字段名推断,语义待核实）' }),
    verifyTime: Flags.string({ description: '验证时间（字段名推断,语义待核实）' }),
    verifyFaliedReason: Flags.string({ description: '验证Falied原因（字段名推断,语义待核实）' }),
    resultStatus: Flags.string({ description: '结果状态（字段名推断,语义待核实）' }),
    warehouseTypeId: Flags.integer({ description: '仓库类型ID（字段名推断,语义待核实）' }),
    orderInfoList: Flags.string({ description: '订单信息列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSkuInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/hwcDevelopmentProject/getSkuInfo', { "id": flags.id, "projectId": flags.projectId, "code": flags.code, "name": flags.name, "logisticsType": flags.logisticsType, "wareHouseType": flags.wareHouseType, "nowScheduleType": flags.nowScheduleType, "nowSchedule": flags.nowSchedule, "nextSchedule": flags.nextSchedule, "budgeSkuCnt": flags.budgeSkuCnt, "budgetSkuCnt": flags.budgetSkuCnt, "skuCnt": flags.skuCnt, "budgeAmount": flags.budgeAmount, "budgetAmount": flags.budgetAmount, "lastAmount": flags.lastAmount, "budgeWeight": flags.budgeWeight, "budgetWeight": flags.budgetWeight, "totalWeight": flags.totalWeight, "startTime": flags.startTime, "endTime": flags.endTime, "realEndTime": flags.realEndTime, "realEndTimeUnix": flags.realEndTimeUnix, "isFinished": flags.isFinished, "deliveryTime": flags.deliveryTime, "publishTime": flags.publishTime, "dateCode": flags.dateCode, "timeCreated": flags.timeCreated, "selectProductEndOpId": flags.selectProductEndOpId, "selectProductEndOpName": flags.selectProductEndOpName, "selectProductEndTime": flags.selectProductEndTime, "remark": flags.remark, "packageRemark": flags.packageRemark, "receiveInfo": flags.receiveInfo, "extend": flags.extend, "dateCodeNumber": flags.dateCodeNumber, "opUserId": flags.opUserId, "opUserName": flags.opUserName, "skuList": toArray(flags.skuList, 'string'), "addProductCntStr": flags.addProductCntStr, "skuStr": flags.skuStr, "taskPurchaseType": flags.taskPurchaseType, "createby": flags.createby, "orderId": flags.orderId, "waitAuditSkuCnt": flags.waitAuditSkuCnt, "warehouseTypeText": flags.warehouseTypeText, "logisticsTypeText": flags.logisticsTypeText, "outStockCount": flags.outStockCount, "warehouseType": flags.warehouseType, "paohuoRate": flags.paohuoRate, "startTimeFormat": flags.startTimeFormat, "deliveryTimeFormat": flags.deliveryTimeFormat, "publishTimeFormat": flags.publishTimeFormat, "expressFee": flags.expressFee, "orderIdList": toArray(flags.orderIdList, 'string'), "taskCode": flags.taskCode, "isSelectProductEnd": flags.isSelectProductEnd, "verifyStatus": flags.verifyStatus, "verifyTime": flags.verifyTime, "verifyFaliedReason": flags.verifyFaliedReason, "resultStatus": flags.resultStatus, "warehouseTypeId": flags.warehouseTypeId, "orderInfoList": toArray(flags.orderInfoList, 'object') })
    this.output(data)
  }
}
