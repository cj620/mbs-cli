// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 995055f1ed30462b9fba78171d75c93b5c1ad4d546c8bf3a02d98360813fa352
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ProductErpProductProduct extends MBSCommand {
  static description = '商品(SPU)列表查询：商品中心SPU列表多维度分页查询：支持类目、11种关键词类型、销量/售卖/产品状态、开发员、时间区间、店铺、属性、抽检/轻小件/采样等数十项筛选，返回SPU列表及销量/毛利/平台等汇总字段。'

  static flags = {
    categoryId: Flags.string({ description: '商品分类ID(类目级联最后一级 sequenceid)' }),
    levelNum: Flags.string({ description: '分类层级数(类目级联选择的层级)' }),
    sku: Flags.string({ description: '关键词-按SKU查询(搜索类型=SKU时)' }),
    sonSku: Flags.string({ description: '关键词-按子SKU查询' }),
    spu: Flags.string({ description: '关键词-按SPU查询' }),
    manufacture: Flags.string({ description: '关键词-按供应商查询' }),
    proName: Flags.string({ description: '关键词-按产品名查询' }),
    productName: Flags.string({ description: '关键词-按商品名称查询' }),
    englishTitle: Flags.string({ description: '关键词-按英文标题查询' }),
    batchSku: Flags.string({ description: '关键词-按批量SKU查询' }),
    proNameForAny: Flags.string({ description: '关键词-按产品名模糊(任意)查询' }),
    fuzzyQuery: Flags.string({ description: '关键词-全文模糊查询' }),
    location: Flags.string({ description: '关键词-按仓位查询' }),
    salesStatus: Flags.string({ description: '销量状态(多选逗号拼接)' }),
    skuStatus: Flags.string({ description: '产品状态(SKU状态,多选逗号拼接)' }),
    sellingStatus: Flags.string({ description: '售卖状态(超爆/爆/旺/平/滞等)' }),
    status: Flags.string({ description: '产品状态(多选逗号拼接)' }),
    oper: Flags.string({ description: '开发员(多选逗号拼接)' }),
    buyer: Flags.string({ description: '采购员(当前固定传空)' }),
    orderBy: Flags.string({ description: '排序字段(降序排序选择)' }),
    startDate: Flags.string({ description: '开发时间-起始' }),
    endDate: Flags.string({ description: '开发时间-结束' }),
    publishStartTime: Flags.string({ description: '刊登时间-起始' }),
    publishEndTime: Flags.string({ description: '刊登时间-结束' }),
    saleStartTime: Flags.string({ description: '销售时间-起始' }),
    saleEndTime: Flags.string({ description: '销售时间-结束' }),
    reduceCost: Flags.string({ description: '降本筛选' }),
    tort: Flags.string({ description: '侵权筛选' }),
    shopIdList: Flags.string({ description: '店铺(店铺ID列表)' }),
    propertiesid: Flags.string({ description: '商品属性(多选逗号拼接)' }),
    spotcheck: Flags.string({ description: '是否已抽检' }),
    tkVideo: Flags.string({ description: '是否有TikTok视频(固定\'2\'时)' }),
    buyflag: Flags.string({ description: '是否轻小件' }),
    purchaseFlag: Flags.string({ description: '是否采样备货' }),
    isAll: Flags.string({ description: '是否查看全公司(1=全公司,0=本人)' }),
    searchCompanyId: Flags.string({ description: '公司ID(按公司过滤)' }),
    isAccount: Flags.string({ description: '是否账期供应商(当前固定传空)' }),
    positionId: Flags.string({ description: '岗位ID(取自 localStorage)' }),
    pageSize: Flags.string({ description: '每页条数' }),
    page: Flags.string({ description: '当前页码(固定从1开始)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ProductErpProductProduct)

    const data = await this.client.post('/erpProduct/erpProduct/product/product', { "categoryId": flags.categoryId, "levelNum": flags.levelNum, "sku": flags.sku, "sonSku": flags.sonSku, "spu": flags.spu, "manufacture": flags.manufacture, "proName": flags.proName, "productName": flags.productName, "englishTitle": flags.englishTitle, "batchSku": flags.batchSku, "proNameForAny": flags.proNameForAny, "fuzzyQuery": flags.fuzzyQuery, "location": flags.location, "salesStatus": flags.salesStatus, "skuStatus": flags.skuStatus, "sellingStatus": flags.sellingStatus, "status": flags.status, "oper": flags.oper, "buyer": flags.buyer, "orderBy": flags.orderBy, "startDate": flags.startDate, "endDate": flags.endDate, "publishStartTime": flags.publishStartTime, "publishEndTime": flags.publishEndTime, "saleStartTime": flags.saleStartTime, "saleEndTime": flags.saleEndTime, "reduceCost": flags.reduceCost, "tort": flags.tort, "shopIdList": flags.shopIdList, "propertiesid": flags.propertiesid, "spotcheck": flags.spotcheck, "tkVideo": flags.tkVideo, "buyflag": flags.buyflag, "purchaseFlag": flags.purchaseFlag, "isAll": flags.isAll, "searchCompanyId": flags.searchCompanyId, "isAccount": flags.isAccount, "positionId": flags.positionId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
