// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindOrderDetails extends MBSCommand {
  static description = '订单详情查询：移动端订单详情页加载接口：根据订单ID(orderid)查询单个订单的完整详情，返回订单状态/属性/物流、客户信息、SKU商品明细列表、金额(毛利/实收/运费/平台交易费)及店铺/时间等信息，供详情页渲染。'

  static flags = {
    orderid: Flags.string({ description: '订单ID(订单主键)。来源：页面URL查询参数，经 GetQueryString(\'orderid\') 取得后拼接到接口URL末尾；为查询单条订单详情的唯一定位键', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindOrderDetails)

    const data = await this.client.post('/erpMobile/erpMobile/pushController/findOrderDetails', {}, { params: { "orderid": flags.orderid } })
    this.output(data)
  }
}
