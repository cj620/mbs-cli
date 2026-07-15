// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetClearDetail extends MBSCommand {
  static description = '差评任务清理详情查询：客服服务详情页「评价」Tab 加载时调用，按店铺×时间维度统计各店铺收到的差评数与剩余回复数，并标记是否「忘清」(未清理)，渲染为多列统计表格。页面 ready 时无参直接调用。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetClearDetail)

    const data = await this.client.post('/erpOrder/erpOrder/badCommentTask/getClearDetail', {})
    this.output(data)
  }
}
