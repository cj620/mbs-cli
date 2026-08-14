// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindPhotographMission extends MBSCommand {
  static description = '批量添加拍照任务：批量添加拍照任务'

  static flags = {
    createdBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    photograph: Flags.string({ description: 'Photograph（字段名推断,语义待核实）' }),
    allotStatus: Flags.string({ description: 'Allot状态（字段名推断,语义待核实）' }),
    finishStatus: Flags.string({ description: '完成状态（字段名推断,语义待核实）' }),
    filterView: Flags.string({ description: '过滤查看（字段名推断,语义待核实）' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    purchaseId: Flags.string({ description: '采购ID（字段名推断,语义待核实）' }),
    devBigChief: Flags.string({ description: 'DEVBIG主管（字段名推断,语义待核实）' }),
    reserveFlag: Flags.string({ description: '1 有库存 2 部分没有库存 或者全没库存的' }),
    evaluateFlag: Flags.string({ description: '1 未评价 2已评价' }),
    spuList: Flags.string({ description: 'SPU列表（字段名推断,语义待核实） (comma-separated)' }),
    orderIds: Flags.string({ description: '订单ID列表（字段名推断,语义待核实） (comma-separated)' }),
    createTimeStart: Flags.string({ description: '创建时间(开始)' }),
    createTimeEnd: Flags.string({ description: '创建时间(结束)' }),
    employeeList: Flags.string({ description: '同组人员 (comma-separated)' }),
    receiveGoodsNum: Flags.integer({ description: '收货货品数量（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    missionIdList: Flags.string({ description: 'MissionID列表（字段名推断,语义待核实） (comma-separated)' }),
    shootingLocation: Flags.string({ description: '摄影师/咔神拍摄' }),
    type: Flags.string({ description: '拍照/视频订单' }),
    orderId: Flags.string({ description: '订单ID（字段名推断,语义待核实）' }),
    missionId: Flags.string({ description: 'MissionID（字段名推断,语义待核实）' }),
    photoRemark: Flags.string({ description: '图片备注（字段名推断,语义待核实）' }),
    photoUrl: Flags.string({ description: '图片URL（字段名推断,语义待核实）' }),
    allotTimeStart: Flags.string({ description: 'Allot时间开始（字段名推断,语义待核实）' }),
    allotTimeEnd: Flags.string({ description: 'Allot时间结束（字段名推断,语义待核实）' }),
    isTwoPicture: Flags.string({ description: '是否两个图片（字段名推断,语义待核实）' }),
    companyId: Flags.integer({ description: '商品所属公司id' }),
    searchCompanyId: Flags.integer({ description: '搜索公司id' }),
    viewCompanyId: Flags.integer({ description: '当前登录人所属公司id' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindPhotographMission)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/ProductPhotographController/findPhotographMission', { "createdBy": flags.createdBy, "photograph": flags.photograph, "allotStatus": flags.allotStatus, "finishStatus": flags.finishStatus, "filterView": flags.filterView, "sku": flags.sku, "purchaseId": flags.purchaseId, "devBigChief": flags.devBigChief, "reserveFlag": flags.reserveFlag, "evaluateFlag": flags.evaluateFlag, "spuList": toArray(flags.spuList, 'string'), "orderIds": toArray(flags.orderIds, 'string'), "createTimeStart": flags.createTimeStart, "createTimeEnd": flags.createTimeEnd, "employeeList": toArray(flags.employeeList, 'string'), "receiveGoodsNum": flags.receiveGoodsNum, "spu": flags.spu, "currentPage": flags.currentPage, "pageSize": flags.pageSize, "missionIdList": toArray(flags.missionIdList, 'string'), "shootingLocation": flags.shootingLocation, "type": flags.type, "orderId": flags.orderId, "missionId": flags.missionId, "photoRemark": flags.photoRemark, "photoUrl": flags.photoUrl, "allotTimeStart": flags.allotTimeStart, "allotTimeEnd": flags.allotTimeEnd, "isTwoPicture": flags.isTwoPicture, "companyId": flags.companyId, "searchCompanyId": flags.searchCompanyId, "viewCompanyId": flags.viewCompanyId })
    this.output(data)
  }
}
