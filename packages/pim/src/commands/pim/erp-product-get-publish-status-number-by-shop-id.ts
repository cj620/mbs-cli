// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPublishStatusNumberByShopId extends MBSCommand {
  static description = '按店铺查询刊登状态数量：亚马逊自动刊登(确认)页面，左侧店铺列表点击某店铺展开时调用，按店铺ID统计该店铺的「等待刊登/刊登成功/刊登失败/放弃刊登」四类商品数量，回填到侧边栏对应徽标。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID(URL查询参数 ?shopId=)。来源：侧边店铺列表 <li data-shopid>，即接口 findPublishShop 返回的 shopInfoList[].shopId。用于指定统计哪个店铺的刊登状态数量', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPublishStatusNumberByShopId)

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/getPublishStatusNumberByShopId', { "shopId": flags.shopId })
    this.output(data)
  }
}
