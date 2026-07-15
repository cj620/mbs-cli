// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPublishDetailByShopnameEbayProductController extends MBSCommand {
  static description = '按店铺名查询eBay刊登统计数：eBay自动刊登管理页左侧店铺列表，展开某店铺时按店铺名查询该店铺下四类刊登状态的计数（等待刊登 waitnum、刊登成功 successnum、刊登失败 failnum、放弃刊登 giveupnum），回填到左侧店铺树对应徽标。删除SPU后也会重新调用刷新该店铺计数。'

  static flags = {
    shopname: Flags.string({ description: '店铺名（URL query 参数，eBay刊登店铺名称）。来源：左侧店铺树 li 的 data-shopname / 列表行 targetShop', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPublishDetailByShopnameEbayProductController)

    const data = await this.client.post('/erpProduct/erpProduct/ebayProductController/findPublishDetailByShopname', {}, { params: { "shopname": flags.shopname } })
    this.output(data)
  }
}
