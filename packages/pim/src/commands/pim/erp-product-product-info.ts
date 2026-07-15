// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductProductInfo extends MBSCommand {
  static description = '商品(SKU)极致版列表查询：商品极致版页面 SKU 维度分页查询：按类目、11种关键词类型、售卖/销量/产品状态、开发员/采购员、开发时间区间、库存/销量/重量/成本区间、国家/平台、黑马、抽检/轻小件/采样、站点等数十项筛选，返回 SKU 列表及毛利/退款/销量/库存/刊登率等汇总字段。'

  static flags = {
    categoryId2: Flags.string({ description: '二级分类(子分类 sequenceid 数组；未选具体子类时回填该一级类下全部子类ID) (comma-separated)' }),
    sku: Flags.string({ description: '关键词-按SKU查询(seekType=SKU)' }),
    sonSku: Flags.string({ description: '关键词-按子SKU查询(seekType=子SKU)' }),
    manufacture: Flags.string({ description: '关键词-按供应商查询(seekType=供应商)' }),
    proName: Flags.string({ description: '关键词-按产品名查询(seekType=proName)' }),
    batchSku: Flags.string({ description: '关键词-按批量SKU查询(seekType=batchSku，逗号分隔)' }),
    productName: Flags.string({ description: '关键词-按商品名称/关键字查询(seekType=productName)' }),
    englishTitle: Flags.string({ description: '关键词-按英文标题模糊查询(seekType=englishTitle)' }),
    fuzzyQuery: Flags.string({ description: '关键词-全文模糊查询(seekType=fuzzy)' }),
    location: Flags.string({ description: '关键词-按仓位编码查询(seekType=location)' }),
    spu: Flags.string({ description: '关键词-按SPU查询(默认/seekType=SPU)' }),
    sellingStatus: Flags.string({ description: '售卖状态(超爆/爆/旺/平/滞等)' }),
    salesStatus: Flags.string({ description: '销量状态(多选逗号拼接)' }),
    status: Flags.string({ description: '产品状态(正常/清仓/停产/暂停销售等)' }),
    orderBy: Flags.string({ description: '降序排序字段(flag=6 时取 localStorage ranks)' }),
    buyer: Flags.string({ description: '采购员' }),
    savenum1: Flags.string({ description: '库存(最小值)' }),
    savenum2: Flags.string({ description: '库存(最大值)' }),
    propertiesid: Flags.string({ description: '商品属性(多选逗号拼接)' }),
    startDate: Flags.string({ description: '开发时间-起始' }),
    endDate: Flags.string({ description: '开发时间-结束' }),
    reduceCost: Flags.string({ description: '降本筛选' }),
    tort: Flags.string({ description: '侵权筛选' }),
    oper: Flags.string({ description: '开发员' }),
    minSalesVolume30: Flags.string({ description: '近30天销量-最小' }),
    maxSalesVolume30: Flags.string({ description: '近30天销量-最大' }),
    hjreserve4: Flags.string({ description: '国家(国王榜)' }),
    hjreserve6: Flags.string({ description: '平台(国王榜)' }),
    priceflag: Flags.string({ description: '是否黑马' }),
    minWeight: Flags.string({ description: '重量-最小' }),
    maxWeight: Flags.string({ description: '重量-最大' }),
    minCostPrice: Flags.string({ description: '成本-最小' }),
    maxCostprice: Flags.string({ description: '成本-最大' }),
    site: Flags.string({ description: '站点' }),
    spotcheck: Flags.string({ description: '是否已抽检(1/空)' }),
    buyflag: Flags.string({ description: '是否轻小件(1/空)' }),
    purchaseFlag: Flags.string({ description: '是否采样备货(1/空)' }),
    positionId: Flags.string({ description: '岗位ID(取自 localStorage)' }),
    pageSize: Flags.string({ description: '每页条数', required: true }),
    page: Flags.string({ description: '当前页码(首次为1，翻页取当前页)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductProductInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/product/productInfo', { "categoryId2": toArray(flags.categoryId2, 'string'), "sku": flags.sku, "sonSku": flags.sonSku, "manufacture": flags.manufacture, "proName": flags.proName, "batchSku": flags.batchSku, "productName": flags.productName, "englishTitle": flags.englishTitle, "fuzzyQuery": flags.fuzzyQuery, "location": flags.location, "spu": flags.spu, "sellingStatus": flags.sellingStatus, "salesStatus": flags.salesStatus, "status": flags.status, "orderBy": flags.orderBy, "buyer": flags.buyer, "savenum1": flags.savenum1, "savenum2": flags.savenum2, "propertiesid": flags.propertiesid, "startDate": flags.startDate, "endDate": flags.endDate, "reduceCost": flags.reduceCost, "tort": flags.tort, "oper": flags.oper, "minSalesVolume30": flags.minSalesVolume30, "maxSalesVolume30": flags.maxSalesVolume30, "hjreserve4": flags.hjreserve4, "hjreserve6": flags.hjreserve6, "priceflag": flags.priceflag, "minWeight": flags.minWeight, "maxWeight": flags.maxWeight, "minCostPrice": flags.minCostPrice, "maxCostprice": flags.maxCostprice, "site": flags.site, "spotcheck": flags.spotcheck, "buyflag": flags.buyflag, "purchaseFlag": flags.purchaseFlag, "positionId": flags.positionId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
