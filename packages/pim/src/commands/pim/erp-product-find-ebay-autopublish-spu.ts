// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindEbayAutopublishSpu extends MBSCommand {
  static description = 'eBay自动刊登SPU列表查询：eBay自动刊登页面主列表查询：按店铺/刊登状态/产品状态/销量级别/站点/SPU编码等条件分页查询待刊登及已刊登的 SPU 刊登任务，返回 SPU 行及其下的 SKU 刊登明细列表(ebayPublishSku)。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码(分页，首次为1)', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定50)', required: true }),
    targetShop: Flags.string({ description: '目标店铺名(左侧店铺状态点击设置)' }),
    publishResult: Flags.string({ description: '刊登结果筛选(等待刊登/刊登成功/刊登失败/放弃刊登)' }),
    topShopname: Flags.string({ description: '顶部店铺筛选(店铺名，来源 #shopName)' }),
    publishStatus: Flags.string({ description: '刊登状态(来源 #onlineStatus)。0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登' }),
    spu: Flags.string({ description: 'SPU编码(关键词，来源 #keyword)' }),
    spuProductStatus: Flags.string({ description: '产品状态(来源 #status)。正常/清仓/停产/自动创建/暂停销售' }),
    spuSalesLevel: Flags.string({ description: '销量级别(来源 #salesStatus，值为 typeName，如 超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品)' }),
    site: Flags.string({ description: '站点(来源 #site，选项由 ebayPublishSite 动态填充)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindEbayAutopublishSpu)

    const data = await this.client.post('/erpProduct/erpProduct/ebayProductController/findEbayAutopublishSpu', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "targetShop": flags.targetShop, "publishResult": flags.publishResult, "topShopname": flags.topShopname, "publishStatus": flags.publishStatus, "spu": flags.spu, "spuProductStatus": flags.spuProductStatus, "spuSalesLevel": flags.spuSalesLevel, "site": flags.site })
    this.output(data)
  }
}
