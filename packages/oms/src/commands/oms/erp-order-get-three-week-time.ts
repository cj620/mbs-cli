// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetThreeWeekTime extends MBSCommand {
  static description = '获取近三周时间区间(开发大酋长报表)：开发大酋长报表页面加载时自动调用，返回本周、上周、上上周三个时间标记(times)。前端将三者分别存入 sessionStorage(devthisweek/devlastweek/devbeforeweek)，作为后续 getDevelopRepoer 接口的 times 入参。本接口无请求参数(空请求体)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetThreeWeekTime)

    const data = await this.client.post('/erpOrder/erpOrder/developReport/getThreeWeekTime', {})
    this.output(data)
  }
}
