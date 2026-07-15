// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindMonthPlatformPerformance extends MBSCommand {
  static description = '平台绩效月报-获取各月度统计起始时间：平台绩效月报页面初始化调用，返回近7个月（本月、上月、上上月、上三月~上六月）的统计起始时间数组obj，前端逐个写入sessionStorage并作为后续findPlatformPerformance的starttime入参。请求体为空（data被注释）。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindMonthPlatformPerformance)

    const data = await this.client.post('/erpOrder/erpOrder/platformPerformance/findMonth', {})
    this.output(data)
  }
}
