// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderOrderList extends MBSCommand {
  static description = '订单列表查询：订单中心列表多维度分页查询：按店铺/平台/订单状态/货运方式/自定义流程/关键词/时间区间/开发员/采购员/店长/经理/客服/销量级别/重量·价格·毛利·毛利率·剩余备货天数区间/退款/最晚到货等数十项条件,配合左侧标签(tab 0~11)分页返回订单及其商品明细(dbSellList)。'

  static flags = {
    manager: Flags.string({ description: '经理(高级搜索,多选),来源 #managers (comma-separated)' }),
    orderResult: Flags.string({ description: '订单结果筛选。1=亏损订单;2=侵权商品订单;3=超重订单;4=缺货订单;5=停产订单;6=禁止发货订单(仅 tag==1 生效)' }),
    platformId: Flags.string({ description: '平台,来源 #platformList' }),
    shoptypelist: Flags.string({ description: '店铺列表,来源 base.shoptype/#shopList,无则 [] (comma-separated)' }),
    ordersource: Flags.string({ description: '订单属性/订单来源,来源 #ordersource' }),
    status: Flags.string({ description: '订单状态,来源 base.statusTag 或 #orderStatus' }),
    expresstypeList: Flags.string({ description: '货运方式(多选),来源 #findExpresstype (comma-separated)' }),
    ordertypeid: Flags.string({ description: '自定义流程,来源 #findOrderType' }),
    filtertype: Flags.string({ description: '查询条件,来源 #queryConditions(如 closeTimeLess24)' }),
    keyword: Flags.string({ description: '关键词,来源 #keyword;filtertype=closeTimeLess24 时固定为 \'24\'' }),
    timetype: Flags.string({ description: '时间类型,来源 #timetype' }),
    time1: Flags.string({ description: '时间区间-起始,来源 #time1(区间<=90天)' }),
    time2: Flags.string({ description: '时间区间-结束,来源 #time2(区间<=90天)' }),
    ismyfavorites: Flags.string({ description: '是否我的收藏。0=否;1=是,来源 #ismyfavorites' }),
    tab: Flags.string({ description: '当前标签编号(0全部/1今日/2待发货/3即将到期/4新订单/5配货中/6作废/7海外仓已支付/8海外仓配货中/9退款中/10退款完成/11取消退款);num==0 传空' }),
    selloper: Flags.string({ description: '开发员(高级搜索),来源 #selloper' }),
    buyer: Flags.string({ description: '采购员(高级搜索),来源 #buyer' }),
    shopmanager: Flags.string({ description: '店长(高级搜索),来源 #shopmanager' }),
    salesLevel: Flags.string({ description: '销量级别(高级搜索),来源 #salesLevel' }),
    orderproperty1: Flags.string({ description: '订单属性1(右侧标签筛选),来源 search() 入参 orderproperty' }),
    orderproperty2: Flags.string({ description: '订单优化,来源 #orderproperty2' }),
    productStatus: Flags.string({ description: '产品状态,来源 #productStatus' }),
    orderweight1: Flags.string({ description: '订单重量-起始,来源 #orderweight1' }),
    orderweight2: Flags.string({ description: '订单重量-结束,来源 #orderweight2' }),
    moneyask1: Flags.string({ description: '订单价格-起始,来源 #moneyask1' }),
    moneyask2: Flags.string({ description: '订单价格-结束,来源 #moneyask2' }),
    grossprofit1: Flags.string({ description: '订单毛利-起始,来源 #grossprofit1' }),
    grossprofit2: Flags.string({ description: '订单毛利-结束,来源 #grossprofit2' }),
    grossprofitrate1: Flags.string({ description: '订单毛利率-起始,来源 #grossprofitrate1' }),
    grossprofitrate2: Flags.string({ description: '订单毛利率-结束,来源 #grossprofitrate2' }),
    leftStockingdays1: Flags.string({ description: '剩余备货天数-起始,来源 #leftStockingdays1' }),
    leftStockingdays2: Flags.string({ description: '剩余备货天数-结束,来源 #leftStockingdays2' }),
    refundreason: Flags.string({ description: '退款原因,来源 #refundreason' }),
    refundtime1: Flags.string({ description: '退款时间-起始,来源 #refundtime1' }),
    refundtime2: Flags.string({ description: '退款时间-结束,来源 #refundtime2' }),
    latestDeliveryDate1: Flags.string({ description: '最晚发货/到货时间-起始,来源 #latestDeliveryDate1' }),
    latestDeliveryDate2: Flags.string({ description: '最晚发货/到货时间-结束,来源 #latestDeliveryDate2' }),
    orderby: Flags.string({ description: '排序字段,来源 #orderby' }),
    page: Flags.string({ description: '当前页码,来源 base.page(从1开始)', required: true }),
    pageSize: Flags.string({ description: '每页条数,来源 #everyPage{num}', required: true }),
    customerServiceMgrList: Flags.string({ description: '客服经理(多选,有值才传),来源 #customerServ (comma-separated)' }),
    storage: Flags.string({ description: '仓库,来源 #storage' }),
    ordertype: Flags.string({ description: '订单类型,来源 #ordertype(由 orderTypeList 填充)' }),
    preSaleLabel: Flags.string({ description: '预售标签(有值才传,前端 Number() 转换),来源 #preSaleLabel' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderOrderList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/orderList', { "manager": toArray(flags.manager, 'string'), "orderResult": flags.orderResult, "platformId": flags.platformId, "shoptypelist": toArray(flags.shoptypelist, 'string'), "ordersource": flags.ordersource, "status": flags.status, "expresstypeList": toArray(flags.expresstypeList, 'string'), "ordertypeid": flags.ordertypeid, "filtertype": flags.filtertype, "keyword": flags.keyword, "timetype": flags.timetype, "time1": flags.time1, "time2": flags.time2, "ismyfavorites": flags.ismyfavorites, "tab": flags.tab, "selloper": flags.selloper, "buyer": flags.buyer, "shopmanager": flags.shopmanager, "salesLevel": flags.salesLevel, "orderproperty1": flags.orderproperty1, "orderproperty2": flags.orderproperty2, "productStatus": flags.productStatus, "orderweight1": flags.orderweight1, "orderweight2": flags.orderweight2, "moneyask1": flags.moneyask1, "moneyask2": flags.moneyask2, "grossprofit1": flags.grossprofit1, "grossprofit2": flags.grossprofit2, "grossprofitrate1": flags.grossprofitrate1, "grossprofitrate2": flags.grossprofitrate2, "leftStockingdays1": flags.leftStockingdays1, "leftStockingdays2": flags.leftStockingdays2, "refundreason": flags.refundreason, "refundtime1": flags.refundtime1, "refundtime2": flags.refundtime2, "latestDeliveryDate1": flags.latestDeliveryDate1, "latestDeliveryDate2": flags.latestDeliveryDate2, "orderby": flags.orderby, "page": flags.page, "pageSize": flags.pageSize, "customerServiceMgrList": toArray(flags.customerServiceMgrList, 'string'), "storage": flags.storage, "ordertype": flags.ordertype, "preSaleLabel": flags.preSaleLabel })
    this.output(data)
  }
}
