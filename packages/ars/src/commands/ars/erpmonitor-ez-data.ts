// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorEzData extends MBSCommand {
  static description = 'EZBuy 商品/订单汇总统计查询：EZBuy 商品 & 订单报表页面加载时调用，查询平台维度的汇总统计数据：平台总商品数、平台总订单数、当日订单数，回填到页面头部的三个统计标签。前端不传任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorEzData)

    const data = await this.client.post('/erpmonitor/erpmonitor/ezbuy/ezData', {})
    this.output(data)
  }
}
