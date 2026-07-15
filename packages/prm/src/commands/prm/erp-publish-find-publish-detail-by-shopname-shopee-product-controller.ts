// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishFindPublishDetailByShopnameShopeeProductController extends MBSCommand {
  static description = '店铺刊登状态数量统计查询：Shopee 自动刊登页面，按店铺名称查询该店铺「等待刊登/刊登成功/刊登失败/放弃刊登」四类数量，回填到店铺左侧统计标签；删除/放弃刊登成功后重新调用以刷新数量。'

  static flags = {
    shopname: Flags.string({ description: '店铺名称（URL Query 参数）。来源：店铺列表模板 data-shopname={{v.shopname}}，展开店铺/删除刷新时传入', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishFindPublishDetailByShopnameShopeeProductController)

    const data = await this.client.post('/erpPublish/erpPublish/shopeeProductController/findPublishDetailByShopname', {}, { params: { "shopname": flags.shopname } })
    this.output(data)
  }
}
