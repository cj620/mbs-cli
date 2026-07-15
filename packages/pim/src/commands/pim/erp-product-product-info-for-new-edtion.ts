// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductProductInfoForNewEdtion extends MBSCommand {
  static description = '我的关注商品数量查询：经理工作台首页通知区调用，以 attentionSkuFlag=1(只看我关注的SKU)、pageSize=1 触发商品信息分页查询(新版)，仅取返回 obj.count(关注商品总数)用于通知区计数展示。'

  static flags = {
    fuzzyQuery: Flags.string({ description: '全文模糊查询关键词(本次空)' }),
    hasSubmitSale: Flags.string({ description: '是否已提交销售(本次空)' }),
    salesStatus: Flags.string({ description: '销量状态(本次空)' }),
    status: Flags.string({ description: '产品状态(本次空)' }),
    orderBy: Flags.string({ description: '排序字段，固定 HJRESERVE9' }),
    buyer: Flags.string({ description: '采购员(本次空)' }),
    numType: Flags.string({ description: '数量类型，固定 1' }),
    savenum1: Flags.string({ description: '库存数量筛选下限(本次空)' }),
    savenum2: Flags.string({ description: '库存数量筛选上限(本次空)' }),
    propertiesid: Flags.string({ description: '商品属性ID(本次空)' }),
    startDate: Flags.string({ description: '开发时间-起始(本次空)' }),
    endDate: Flags.string({ description: '开发时间-结束(本次空)' }),
    reduceCost: Flags.string({ description: '降本筛选(本次空)' }),
    tort: Flags.string({ description: '侵权筛选(本次空)' }),
    minSalesVolume30: Flags.string({ description: '近30天销量下限(本次空)' }),
    maxSalesVolume30: Flags.string({ description: '近30天销量上限(本次空)' }),
    hjreserve4: Flags.string({ description: '预留字段4筛选(本次空)' }),
    hjreserve6: Flags.string({ description: '预留字段6筛选(本次空)' }),
    priceflag: Flags.string({ description: '价格标记筛选(本次空)' }),
    forbidPlatformIdList: Flags.string({ description: '禁售平台ID列表(本次空数组) (comma-separated)' }),
    brandId: Flags.string({ description: '品牌ID列表(本次空数组) (comma-separated)' }),
    applicablePlatformList: Flags.string({ description: '适用平台列表(本次空数组) (comma-separated)' }),
    minWeight: Flags.string({ description: '重量下限(本次空)' }),
    maxWeight: Flags.string({ description: '重量上限(本次空)' }),
    minCostPrice: Flags.string({ description: '成本价下限(本次空)' }),
    maxCostprice: Flags.string({ description: '成本价上限(本次空)' }),
    minreserve14: Flags.string({ description: '预留字段14下限(本次空)' }),
    maxreserve14: Flags.string({ description: '预留字段14上限(本次空)' }),
    storageNew: Flags.string({ description: '新库存筛选(本次空)' }),
    applicableSiteList: Flags.string({ description: '适用站点列表(本次空数组) (comma-separated)' }),
    productTagList: Flags.string({ description: '商品标签列表(本次空数组) (comma-separated)' }),
    notContainsProductTagList: Flags.string({ description: '不包含的商品标签列表(本次空数组) (comma-separated)' }),
    riskLevel: Flags.string({ description: '风险等级筛选(本次空)' }),
    whitePublishShop: Flags.string({ description: '白名单刊登店铺(本次空)' }),
    positionId: Flags.string({ description: '岗位ID，固定 99' }),
    spotcheck: Flags.string({ description: '是否已抽检(本次空)' }),
    buyflag: Flags.string({ description: '是否轻小件(本次空)' }),
    purchaseFlag: Flags.string({ description: '是否采样备货(本次空)' }),
    isAccount: Flags.string({ description: '是否账期供应商(本次空)' }),
    returns: Flags.string({ description: '退货筛选(本次空)' }),
    oper4: Flags.string({ description: '开发员筛选4(本次空数组) (comma-separated)' }),
    isBoutique: Flags.string({ description: '是否精品(本次空)' }),
    keyWords: Flags.string({ description: '关键词列表(本次空数组) (comma-separated)' }),
    keyWords2: Flags.string({ description: '关键词列表2(本次空数组) (comma-separated)' }),
    isServeXnc: Flags.string({ description: '是否服务小能虫/虚拟仓(本次空)' }),
    notContainsKeyWords: Flags.string({ description: '不包含的关键词列表(本次空数组) (comma-separated)' }),
    price5: Flags.string({ description: '价格区间5筛选(本次空数组) (comma-separated)' }),
    specialmark: Flags.string({ description: '特殊标记筛选(本次空)' }),
    myStatus: Flags.string({ description: '我的状态筛选(本次空)' }),
    result: Flags.string({ description: '结果筛选(本次空)' }),
    oper: Flags.string({ description: '开发员(本次空)' }),
    pageSize: Flags.string({ description: '每页条数，固定 1(仅取计数，不取列表)', required: true }),
    keyWords3: Flags.string({ description: '关键词列表3(本次空数组) (comma-separated)' }),
    projectSpu: Flags.string({ description: '项目SPU(本次空)' }),
    attentionSkuFlag: Flags.string({ description: '关注SKU标记，固定 1=只查询「我关注的」商品(本接口核心入参)', required: true }),
    page: Flags.string({ description: '当前页码，固定 1', required: true }),
    isVideo: Flags.string({ description: '是否有视频，固定 0' }),
    storagebinflag: Flags.string({ description: '仓位标记筛选(本次空)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductProductInfoForNewEdtion)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/product/productInfoForNewEdtion', { "fuzzyQuery": flags.fuzzyQuery, "hasSubmitSale": flags.hasSubmitSale, "salesStatus": flags.salesStatus, "status": flags.status, "orderBy": flags.orderBy, "buyer": flags.buyer, "numType": flags.numType, "savenum1": flags.savenum1, "savenum2": flags.savenum2, "propertiesid": flags.propertiesid, "startDate": flags.startDate, "endDate": flags.endDate, "reduceCost": flags.reduceCost, "tort": flags.tort, "minSalesVolume30": flags.minSalesVolume30, "maxSalesVolume30": flags.maxSalesVolume30, "hjreserve4": flags.hjreserve4, "hjreserve6": flags.hjreserve6, "priceflag": flags.priceflag, "forbidPlatformIdList": toArray(flags.forbidPlatformIdList, 'string'), "brandId": toArray(flags.brandId, 'string'), "applicablePlatformList": toArray(flags.applicablePlatformList, 'string'), "minWeight": flags.minWeight, "maxWeight": flags.maxWeight, "minCostPrice": flags.minCostPrice, "maxCostprice": flags.maxCostprice, "minreserve14": flags.minreserve14, "maxreserve14": flags.maxreserve14, "storageNew": flags.storageNew, "applicableSiteList": toArray(flags.applicableSiteList, 'string'), "productTagList": toArray(flags.productTagList, 'string'), "notContainsProductTagList": toArray(flags.notContainsProductTagList, 'string'), "riskLevel": flags.riskLevel, "whitePublishShop": flags.whitePublishShop, "positionId": flags.positionId, "spotcheck": flags.spotcheck, "buyflag": flags.buyflag, "purchaseFlag": flags.purchaseFlag, "isAccount": flags.isAccount, "returns": flags.returns, "oper4": toArray(flags.oper4, 'string'), "isBoutique": flags.isBoutique, "keyWords": toArray(flags.keyWords, 'string'), "keyWords2": toArray(flags.keyWords2, 'string'), "isServeXnc": flags.isServeXnc, "notContainsKeyWords": toArray(flags.notContainsKeyWords, 'string'), "price5": toArray(flags.price5, 'string'), "specialmark": flags.specialmark, "myStatus": flags.myStatus, "result": flags.result, "oper": flags.oper, "pageSize": flags.pageSize, "keyWords3": toArray(flags.keyWords3, 'string'), "projectSpu": flags.projectSpu, "attentionSkuFlag": flags.attentionSkuFlag, "page": flags.page, "isVideo": flags.isVideo, "storagebinflag": flags.storagebinflag })
    this.output(data)
  }
}
