// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSpuImageAmazon extends MBSCommand {
  static description = '获取图片：获取图片'

  static flags = {
    dataType: Flags.integer({ description: '205.3.21 上线调试。区分新老数据，后期可以去掉' }),
    shopName: Flags.string({ description: '查询分类用的参数' }),
    mainCategory: Flags.string({ description: '主类目（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    parentCategoryId: Flags.string({ description: '父级类目ID（字段名推断,语义待核实）' }),
    categoryLevel: Flags.integer({ description: '类目级别（字段名推断,语义待核实）' }),
    categoryName: Flags.string({ description: '类目名称（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: '查询分类用的参数' }),
    productType: Flags.string({ description: '商品类型（字段名推断,语义待核实）' }),
    singleFlag: Flags.string({ description: 'single 单变体， multi 多变体' }),
    queryFlag: Flags.string({ description: '0 代表查询 非分类属性字段, 1代表查询 分类属性字段' }),
    queryCategory: Flags.string({ description: '查询分类属性, Required 重要属性, Preferred 首选属性, Optional 可选属性' }),
    queryCategoryList: Flags.string({ description: '查询类目列表（字段名推断,语义待核实） (comma-separated)' }),
    spuList: Flags.string({ description: '查询分类用的参数 (comma-separated)' }),
    status: Flags.integer({ description: '刊登状态' }),
    createBy: Flags.string({ description: '创建人' }),
    startDate: Flags.string({ description: '创建时间查询的开始时间' }),
    endDate: Flags.string({ description: '创建时间查询的结束时间' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    pricingChannel: Flags.string({ description: 'Pricing渠道（字段名推断,语义待核实）' }),
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    shopIdList: Flags.string({ description: '店铺ID列表（字段名推断,语义待核实） (comma-separated)' }),
    fieldName: Flags.string({ description: '查询分类用的参数' }),
    required: Flags.integer({ description: '0 不必填， 1必填' }),
    shopManagerList: Flags.string({ description: '店铺管理列表（字段名推断,语义待核实） (comma-separated)' }),
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）' }),
    requestId: Flags.string({ description: '请求ID（字段名推断,语义待核实）' }),
    requestIdList: Flags.string({ description: '请求ID列表（字段名推断,语义待核实） (comma-separated)' }),
    sites: Flags.string({ description: 'Sites（字段名推断,语义待核实） (comma-separated)' }),
    title: Flags.string({ description: '标题（字段名推断,语义待核实）' }),
    orderType: Flags.string({ description: '排序规则 ASC：升序；DESC：降序' }),
    orderFiled: Flags.string({ description: '排序属性' }),
    riskLevel: Flags.integer({ description: '风险级别（字段名推断,语义待核实）' }),
    defaultTemplates: Flags.string({ description: '默认Templates（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSpuImageAmazon)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/amazon/getSpuImage', { "dataType": flags.dataType, "shopName": flags.shopName, "mainCategory": flags.mainCategory, "site": flags.site, "parentCategoryId": flags.parentCategoryId, "categoryLevel": flags.categoryLevel, "categoryName": flags.categoryName, "spu": flags.spu, "productType": flags.productType, "singleFlag": flags.singleFlag, "queryFlag": flags.queryFlag, "queryCategory": flags.queryCategory, "queryCategoryList": toArray(flags.queryCategoryList, 'string'), "spuList": toArray(flags.spuList, 'string'), "status": flags.status, "createBy": flags.createBy, "startDate": flags.startDate, "endDate": flags.endDate, "sku": flags.sku, "pricingChannel": flags.pricingChannel, "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex, "shopIdList": toArray(flags.shopIdList, 'string'), "fieldName": flags.fieldName, "required": flags.required, "shopManagerList": toArray(flags.shopManagerList, 'string'), "id": flags.id, "requestId": flags.requestId, "requestIdList": toArray(flags.requestIdList, 'string'), "sites": toArray(flags.sites, 'string'), "title": flags.title, "orderType": flags.orderType, "orderFiled": flags.orderFiled, "riskLevel": flags.riskLevel, "defaultTemplates": toArray(flags.defaultTemplates, 'string') })
    this.output(data)
  }
}
