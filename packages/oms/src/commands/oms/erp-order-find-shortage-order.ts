// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindShortageOrder extends MBSCommand {
  static description = '缺货订单数量查询：移动端「必做清零」页面进入时(selgetSure()链式回调第7个)调用，查询当前用户「清仓停产缺货 / >=10天延迟」类待办订单数量，返回 obj.total 填充页面计数块 .odernum7。该接口无请求体，仅依赖登录态按当前用户统计。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindShortageOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findShortageOrder', {})
    this.output(data)
  }
}
