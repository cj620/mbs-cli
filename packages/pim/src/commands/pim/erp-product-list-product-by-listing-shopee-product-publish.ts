// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListProductByListingShopeeProductPublish extends MBSCommand {
  static description = 'Shopee刊登商品列表查询(按Listing)：Shopee商品刊登管理页面列表查询：按刊登状态(等待刊登/刊登完毕)、商品属性、店铺、刊登人、站点、SPU、批量备注、风险预警、刊登时间区间等条件分页查询，返回商品(含子SKU)刊登信息列表、总数与总页数。'

  static flags = {
    status: Flags.string({ description: '刊登状态。等待刊登Tab取#realStatus(空→默认等待刊登;刊登中;real等待刊登);刊登完毕Tab取#status(刊登完毕/刊登成功/刊登失败)' }),
    currentPage: Flags.string({ description: '当前页码。首次查询固定为1;分页回调取api.getCurrent()' }),
    vtype: Flags.string({ description: '商品属性。0=全部,2=多属性,1=单属性(来源#property)' }),
    shopName: Flags.string({ description: '店铺(名称)。首次取#shopName.val();分页取shops.split(\',\')[1]' }),
    shopId: Flags.string({ description: '店铺ID。仅分页回调传,取shops.split(\',\')[0](来源#shopName)' }),
    employeeId: Flags.string({ description: '刊登人(员工ID,来源#employeeList)' }),
    site: Flags.string({ description: '站点。空=全部;PH/SG/MY/TH/ID/VN/BR/MX/TW等(来源#station)' }),
    publishTimeStart: Flags.string({ description: '刊登开始时间。仅刊登完毕Tab传(来源#time1)' }),
    publishTimeEnd: Flags.string({ description: '刊登结束时间。仅刊登完毕Tab传(来源#time2)' }),
    targetShops: Flags.string({ description: '新刊登(目标)店铺。仅刊登完毕Tab传(来源#PublishedShop)' }),
    spu: Flags.string({ description: 'SPU编号(按SPU过滤,来源#spuName)' }),
    submitContent: Flags.string({ description: '批量备注/批注(按提交内容过滤,来源#batchNote)' }),
    includeRiskwarning: Flags.string({ description: '是否含风险预警。空=全部,1=有风险,0=无风险(来源#riskwarning)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListProductByListingShopeeProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/listProductByListing', { "status": flags.status, "currentPage": flags.currentPage, "vtype": flags.vtype, "shopName": flags.shopName, "shopId": flags.shopId, "employeeId": flags.employeeId, "site": flags.site, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "targetShops": flags.targetShops, "spu": flags.spu, "submitContent": flags.submitContent, "includeRiskwarning": flags.includeRiskwarning })
    this.output(data)
  }
}
