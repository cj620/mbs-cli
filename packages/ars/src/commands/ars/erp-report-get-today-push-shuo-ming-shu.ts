// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetTodayPushShuoMingShu extends MBSCommand {
  static description = '平台推送说明书(推送逻辑)查询：「平台刊登推送表」页面初始化时拉取各平台的推送逻辑/说明书内容列表；用于查看气泡展示与编辑弹窗回显。POST 无请求体。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetTodayPushShuoMingShu)

    const data = await this.client.post('/erpReport/erpReport/todayPushTeam/getTodayPushShuoMingShu', {})
    this.output(data)
  }
}
