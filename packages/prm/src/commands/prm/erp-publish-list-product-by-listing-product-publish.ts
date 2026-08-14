// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListProductByListingProductPublish extends MBSCommand {
  static description = 'eBay刊登商品列表查询：eBay批量刊登页列表多维度分页查询：按生成时间/刊登时间区间、刊登状态、SKU、属性类型、站点、店铺、刊登人、价格区间、批量备注、退款、刊登结果等条件筛选，返回刊登商品(SPU)列表及其下 eBay SKU 明细、总条数与总页数。'

  static flags = {
    status: Flags.string({ description: '刊登状态。等待刊登Tab取#realStatus(空则默认\'等待刊登\')，刊登完毕Tab取#status' }),
    sku: Flags.string({ description: 'SKU编号关键词(#sku)' }),
    currentPage: Flags.string({ description: '当前页码。首次固定1，翻页取分页组件当前页', required: true }),
    vtype: Flags.string({ description: '商品属性类型(#property)。1=单属性;2=多属性' }),
    createTimeStart: Flags.string({ description: '生成时间-起始(#create-start-time，仅等待刊登Tab)' }),
    createTimeEnd: Flags.string({ description: '生成时间-结束(#create-end-time，仅等待刊登Tab)' }),
    publishTimeStart: Flags.string({ description: '刊登时间-起始(#time1，仅刊登完毕Tab)' }),
    publishTimeEnd: Flags.string({ description: '刊登时间-结束(#time2，仅刊登完毕Tab)' }),
    targetShops: Flags.string({ description: '目标(新)刊登店铺(#PublishedShop)' }),
    shopList: Flags.string({ description: '店铺列表(#shopName)' }),
    employeeId: Flags.string({ description: '刊登人/员工ID(#employeeList)' }),
    site: Flags.string({ description: '站点(#station)' }),
    batchMark: Flags.string({ description: '批量备注。等待刊登#batchMark，刊登完毕#batchMark2' }),
    productKeywords: Flags.string({ description: '产品关键词(#product_keywords，仅等待刊登Tab)' }),
    publishResponse: Flags.string({ description: '刊登结果/响应筛选(#publishResponse，仅刊登完毕Tab)' }),
    priceMax: Flags.string({ description: '价格上限(#priceMax)' }),
    priceMin: Flags.string({ description: '价格下限(#priceMin)' }),
    refundFlag: Flags.string({ description: '退款标记筛选(#refundFlag)' }),
    pagesize: Flags.string({ description: '每页条数。等待刊登#selectPagesize，刊登完毕#selectPagesize2(50/100/200/500，默认200)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListProductByListingProductPublish)

    const data = await this.client.post('/erpPublish/erpPublish/productPublish/listProductByListing', { "status": flags.status, "sku": flags.sku, "currentPage": flags.currentPage, "vtype": flags.vtype, "createTimeStart": flags.createTimeStart, "createTimeEnd": flags.createTimeEnd, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "targetShops": flags.targetShops, "shopList": flags.shopList, "employeeId": flags.employeeId, "site": flags.site, "batchMark": flags.batchMark, "product_keywords": flags.productKeywords, "publishResponse": flags.publishResponse, "priceMax": flags.priceMax, "priceMin": flags.priceMin, "refundFlag": flags.refundFlag, "pagesize": flags.pagesize })
    this.output(data)
  }
}
