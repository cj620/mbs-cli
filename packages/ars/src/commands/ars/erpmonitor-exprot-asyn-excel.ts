// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorExprotAsynExcel extends MBSCommand {
  static description = '在线列表异步导出Excel：在线列表(热销商品监控)页点击导出时，按当前页面全部筛选条件创建异步导出Excel任务；请求体与列表查询 getFormParams() 一致(含平台/团队/店铺/价格/销量/时间/类目/标签/侵权等近百项筛选)。成功后提示并可跳转我的导出队列。'

  static flags = {
    yySpuStatus: Flags.string({ description: '运营SPU状态(默认1;值=4时传null)' }),
    saleLeader: Flags.string({ description: '销售业务员/组员(多选逗号拼接;未选且有大酋长时取groupArr拼接)' }),
    folderId: Flags.string({ description: '收藏夹ID(folderFavourite.checkList)' }),
    platformId: Flags.string({ description: '平台ID(vueData.platform)' }),
    sellWellCountry: Flags.string({ description: '热卖国家(vueData.sellWellCountry) (comma-separated)' }),
    director: Flags.string({ description: '总监(vueData.directors) (comma-separated)' }),
    manager: Flags.string({ description: '经理(vueData.managers) (comma-separated)' }),
    littleLeaders: Flags.string({ description: '小组长(vueData.littleLeaders) (comma-separated)' }),
    shopManager: Flags.string({ description: '店长(vueData.shopManagers) (comma-separated)' }),
    shopNames: Flags.string({ description: '店铺名称列表(vueData.shop) (comma-separated)' }),
    freightTemplateIds: Flags.string({ description: '运费模板ID(vueData.shipping) (comma-separated)' }),
    publishOper: Flags.string({ description: '刊登人(vueData.publisher)' }),
    spuNumberSold1: Flags.string({ description: 'SPU销量下限(vueData.orderMin,空则null)' }),
    spuNumberSold2: Flags.string({ description: 'SPU销量上限(vueData.orderMax,空则null)' }),
    spuNinetyOrdernum1: Flags.string({ description: '90天订单数下限(#spuNinetyOrdernum1)' }),
    spuNinetyOrdernum2: Flags.string({ description: '90天订单数上限(#spuNinetyOrdernum2)' }),
    spuHalfYearOrdernum1: Flags.string({ description: '180天售出数下限(#spuHalfYearOrdernum1)' }),
    spuHalfYearOrdernum2: Flags.string({ description: '180天售出数上限(#spuHalfYearOrdernum2)' }),
    isQingcang: Flags.string({ description: '是否清仓(勾选=1,未勾选=0;#isQingcang)' }),
    spuThirtyOrdernum1: Flags.string({ description: '30天订单数下限(#salenumMin)' }),
    spuThirtyOrdernum2: Flags.string({ description: '30天订单数上限(#salenumMax)' }),
    maxRate: Flags.string({ description: '毛利率上限(#maxRate)' }),
    minRate: Flags.string({ description: '毛利率下限(#minRate)' }),
    minCollection: Flags.string({ description: '收藏数下限(#minCollection)' }),
    maxCollection: Flags.string({ description: '收藏数上限(#maxCollection)' }),
    minPageView: Flags.string({ description: '浏览量下限(#minPageView)' }),
    maxPageView: Flags.string({ description: '浏览量上限(#maxPageView)' }),
    profitMin: Flags.string({ description: '利润下限(#profitMin)' }),
    profitMax: Flags.string({ description: '利润上限(#profitMax)' }),
    shopId: Flags.string({ description: '店铺ID(当前固定传空数组) (comma-separated)' }),
    proStatus: Flags.string({ description: '产品状态(#proStatus)' }),
    spuDescription: Flags.string({ description: 'SPU描述/标题关键词(#currency)' }),
    minPrice: Flags.string({ description: '售价下限(#minPrice)' }),
    maxPrice: Flags.string({ description: '售价上限(#maxPrice)' }),
    costPriceMin: Flags.string({ description: '成本价下限(#minCost)' }),
    costPriceMax: Flags.string({ description: '成本价上限(#maxCost)' }),
    site: Flags.string({ description: '站点(多选逗号拼接;#site)' }),
    sidCheck: Flags.string({ description: 'SID核对(勾选=1,未勾选=0;#sidm)' }),
    orderWay: Flags.string({ description: '排序方式(升序/降序;#orderWay)' }),
    spuCreateTime1: Flags.string({ description: 'SPU创建时间-起始(#spuCreateTime1)' }),
    spuCreateTime2: Flags.string({ description: 'SPU创建时间-结束(#spuCreateTime2)' }),
    startTime: Flags.string({ description: '开始时间(#startTime)' }),
    endTime: Flags.string({ description: '结束时间(#endTime)' }),
    orderFiled: Flags.string({ description: '排序字段(#orderFiled)' }),
    matchKey: Flags.string({ description: '关键词匹配类型(#matchKey)' }),
    sku: Flags.string({ description: 'SKU关键词(#sku)' }),
    logisticsType: Flags.string({ description: '物流类型(#logisticsType)' }),
    itemId: Flags.string({ description: 'listing/商品ID(已勾选行itemid逗号拼接,否则#itemId)' }),
    isSold: Flags.string({ description: '是否已售出(勾选=1,未勾选=0;#isSold)' }),
    isMedia: Flags.string({ description: '是否含媒体(勾选=1,未勾选=0;#isMedia)' }),
    spuDispatchTimeMax: Flags.string({ description: 'SPU发货时效上限(#spuDispatchTimeMax)' }),
    spuFiftyOneOrdernum1: Flags.string({ description: '51天订单数下限(#fiftySalenumMin)' }),
    spuFiftyOneOrdernum2: Flags.string({ description: '51天订单数上限(#fiftySalenumMax)' }),
    spuThirtyDaysSoldCount1: Flags.string({ description: '30天售出件数下限(#spuThirtyDaysSoldCount1)' }),
    spuThirtyDaysSoldCount2: Flags.string({ description: '30天售出件数上限(#spuThirtyDaysSoldCount2)' }),
    skuInventory1: Flags.string({ description: 'SKU库存下限(#skuRemainedMin)' }),
    skuInventory2: Flags.string({ description: 'SKU库存上限(#skuRemainedMax)' }),
    ozonContentRatingStart: Flags.string({ description: 'Ozon内容评分起始(#ozonContentRatingStart)' }),
    ozonContentRatingEnd: Flags.string({ description: 'Ozon内容评分结束(#ozonContentRatingEnd)' }),
    specialmark: Flags.string({ description: '特殊标记(#specialmark)' }),
    spuSevenOrdernum1: Flags.string({ description: '7天订单数下限(#spuSevenOrdernum1)' }),
    spuSevenOrdernum2: Flags.string({ description: '7天订单数上限(#spuSevenOrdernum2)' }),
    tortWhiteListing: Flags.string({ description: '侵权白名单listing(勾选时传1)' }),
    infringingWhiteWord: Flags.string({ description: '侵权白名单词(勾选时传1)' }),
    outOfStock: Flags.string({ description: '缺货(勾选时传1)' }),
    smtProductType: Flags.string({ description: '速卖通产品类型(勾选时传1)' }),
    threeDaySalesChange: Flags.string({ description: '3天销量跌幅(勾选下降时传-0.2;#threeDaySalesChangeLower)' }),
    amazonFollowUp: Flags.boolean({ description: '亚马逊跟卖(勾选时传true)', allowNo: true }),
    multipleWarehousesLabel: Flags.string({ description: '一品多仓标签(勾选时传1)' }),
    multipleWarehousesTestLabel: Flags.string({ description: '一品多仓测品标签(勾选时传"1")' }),
    gmShop: Flags.string({ description: 'GM店铺(勾选时传"1")' }),
    ozonFbpProduct: Flags.string({ description: 'Ozon FBP产品(勾选时传1)' }),
    bundType: Flags.string({ description: '捆绑(组合)类型(勾选时传1)' }),
    continuouOrderFifteen: Flags.string({ description: '连续15天出单(勾选时传1)' }),
    autoPublish: Flags.string({ description: '自动刊登(勾选时传1)' }),
    autoPublishType: Flags.string({ description: '刊登类型(自动刊登传2;复制刊登传3)' }),
    continuouOrderThirty: Flags.string({ description: '连续30天出单(勾选时传1)' }),
    tort: Flags.string({ description: '侵权(勾选时传1)' }),
    whiteList: Flags.string({ description: '白名单(勾选时传1)' }),
    lowRate: Flags.string({ description: '低毛利(勾选时传1)' }),
    hasInfringedWord: Flags.string({ description: '含侵权词(勾选时传1)' }),
    isNotActive: Flags.string({ description: '非活跃(勾选时传1)' }),
    diagnosisType: Flags.string({ description: '诊断类型(勾选先传1,随后被选中单选项value覆盖)' }),
    price5: Flags.string({ description: '仓库类型(海外仓类型;有选传值否则空数组;#warehouse) (comma-separated)' }),
    country: Flags.string({ description: '发货地(有选传值否则空数组;#countryFrome) (comma-separated)' }),
    productTagList: Flags.string({ description: '商品标签(有选传值否则空数组;#productTagList) (comma-separated)' }),
    isopenshop: Flags.string({ description: '是否开店(#isopenshop)' }),
    operatestatus: Flags.string({ description: '运营状态(#operatestatus)' }),
    payPalEmailAddress: Flags.string({ description: 'PayPal邮箱地址(#payPalEmailAddress)' }),
    bannedPlatform: Flags.string({ description: '禁售平台(vueData.plantformid) (comma-separated)' }),
    customerService: Flags.string({ description: '客户经理(#custService)' }),
    projectSpu: Flags.string({ description: '项目SPU(#productsku按逗号拆分;值为false/null时空数组) (comma-separated)' }),
    hasPhishingWord: Flags.string({ description: '含钓鱼词(勾选时传1)' }),
    firstCategory: Flags.string({ description: '一级类目(CategorySelect长度1项逗号拼接)' }),
    secondCategory: Flags.string({ description: '二级类目(CategorySelect长度2项的第2级逗号拼接)' }),
    autoPublishTypeList: Flags.string({ description: 'TK刊登类型列表(showTKPublishType为真即TikTok平台时传;checkapp) (comma-separated)' }),
    brand: Flags.string({ description: '商品品牌(选择后传;checkapp/productBrand)' }),
    tortStartTime: Flags.string({ description: '侵权开始时间(填写后传;checkapp)' }),
    tortEndTime: Flags.string({ description: '侵权结束时间(填写后传;checkapp)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorExprotAsynExcel)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/exprotAsynExcel', { "yySpuStatus": flags.yySpuStatus, "saleLeader": flags.saleLeader, "folderId": flags.folderId, "platformId": flags.platformId, "sellWellCountry": toArray(flags.sellWellCountry, 'string'), "director": toArray(flags.director, 'string'), "manager": toArray(flags.manager, 'string'), "littleLeaders": toArray(flags.littleLeaders, 'string'), "shopManager": toArray(flags.shopManager, 'string'), "shopNames": toArray(flags.shopNames, 'string'), "freightTemplateIds": toArray(flags.freightTemplateIds, 'string'), "publishOper": flags.publishOper, "spuNumberSold1": flags.spuNumberSold1, "spuNumberSold2": flags.spuNumberSold2, "spuNinetyOrdernum1": flags.spuNinetyOrdernum1, "spuNinetyOrdernum2": flags.spuNinetyOrdernum2, "spuHalfYearOrdernum1": flags.spuHalfYearOrdernum1, "spuHalfYearOrdernum2": flags.spuHalfYearOrdernum2, "isQingcang": flags.isQingcang, "spuThirtyOrdernum1": flags.spuThirtyOrdernum1, "spuThirtyOrdernum2": flags.spuThirtyOrdernum2, "maxRate": flags.maxRate, "minRate": flags.minRate, "minCollection": flags.minCollection, "maxCollection": flags.maxCollection, "minPageView": flags.minPageView, "maxPageView": flags.maxPageView, "profitMin": flags.profitMin, "profitMax": flags.profitMax, "shopId": toArray(flags.shopId, 'string'), "proStatus": flags.proStatus, "spuDescription": flags.spuDescription, "minPrice": flags.minPrice, "maxPrice": flags.maxPrice, "costPriceMin": flags.costPriceMin, "costPriceMax": flags.costPriceMax, "site": flags.site, "sidCheck": flags.sidCheck, "orderWay": flags.orderWay, "spuCreateTime1": flags.spuCreateTime1, "spuCreateTime2": flags.spuCreateTime2, "startTime": flags.startTime, "endTime": flags.endTime, "orderFiled": flags.orderFiled, "matchKey": flags.matchKey, "sku": flags.sku, "logisticsType": flags.logisticsType, "itemId": flags.itemId, "isSold": flags.isSold, "isMedia": flags.isMedia, "spuDispatchTimeMax": flags.spuDispatchTimeMax, "spuFiftyOneOrdernum1": flags.spuFiftyOneOrdernum1, "spuFiftyOneOrdernum2": flags.spuFiftyOneOrdernum2, "spuThirtyDaysSoldCount1": flags.spuThirtyDaysSoldCount1, "spuThirtyDaysSoldCount2": flags.spuThirtyDaysSoldCount2, "skuInventory1": flags.skuInventory1, "skuInventory2": flags.skuInventory2, "ozonContentRatingStart": flags.ozonContentRatingStart, "ozonContentRatingEnd": flags.ozonContentRatingEnd, "specialmark": flags.specialmark, "spuSevenOrdernum1": flags.spuSevenOrdernum1, "spuSevenOrdernum2": flags.spuSevenOrdernum2, "tortWhiteListing": flags.tortWhiteListing, "infringingWhiteWord": flags.infringingWhiteWord, "outOfStock": flags.outOfStock, "smtProductType": flags.smtProductType, "threeDaySalesChange": flags.threeDaySalesChange, "amazonFollowUp": flags.amazonFollowUp, "multipleWarehousesLabel": flags.multipleWarehousesLabel, "multipleWarehousesTestLabel": flags.multipleWarehousesTestLabel, "gmShop": flags.gmShop, "ozonFbpProduct": flags.ozonFbpProduct, "bundType": flags.bundType, "continuouOrderFifteen": flags.continuouOrderFifteen, "autoPublish": flags.autoPublish, "autoPublishType": flags.autoPublishType, "continuouOrderThirty": flags.continuouOrderThirty, "tort": flags.tort, "whiteList": flags.whiteList, "lowRate": flags.lowRate, "hasInfringedWord": flags.hasInfringedWord, "isNotActive": flags.isNotActive, "diagnosisType": flags.diagnosisType, "price5": toArray(flags.price5, 'string'), "country": toArray(flags.country, 'string'), "productTagList": toArray(flags.productTagList, 'string'), "isopenshop": flags.isopenshop, "operatestatus": flags.operatestatus, "payPalEmailAddress": flags.payPalEmailAddress, "bannedPlatform": toArray(flags.bannedPlatform, 'string'), "customerService": flags.customerService, "projectSpu": toArray(flags.projectSpu, 'string'), "hasPhishingWord": flags.hasPhishingWord, "firstCategory": flags.firstCategory, "secondCategory": flags.secondCategory, "autoPublishTypeList": toArray(flags.autoPublishTypeList, 'string'), "brand": flags.brand, "tortStartTime": flags.tortStartTime, "tortEndTime": flags.tortEndTime })
    this.output(data)
  }
}
