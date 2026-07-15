// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListProductByListingLazadaPublish extends MBSCommand {
  static description = 'Lazada批量刊登-按Listing查询商品列表：Lazada批量刊登页商品列表分页查询：按刊登状态、商品属性、店铺、刊登人、站点、spu备注关键词、刊登时间区间等条件分页返回待刊登/已刊登SPU列表及子SKU明细。等待刊登Tab由search()调用、刊登完毕Tab由search2()调用，复用同一接口。'

  static flags = {
    status: Flags.string({ description: '刊登状态。等待刊登Tab取#realStatus(\'\'/刊登中/real等待刊登,空则默认\'等待刊登\')，刊登完毕Tab取#status(刊登完毕/刊登成功/刊登失败)' }),
    currentPage: Flags.string({ description: '当前页码，首次为1，翻页取分页组件当前页' }),
    vtype: Flags.string({ description: '商品属性，来源#property：0=全部,2=多属性,1=单属性' }),
    shopName: Flags.string({ description: '未刊登店铺名称，取#shopName的value(ebayShopId,ebayShopName)逗号分割第二段' }),
    shopId: Flags.string({ description: '未刊登店铺ID，取#shopName的value逗号分割第一段(ebayShopId)' }),
    employeeId: Flags.string({ description: '刊登人(员工)ID，来源#employeeList下拉(value=employee_id)' }),
    site: Flags.string({ description: '站点/国家，来源#station：PH/SG/MY/TH/ID/VN，\'\'=全部' }),
    productKeywords: Flags.string({ description: 'spu备注搜索关键词(仅等待刊登search()传，分页回调不回传)，来源#product_keywords' }),
    publishTimeStart: Flags.string({ description: '刊登开始时间(仅刊登完毕传)，来源#time1日期控件' }),
    publishTimeEnd: Flags.string({ description: '刊登结束时间(仅刊登完毕传)，来源#time2日期控件' }),
    targetShops: Flags.string({ description: '新刊登(目标)店铺(仅刊登完毕传)，来源#PublishedShop下拉(value=ebayShopName)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListProductByListingLazadaPublish)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaPublish/listProductByListing', { "status": flags.status, "currentPage": flags.currentPage, "vtype": flags.vtype, "shopName": flags.shopName, "shopId": flags.shopId, "employeeId": flags.employeeId, "site": flags.site, "product_keywords": flags.productKeywords, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "targetShops": flags.targetShops })
    this.output(data)
  }
}
