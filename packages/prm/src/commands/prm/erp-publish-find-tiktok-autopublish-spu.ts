// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishFindTiktokAutopublishSpu extends MBSCommand {
  static description = 'TikTok自动刊登SPU列表查询：TikTok自动刊登页（已刊登/待刊登）SPU分页列表查询：支持按目标店铺、刊登结果、店铺名称、刊登状态、SPU编码、产品状态、销量级别、站点等条件分页查询，返回SPU列表（含每个SPU下的刊登SKU明细、价格/毛利率、刊登状态、开发员等）。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码（来源 baseData.currentPage/leftcurrentPage，固定从1开始）', required: true }),
    pageSize: Flags.string({ description: '每页条数（前端固定传50）', required: true }),
    targetShop: Flags.string({ description: '目标店铺（左侧店铺状态筛选 searchStatus 时赋值，search(1)时清空）' }),
    publishResult: Flags.string({ description: '刊登结果（左侧状态筛选：等待刊登/刊登成功/刊登失败/放弃刊登）' }),
    topShopname: Flags.string({ description: '顶部店铺名称（下拉框 #shopName）' }),
    publishStatus: Flags.string({ description: '刊登状态（#onlineStatus）。0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登' }),
    spu: Flags.string({ description: 'SPU编码（关键词输入框 #keyword）' }),
    spuProductStatus: Flags.string({ description: '产品状态（#status）。正常/清仓/停产/自动创建/暂停销售' }),
    spuSalesLevel: Flags.string({ description: '销量级别（#salesStatus，选项由 getProductType 动态填充 typeName）' }),
    site: Flags.string({ description: '站点（#site）。MY/TH/SG/PH/ID/VN/BR/TW' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishFindTiktokAutopublishSpu)

    const data = await this.client.post('/erpPublish/erpPublish/tiktokProductController/findTiktokAutopublishSpu', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "targetShop": flags.targetShop, "publishResult": flags.publishResult, "topShopname": flags.topShopname, "publishStatus": flags.publishStatus, "spu": flags.spu, "spuProductStatus": flags.spuProductStatus, "spuSalesLevel": flags.spuSalesLevel, "site": flags.site })
    this.output(data)
  }
}
