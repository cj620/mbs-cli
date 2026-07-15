// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseQuerypurchaseCustomOrderList extends MBSCommand {
  static description = '采购定制订单明细列表查询：采购任务页(purchaseTask)「制作/条码/财务」页签中，展开某供应商行时按 manufactureId 拉取该供应商下的定制订单明细列表，支持SKU/SPU/供应商/批次/订单号/平台单号/订单状态/采购状态/核销状态/到货状态/同步状态/采购时间区间等多维筛选与排序，返回订单明细列表(含定制内容图文、成本、店铺、采购与签收信息)。'

  static flags = {
    productId: Flags.string({ description: 'SKU编号(关键词)' }),
    skuStatus: Flags.string({ description: '产品状态。枚举：正常/清仓/停产/自动创建/暂停销售' }),
    spu: Flags.string({ description: 'SPU编号(可多选逗号分隔；purchaseFlag==2时为单个spu)' }),
    manufacture: Flags.string({ description: '供应商(关键词)' }),
    groupId: Flags.string({ description: '采购批次(批次号)' }),
    orderId: Flags.string({ description: '订单号' }),
    platformOrderId: Flags.string({ description: '平台单号' }),
    orderStatus: Flags.string({ description: '订单状态(多选)。枚举：已支付/配货中/已发货/作废。默认[\'配货中\',\'已支付\'] (comma-separated)' }),
    banSendFlag: Flags.string({ description: '是否禁止(禁发)。枚举：0=未禁止；1=已禁止' }),
    purchaseStatus: Flags.string({ description: '采购状态。枚举：\'\'=所有；采购中；签收；已完成' }),
    customerReq: Flags.string({ description: '定制内容(关键词)' }),
    lableContent: Flags.string({ description: '条码值' }),
    isConfirm: Flags.string({ description: '是否确认定制信息。枚举：\'\'=全部；0=未确认；1=已确认' }),
    financeStatus: Flags.string({ description: '核销状态。枚举：正常/未核销/已核销' }),
    signFlag: Flags.string({ description: '到货状态。枚举：0=未确认到货；1=已确认到货正确；2=已确认到货错误' }),
    purchaseStartDate: Flags.string({ description: '采购开始时间(YYYY-MM-DD)' }),
    purchaseEndDate: Flags.string({ description: '采购结束时间(YYYY-MM-DD)' }),
    syncStatus: Flags.string({ description: '同步状态(大众定制)。枚举：未同步/待同步/已同步' }),
    purchaseFlag: Flags.string({ description: '页签类型。0=制作；1=条码；2=财务/已删除' }),
    sort: Flags.string({ description: '排序字段(来自selection.order.sort)。枚举：delayDays/manufacture' }),
    order: Flags.string({ description: '排序方向(来自selection.order.order，覆盖同名order对象键)。枚举：asc/desc' }),
    key: Flags.string({ description: '排序选项key。1=延迟天数升序；2=延迟天数降序；3=供应商升序；4=供应商降序' }),
    pageSize: Flags.string({ description: '每页条数(默认50)', required: true }),
    manufactureId: Flags.string({ description: '供应商ID(取自展开行MANUFACTUREID，本接口按供应商拉取明细的关键入参)', required: true }),
    page: Flags.string({ description: '当前页码(本调用固定=1)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseQuerypurchaseCustomOrderList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseCustomOrder/querypurchaseCustomOrderList', { "productId": flags.productId, "skuStatus": flags.skuStatus, "spu": flags.spu, "manufacture": flags.manufacture, "groupId": flags.groupId, "orderId": flags.orderId, "platformOrderId": flags.platformOrderId, "orderStatus": toArray(flags.orderStatus, 'string'), "banSendFlag": flags.banSendFlag, "purchaseStatus": flags.purchaseStatus, "customerReq": flags.customerReq, "lableContent": flags.lableContent, "isConfirm": flags.isConfirm, "financeStatus": flags.financeStatus, "signFlag": flags.signFlag, "purchaseStartDate": flags.purchaseStartDate, "purchaseEndDate": flags.purchaseEndDate, "syncStatus": flags.syncStatus, "purchaseFlag": flags.purchaseFlag, "sort": flags.sort, "order": flags.order, "key": flags.key, "pageSize": flags.pageSize, "manufactureId": flags.manufactureId, "page": flags.page })
    this.output(data)
  }
}
