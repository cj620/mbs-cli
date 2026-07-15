// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindShop2 extends MBSCommand {
  static description = '按店铺名称查询店铺列表：移动端「按店铺搜索」页面：根据店铺名称关键词(shopName，以 URL 查询参数传递)模糊查询当前用户可见的店铺列表，返回店铺集合(店铺ID + 店铺名称)，前端用 art-template 渲染列表并跳转到对应店铺订单列表页。页面首次加载与上拉加载更多均调用本接口。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称模糊搜索关键词。来源：搜索输入框 #keyword(placeholder「订单ID/交易ID/卖家ID/SKU 模糊搜索」)；以 URL 查询参数传递；为空时传空串，后端返回全部可见店铺' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindShop2)

    const data = await this.client.post('/erpMobile/erpMobile/pushController/findShop2', {}, { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
