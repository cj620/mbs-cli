// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchasePurchaseTaskFollowupExport extends MBSCommand {
  static description = '采购任务跟进导出：将「今日采购跟进」页面当前筛选条件（downloadparams）下的采购跟进任务列表导出为 Excel 文件。前端点击导出按钮触发 outdown()，POST 请求体为最近一次任务类型为1(今日必跟进)或14(今日已跟进)的查询条件，后端返回 xlsx 二进制流，前端以 Blob 下载。'

  static flags = {
    searchType: Flags.string({ description: '任务类型/搜索类型。导出仅在 1=今日必跟进、14=今日已跟进 两个Tab生效', required: true }),
    filtertype: Flags.string({ description: '筛选类型：1=批次;2=商品编号;3=运单号;4=供应商;5=平台单号' }),
    keyword: Flags.string({ description: '关键词，含义随 filtertype 变化(批次号/商品编号/运单号/供应商/平台单号)' }),
    salesStatus: Flags.string({ description: '销量级别(取值为销量级别下拉项id，选项来自 /erpProduct/erpProduct/product/getProductType)' }),
    downOrderOper: Flags.string({ description: '下单人(文本输入)' }),
    endInportTime: Flags.string({ description: '结束时间(#endTime，配合dateType的时间区间结束日)' }),
    startInportTime: Flags.string({ description: '开始时间(#startTime，配合dateType的时间区间开始日)' }),
    purchaseOper: Flags.string({ description: '采购员(#buyer，选项来自 /erpProduct/erpProduct/product/getEmpByDep?depId=65)' }),
    status: Flags.string({ description: '采购状态：新采购/审批/采购中/已完成/签收 等' }),
    fieldStr: Flags.string({ description: '排序方式字段：nvl(sum(a.ordernum),0)=按采购数量倒序、nvl(sum(b.fineAmount),0)=按罚款金额倒序、nvl(sum(b.outOfStockNum),0)=按缺货量倒序 等' }),
    dateType: Flags.string({ description: '日期类型(默认1)：1=下单时间;2=申请退款时间;3=退款完成时间' }),
    hwcType: Flags.string({ description: '海外/直邮采购类型：0=直邮采购单;1=FBA采购单;2=三方海外仓采购单' }),
    customFilter: Flags.string({ description: '自定义筛选：0=已填运单号;1=未填运单号;2=采样批次;3=非采样批次;4=TK30天出单 等' }),
    paymenttype: Flags.string({ description: '付款方式：胤元1/胤元电子科技/上海路莫斯/河西走廊1688/供应链平台 等' }),
    companyId: Flags.string({ description: '公司ID：1=胤元;33=启元' }),
    storageIdList: Flags.string({ description: '仓库ID列表(来自 window.selectedStock?.value，仓库多选组件，默认空数组[]) (comma-separated)' }),
    stepname: Flags.string({ description: '跟进原因类型(#appendvalue)，仅 searchType 为 1 或 14 时写入' }),
    page: Flags.string({ description: '当前页码。仅经翻页 findTaskReport 回调导出时携带；首次搜索导出不含该字段' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchasePurchaseTaskFollowupExport)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseDevelop/purchaseTaskFollowupExport', { "searchType": flags.searchType, "filtertype": flags.filtertype, "keyword": flags.keyword, "salesStatus": flags.salesStatus, "downOrderOper": flags.downOrderOper, "endInportTime": flags.endInportTime, "startInportTime": flags.startInportTime, "purchaseOper": flags.purchaseOper, "status": flags.status, "fieldStr": flags.fieldStr, "dateType": flags.dateType, "hwcType": flags.hwcType, "customFilter": flags.customFilter, "paymenttype": flags.paymenttype, "companyId": flags.companyId, "storageIdList": toArray(flags.storageIdList, 'string'), "stepname": flags.stepname, "page": flags.page })
    this.output(data)
  }
}
