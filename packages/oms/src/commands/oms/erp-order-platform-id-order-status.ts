// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderPlatformIdOrderStatus extends MBSCommand {
  static description = '获取销售大酋长列表(getBigChief2)：平台流量监控/看板页面进入或切换平台时，按「订单状态 + 平台ID」两个路径参数查询销售大酋长(店铺管理者)列表，用于填充页面顶部「-大酋长-」多选下拉(#shopManager)。返回数组，每项含大酋长 id 与 name。'

  static flags = {}

  static args = {
    orderStatus: Args.string({ required: true, description: '路径参数1-订单状态。当前前端硬编码传 \'1\'；历史取自订单状态控件 #orderStaus(已注释)，具体枚举待人工确认' }),
    platformId: Args.string({ required: true, description: '路径参数2-平台ID。取自平台下拉 #platformId，枚举：1=ebay、89=SeeBee；下拉无值时前端传 0' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(OmsErpOrderPlatformIdOrderStatus)

    const data = await this.client.get(`/erpOrder/erpOrder/saleReport/getBigChief2/${args.orderStatus}/${args.platformId}`, { params: {} })
    this.output(data)
  }
}
