// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetRemindMsg extends MBSCommand {
  static description = '销售名片-获取提醒消息：业务员仪表盘(salesman2.html)首屏加载时调用，获取当前登录业务员的提醒消息(销售名片提醒)。返回提醒类型(color)与提醒文本(msg)，前端据 color 渲染为黄色警告或绿色成功提示条，15 秒后自动收起。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetRemindMsg)

    const data = await this.client.get('/erpOrder/erpOrder/saleVistingCard/getRemindMsg', { params: {} })
    this.output(data)
  }
}
