// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductProductInfoForExport extends MBSCommand {
  static description = '商品(SPU)导出数据查询：SPU 管理列表点击导出时调用：把当前列表全部筛选条件(outdownparams，由 getParams() 构建)作为请求体提交，后端返回待导出的 ES 数据列表(esDataList) 及 ES 查询构造串(sourceBuilderString)；前端据 originalSku 拼成 skuStr，type=2 时再把 sourceBuilderString 回传给 saveProductReport 完成导出。'

  static flags = {
    categoryId: Flags.string({ description: '商品分类ID(类目级联最后一级 sequenceid，categorySearch 有值时传)' }),
    levelNum: Flags.string({ description: '分类层级数(类目级联选择的层级数)' }),
    searchCompanyId: Flags.string({ description: '公司ID(按公司过滤)' }),
    developer2List: Flags.string({ description: '开发员2列表 (comma-separated)' }),
    sku: Flags.string({ description: '关键词-按SKU查询(seekType=SKU)' }),
    sonSku: Flags.string({ description: '关键词-按子SKU查询(seekType=子SKU)' }),
    manufacture: Flags.string({ description: '关键词-按供应商查询(seekType=供应商)' }),
    proName: Flags.string({ description: '关键词-按产品名查询(seekType=proName)' }),
    batchSku: Flags.string({ description: '关键词-按批量SKU查询(seekType=batchSku)' }),
    productName: Flags.string({ description: '关键词-按商品名称查询(seekType=productName)' }),
    englishTitle: Flags.string({ description: '关键词-按英文标题查询(seekType=englishTitle)' }),
    proNameForAny: Flags.string({ description: '关键词-按产品名模糊(任意)查询(seekType=proNameForAny)' }),
    fuzzyQuery: Flags.string({ description: '关键词-全文模糊查询(seekType=fuzzy，经 processSpacedStrings 处理)' }),
    location: Flags.string({ description: '关键词-按仓位查询(seekType=location)' }),
    spu: Flags.string({ description: '关键词-按SPU查询(默认搜索类型)' }),
    hasSubmitSale: Flags.string({ description: '是否已售卖(取自 isshop)' }),
    salesStatus: Flags.string({ description: '销量状态(多选逗号拼接，无选则空串)' }),
    status: Flags.string({ description: '产品状态(多选逗号拼接，无选则空串)' }),
    orderBy: Flags.string({ description: '降序排序字段(flag=6 取 localStorage.ranks，否则取 #SKUselect 值)' }),
    buyer: Flags.string({ description: '采购员(多选逗号拼接，无选则空串)' }),
    numType: Flags.string({ description: '库存数量类型(默认\'1\')' }),
    savenum1: Flags.string({ description: '库存范围-下限' }),
    savenum2: Flags.string({ description: '库存范围-上限' }),
    propertiesid: Flags.string({ description: '商品属性(多选逗号拼接，无选则空串)' }),
    startDate: Flags.string({ description: '开发时间-起始(timmer[0])' }),
    endDate: Flags.string({ description: '开发时间-结束(timmer[1])' }),
    reduceCost: Flags.string({ description: '降本筛选' }),
    tort: Flags.string({ description: '侵权筛选' }),
    minSalesVolume30: Flags.string({ description: '近30天销量-下限(salesnum1)' }),
    maxSalesVolume30: Flags.string({ description: '近30天销量-上限(salesnum2)' }),
    hjreserve4: Flags.string({ description: '王牌国家(kingCountries 多选逗号拼接)' }),
    hjreserve6: Flags.string({ description: '王牌平台(kingPlatform 多选逗号拼接)' }),
    priceflag: Flags.string({ description: '是否黑马' }),
    forbidPlatformIdList: Flags.string({ description: '过滤禁售平台ID列表(filterForBid) (comma-separated)' }),
    applicablePlatformList: Flags.string({ description: '适用平台列表(applicablePlatformSelect) (comma-separated)' }),
    minWeight: Flags.string({ description: '重量-下限' }),
    maxWeight: Flags.string({ description: '重量-上限' }),
    minCostPrice: Flags.string({ description: '成本-下限(mainCostPrice)' }),
    maxCostprice: Flags.string({ description: '成本-上限(MaxCostprice)' }),
    minreserve14: Flags.string({ description: '刊登量-下限' }),
    maxreserve14: Flags.string({ description: '刊登量-上限' }),
    storageNew: Flags.string({ description: '发货仓库' }),
    applicableSiteList: Flags.string({ description: '适用站点列表(applicableSite) (comma-separated)' }),
    productTagList: Flags.string({ description: '包含商品标签列表(productTag) (comma-separated)' }),
    notContainsProductTagList: Flags.string({ description: '不包含商品标签列表(productTag2) (comma-separated)' }),
    riskLevel: Flags.string({ description: '风险等级' }),
    allBrandId: Flags.boolean({ description: '全部品牌标记(Briefoption 含 \'all\' 时 true；含 \'empt\' 时 false)', allowNo: true }),
    brandId: Flags.string({ description: '品牌ID列表(Briefoption 非 all/empt 时传) (comma-separated)' }),
    allCertification: Flags.boolean({ description: '全部认证标记(certificationList 含 \'all\' 时 true；含 \'empt\' 时 false)', allowNo: true }),
    certificationList: Flags.string({ description: '认证列表(非 all/empt 时传) (comma-separated)' }),
    whitePublishShop: Flags.string({ description: '白名单刊登店铺(数组 join 逗号拼接)' }),
    smallSection: Flags.string({ description: '小件区间(有值才传)' }),
    largeSection: Flags.string({ description: '大件区间(有值才传)' }),
    positionId: Flags.string({ description: '岗位ID(取自 localStorage，无则空串)' }),
    spotcheck: Flags.string({ description: '是否已抽检' }),
    buyflag: Flags.string({ description: '是否轻小件(取自 buyflags)' }),
    purchaseFlag: Flags.string({ description: '采样备货(当前固定传空串)' }),
    lowratecnt: Flags.string({ description: '低星率(lowratecnt 有值时固定 1)' }),
    negativeRefundrate: Flags.string({ description: '负毛利退款率(negativeRefundrate 有值时固定 1)' }),
    tkVideo: Flags.string({ description: '是否有TikTok视频(tkVideo 有值时固定 \'2\')' }),
    isAccount: Flags.string({ description: '是否账期供应商(多选逗号拼接，无选则空串)' }),
    returns: Flags.string({ description: '供应商退换货情况(多选逗号拼接，无选则空串)' }),
    oper4: Flags.string({ description: '销售(saleOper，无选则空数组) (comma-separated)' }),
    isBoutique: Flags.string({ description: '是否中高单价精品(baseDate.isBoutique)' }),
    keyWords: Flags.string({ description: '包含关键字 (comma-separated)' }),
    keyWords2: Flags.string({ description: '快速搜索关键字(baseDate.keywordArr) (comma-separated)' }),
    isServeXnc: Flags.string({ description: '是否虚拟仓特供(baseDate.isServeXnc)' }),
    notContainsKeyWords: Flags.string({ description: '不包含关键字(notkeyWords) (comma-separated)' }),
    provinces: Flags.string({ description: '省(city 中 type=1 解析，city 有值时传) (comma-separated)' }),
    citys: Flags.string({ description: '城市(city 中 type=2 解析，city 有值时传) (comma-separated)' }),
    price5: Flags.string({ description: '仓库类型(warehouse，无选则空数组) (comma-separated)' }),
    specialmark: Flags.string({ description: '商品特殊标记' }),
    myStatus: Flags.string({ description: '查看我的(_switchmycheck 为真=\'1\'，否则空串)' }),
    result: Flags.string({ description: '结果筛选(1=亏损;2=缺货;3=自建，baseDate.result)' }),
    advancedSpu: Flags.string({ description: '高级搜索SPU(searchstatus=1 时传 searchspu)' }),
    oper: Flags.string({ description: '开发员(window.operlist)' }),
    pageSize: Flags.string({ description: '每页条数(导出前5000条时前端覆盖为 5000)', required: true }),
    keyWords3: Flags.string({ description: '侧边查询关键字(极速版 mark=1，valstr 存在时传 [valstr]) (comma-separated)' }),
    projectSpu: Flags.string({ description: '侧边项目SPU查询(mark=1，无 valstr 时传 spuCode)' }),
    attentionSkuFlag: Flags.string({ description: '我关注的标记(attentionNum=1 时置空)' }),
    page: Flags.string({ description: '当前页码(默认 1)', required: true }),
    isTort: Flags.string({ description: '是否侵权(baseDate.isTort，可为 null)' }),
    isVideo: Flags.string({ description: '是否有视频(0/1，baseDate.isVideo)' }),
    hasSpuLimitPrice: Flags.string({ description: '是否有SPU限价(baseDate.hasSpuLimitPrice)' }),
    storagebinflag: Flags.string({ description: '仓位标记(storagebinflag)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductProductInfoForExport)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/product/productInfoForExport', { "categoryId": flags.categoryId, "levelNum": flags.levelNum, "searchCompanyId": flags.searchCompanyId, "developer2List": toArray(flags.developer2List, 'string'), "sku": flags.sku, "sonSku": flags.sonSku, "manufacture": flags.manufacture, "proName": flags.proName, "batchSku": flags.batchSku, "productName": flags.productName, "englishTitle": flags.englishTitle, "proNameForAny": flags.proNameForAny, "fuzzyQuery": flags.fuzzyQuery, "location": flags.location, "spu": flags.spu, "hasSubmitSale": flags.hasSubmitSale, "salesStatus": flags.salesStatus, "status": flags.status, "orderBy": flags.orderBy, "buyer": flags.buyer, "numType": flags.numType, "savenum1": flags.savenum1, "savenum2": flags.savenum2, "propertiesid": flags.propertiesid, "startDate": flags.startDate, "endDate": flags.endDate, "reduceCost": flags.reduceCost, "tort": flags.tort, "minSalesVolume30": flags.minSalesVolume30, "maxSalesVolume30": flags.maxSalesVolume30, "hjreserve4": flags.hjreserve4, "hjreserve6": flags.hjreserve6, "priceflag": flags.priceflag, "forbidPlatformIdList": toArray(flags.forbidPlatformIdList, 'string'), "applicablePlatformList": toArray(flags.applicablePlatformList, 'string'), "minWeight": flags.minWeight, "maxWeight": flags.maxWeight, "minCostPrice": flags.minCostPrice, "maxCostprice": flags.maxCostprice, "minreserve14": flags.minreserve14, "maxreserve14": flags.maxreserve14, "storageNew": flags.storageNew, "applicableSiteList": toArray(flags.applicableSiteList, 'string'), "productTagList": toArray(flags.productTagList, 'string'), "notContainsProductTagList": toArray(flags.notContainsProductTagList, 'string'), "riskLevel": flags.riskLevel, "allBrandId": flags.allBrandId, "brandId": toArray(flags.brandId, 'string'), "allCertification": flags.allCertification, "certificationList": toArray(flags.certificationList, 'string'), "whitePublishShop": flags.whitePublishShop, "smallSection": flags.smallSection, "largeSection": flags.largeSection, "positionId": flags.positionId, "spotcheck": flags.spotcheck, "buyflag": flags.buyflag, "purchaseFlag": flags.purchaseFlag, "lowratecnt": flags.lowratecnt, "negativeRefundrate": flags.negativeRefundrate, "tkVideo": flags.tkVideo, "isAccount": flags.isAccount, "returns": flags.returns, "oper4": toArray(flags.oper4, 'string'), "isBoutique": flags.isBoutique, "keyWords": toArray(flags.keyWords, 'string'), "keyWords2": toArray(flags.keyWords2, 'string'), "isServeXnc": flags.isServeXnc, "notContainsKeyWords": toArray(flags.notContainsKeyWords, 'string'), "provinces": toArray(flags.provinces, 'string'), "citys": toArray(flags.citys, 'string'), "price5": toArray(flags.price5, 'string'), "specialmark": flags.specialmark, "myStatus": flags.myStatus, "result": flags.result, "advancedSpu": flags.advancedSpu, "oper": flags.oper, "pageSize": flags.pageSize, "keyWords3": toArray(flags.keyWords3, 'string'), "projectSpu": flags.projectSpu, "attentionSkuFlag": flags.attentionSkuFlag, "page": flags.page, "isTort": flags.isTort, "isVideo": flags.isVideo, "hasSpuLimitPrice": flags.hasSpuLimitPrice, "storagebinflag": flags.storagebinflag })
    this.output(data)
  }
}
