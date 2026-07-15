// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishFindShopeeAutopublishSpu extends MBSCommand {
  static description = 'Shopee自动刊登SPU列表查询：Shopee 自动刊登管理页右侧 SPU 列表分页查询：按目标店铺、刊登状态、SPU关键词、产品状态、销量级别、站点等条件筛选，返回待刊登/刊登中/已刊登的 SPU 列表（含每个 SPU 下的 SKU 明细、价格、库存、刊登状态等），并返回总数与总页数用于分页。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码（num=1 取 baseData.currentPage，num=2 取 baseData.leftcurrentPage，分页回调更新，默认1）', required: true }),
    pageSize: Flags.string({ description: '每页条数（前端固定传 50）', required: true }),
    targetShop: Flags.string({ description: '目标店铺（来自侧边店铺点击 searchStatus 设置的 baseData.targetShop；num=1 时清空）' }),
    publishResult: Flags.string({ description: '刊登状态结果（来自侧边状态点击 baseData.onlineResult，枚举：等待刊登/刊登成功/刊登失败/放弃刊登；num=1 时清空）' }),
    topShopname: Flags.string({ description: '顶部店铺名筛选（来源控件 #shopName 下拉，select2）' }),
    publishStatus: Flags.string({ description: '刊登状态筛选（来源控件 #onlineStatus 下拉）' }),
    spu: Flags.string({ description: 'SPU 编码关键词（来源控件 #keyword 输入框）' }),
    spuProductStatus: Flags.string({ description: '产品状态筛选（来源控件 #status 下拉）' }),
    spuSalesLevel: Flags.string({ description: '销量级别筛选（来源控件 #salesStatus 下拉，枚举：超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品）' }),
    site: Flags.string({ description: '站点筛选（来源控件 #site 下拉，如 TH/VN/MX/PH/SG/MY/ID/BR 等）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishFindShopeeAutopublishSpu)

    const data = await this.client.post('/erpPublish/erpPublish/shopeeProductController/findShopeeAutopublishSpu', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "targetShop": flags.targetShop, "publishResult": flags.publishResult, "topShopname": flags.topShopname, "publishStatus": flags.publishStatus, "spu": flags.spu, "spuProductStatus": flags.spuProductStatus, "spuSalesLevel": flags.spuSalesLevel, "site": flags.site })
    this.output(data)
  }
}
