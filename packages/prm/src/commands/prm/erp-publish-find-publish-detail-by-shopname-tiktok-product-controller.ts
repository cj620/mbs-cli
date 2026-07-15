// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishFindPublishDetailByShopnameTiktokProductController extends MBSCommand {
  static description = '店铺刊登明细数量查询(按店铺名)：TikTok自动刊登页面左侧店铺树展开某店铺时调用，按店铺名称查询该店铺下「等待刊登/刊登成功/刊登失败/放弃刊登」四类数量，用于侧边店铺节点徽标展示。'

  static flags = {
    shopname: Flags.string({ description: '店铺名称(URL Query参数)。来源：左侧店铺树节点 data-shopname / 勾选行 data-shopname，用于按店铺过滤统计。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishFindPublishDetailByShopnameTiktokProductController)

    const data = await this.client.post('/erpPublish/erpPublish/tiktokProductController/findPublishDetailByShopname', {}, { params: { "shopname": flags.shopname } })
    this.output(data)
  }
}
