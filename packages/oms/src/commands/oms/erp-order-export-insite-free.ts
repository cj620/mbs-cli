// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderExportInsiteFree extends MBSCommand {
  static description = '站内推广费/费项差异核对 导出：差异核对页 findDifference 点击导出，以当前查询条件 params 为请求体，导出指定费项类型的订单/批次费项差异明细 Excel；请求体复用 localStorage params（由 dailyorderTimeReport.html 写入）并追加 oneDay/type/pageSize；响应为二进制 Excel 文件流。'

  static flags = {
    employeeType: Flags.string({ description: '人员类别(来源控件 #orderStaus;==3启用店铺过滤,!==\'4\'影响smt跳转判定;枚举待人工确认)' }),
    startTime: Flags.string({ description: '起始日期(来源控件 #time1,格式 yyyy-MM-dd)' }),
    endTime: Flags.string({ description: '结束日期(来源控件 #time2,格式 yyyy-MM-dd)' }),
    platformIds: Flags.string({ description: '平台ID列表(来源控件 #reserve11 多选,空时为[]);含\'16\'+罚款走罚款分支,\'10\'/\'138\'+站内推广费跳转smt报表 (comma-separated)' }),
    siteList: Flags.string({ description: '站点列表(来源控件 #getSiteList 多选) (comma-separated)' }),
    categoryNameList: Flags.string({ description: '品类列表(来源树选择 valueData,最终覆盖为树选中值) (comma-separated)' }),
    categoryNameList2: Flags.string({ description: '品类列表2(来源控件 #CategoryList 级联值) (comma-separated)' }),
    customerServiceMgr: Flags.string({ description: '客服经理(来源控件 #custService,多选逗号拼接,空时为"")' }),
    shopName: Flags.string({ description: '店铺名称列表(来源控件 #shopList,仅 employeeType==3且有值时取分割结果,否则[]) (comma-separated)' }),
    employeeName: Flags.string({ description: '组员(来源控件 #employeeList,空时为[]) (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长/店长(来源控件 #shopManager,空时为[]) (comma-separated)' }),
    oneDay: Flags.string({ description: '单日标识(findDifference.html 取自URL查询参数 oneDay)' }),
    type: Flags.string({ description: '费项类型/费项说明(取自URL查询参数 type)。枚举:平台费/付款交易费/罚款/站内推广费/站外推广费/店铺成本(仅站内推广费显示导出按钮)', required: true }),
    pageSize: Flags.string({ description: '每页条数(findDifference.html 固定置50)', required: true }),
    page: Flags.string({ description: '当前页码(search()置1,分页回调置当前页,导出时取当前 params.page)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderExportInsiteFree)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/exportInsiteFree', { "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "platformIds": toArray(flags.platformIds, 'string'), "siteList": toArray(flags.siteList, 'string'), "categoryNameList": toArray(flags.categoryNameList, 'string'), "categoryNameList2": toArray(flags.categoryNameList2, 'string'), "customerServiceMgr": flags.customerServiceMgr, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "oneDay": flags.oneDay, "type": flags.type, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
