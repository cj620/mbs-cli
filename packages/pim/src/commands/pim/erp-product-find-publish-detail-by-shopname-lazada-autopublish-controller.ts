// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPublishDetailByShopnameLazadaAutopublishController extends MBSCommand {
  static description = '店铺刊登明细统计查询（按店铺名）：Lazada 自动刊登页面，左侧店铺列表点击展开某店铺时，按店铺名查询该店铺的刊登明细统计：等待刊登数、刊登成功数、刊登失败数、放弃刊登数，回填到对应店铺节点的徽标。'

  static flags = {
    shopname: Flags.string({ description: '店铺名（URL Query 参数）。来源：店铺列表项 data-shopname（shopNameTemplate 中 v.shopname），用于定位要统计的店铺', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPublishDetailByShopnameLazadaAutopublishController)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaAutopublishController/findPublishDetailByShopname', {}, { params: { "shopname": flags.shopname } })
    this.output(data)
  }
}
