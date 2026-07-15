// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListProductByListingJoomProductPublish extends MBSCommand {
  static description = 'Joom刊登商品(Listing)列表查询：Joom批量刊登页面列表分页查询：等待刊登/刊登完毕两标签页共用，按刊登状态、商品属性、店铺、刊登人、站点、SPU备注、刊登时间区间、新刊登店铺等筛选，返回SPU行(含子SKU列表joomPublishSkuVo)、价格/毛利、店铺、刊登状态与时间等字段。'

  static flags = {
    status: Flags.string({ description: '刊登状态。等待刊登取#realStatus(空→\'等待刊登\'/\'刊登中\'/\'real等待刊登\')，刊登完毕取#status(\'刊登完毕\'/\'刊登成功\'/\'刊登失败\')' }),
    currentPage: Flags.string({ description: '当前页码。首查固定1，翻页取api.getCurrent()', required: true }),
    vtype: Flags.string({ description: '商品属性类型。来源#property。0=全部,2=多属性,1=单属性' }),
    shopName: Flags.string({ description: '店铺名称。#shopName值\'joomShopId,joomShopName\'拆分后[1]' }),
    shopId: Flags.string({ description: '店铺ID。#shopName值拆分后[0](joomShopId)' }),
    employeeId: Flags.string({ description: '刊登人ID。来源#employeeList(value=employee_id)' }),
    site: Flags.string({ description: '站点。$(\'#station\').val()；本页未见#station控件，多为空(待人工确认)' }),
    productKeywords: Flags.string({ description: 'SPU备注搜索关键词。来源#product_keywords。仅等待刊登首查search()携带' }),
    publishTimeStart: Flags.string({ description: '刊登时间-起始。来源#time1。仅刊登完毕search()携带' }),
    publishTimeEnd: Flags.string({ description: '刊登时间-结束。来源#time2。仅刊登完毕search2()携带' }),
    targetShops: Flags.string({ description: '新刊登(刊登过的)店铺。来源#PublishedShop(value=joomShopName)。仅刊登完毕分支携带' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListProductByListingJoomProductPublish)

    const data = await this.client.post('/erpPublish/erpPublish/joomProductPublish/listProductByListing', { "status": flags.status, "currentPage": flags.currentPage, "vtype": flags.vtype, "shopName": flags.shopName, "shopId": flags.shopId, "employeeId": flags.employeeId, "site": flags.site, "product_keywords": flags.productKeywords, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "targetShops": flags.targetShops })
    this.output(data)
  }
}
