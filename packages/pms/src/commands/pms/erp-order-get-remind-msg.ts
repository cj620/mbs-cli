// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpOrderGetRemindMsg extends MBSCommand {
  static description = '销售拜访卡-获取提醒消息：客服/销售工作台首页加载时拉取当前登录用户的提醒消息，返回提醒类型(color)与提醒文案(msg)，前端据 color 值以橙色警告条或绿色奖杯成功条的样式渲染到页面顶部 #getRemindMsg 区域，展示 5 秒后自动上滑隐藏。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpOrderGetRemindMsg)

    const data = await this.client.get('/dev/erpOrder/erpOrder/saleVistingCard/getRemindMsg', { params: {} })
    this.output(data)
  }
}
