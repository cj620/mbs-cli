// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListProductByListingTiktokProductPublish extends MBSCommand {
  static description = 'TikTok刊登-按Listing查询商品列表：TikTok批量刊登页的商品(SPU)列表分页查询：按刊登状态、属性类型、店铺、刊登人、站点、SPU、批量备注、刊登时间区间、是否含风险预警等条件分页，返回SPU行(含子SKU列表 ebayPublishSkuVo)及刊登状态/毛利/店铺等字段。'

  static flags = {
    status: Flags.string({ description: '刊登状态。等待刊登Tab取 #realStatus 值，空时默认"等待刊登"；刊登完毕Tab取 #status 值' }),
    currentPage: Flags.string({ description: '当前页码。首查固定为1，翻页取分页控件 api.getCurrent()', required: true }),
    vtype: Flags.string({ description: '属性类型(单/多属性筛选)。来源 #property 下拉框(1=单属性，其余=多属性)' }),
    shopName: Flags.string({ description: '店铺名称。来源 #shopName 选中值逗号拆分第2段，无则空串' }),
    shopId: Flags.string({ description: '店铺ID。来源 #shopName 选中值逗号拆分第1段，无则空串' }),
    employeeId: Flags.string({ description: '刊登人(员工ID)。来源 #employeeList 下拉框' }),
    site: Flags.string({ description: '站点。来源 #station 下拉框' }),
    spu: Flags.string({ description: 'SPU编号(按SPU筛选)。来源 #spuName 输入框(findTaskReport翻页不带)' }),
    submitContent: Flags.string({ description: '批量备注(按备注筛选)。来源 #batchNote 输入框(findTaskReport翻页不带)' }),
    includeRiskwarning: Flags.string({ description: '是否包含风险预警。来源 #riskwarning 下拉框(仅首查发送)' }),
    publishTimeStart: Flags.string({ description: '刊登时间-起始。来源 #time1(仅刊登完毕发送)' }),
    publishTimeEnd: Flags.string({ description: '刊登时间-结束。来源 #time2(仅刊登完毕发送)' }),
    targetShops: Flags.string({ description: '目标店铺(刊登过的店铺)。来源 #PublishedShop(仅刊登完毕发送)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListProductByListingTiktokProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/tiktokProductPublish/listProductByListing', { "status": flags.status, "currentPage": flags.currentPage, "vtype": flags.vtype, "shopName": flags.shopName, "shopId": flags.shopId, "employeeId": flags.employeeId, "site": flags.site, "spu": flags.spu, "submitContent": flags.submitContent, "includeRiskwarning": flags.includeRiskwarning, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "targetShops": flags.targetShops })
    this.output(data)
  }
}
