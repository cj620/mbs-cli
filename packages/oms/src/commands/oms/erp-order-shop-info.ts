// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShopInfo extends MBSCommand {
  static description = '左侧店铺信息查询（shopInfo）：订单列表页左侧 Top100 店铺列表查询：按维度(待发量/今日单量)返回当前用户可见店铺集合，含店铺名称、所属平台ID、对应单量；前端用于渲染左侧店铺树并支持点击店铺过滤订单。'

  static flags = {
    orderType: Flags.string({ description: '店铺统计维度。orderstatus=待发量(按订单状态,默认)；ordertime=今日单量(按订单时间)。来源:左侧按钮#orderStatusType/#orderTimeType;未传参时默认orderstatus', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShopInfo)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/shopInfo', { "orderType": flags.orderType })
    this.output(data)
  }
}
