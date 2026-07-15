// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountLastLogininfo extends MBSCommand {
  static description = '上次登录信息查询：仪表盘(common.html)加载后由 getmessageconfig() 成功回调触发 lastLogininfo()，GET 查询当前登录用户的上次登录信息（登录人、提示文案、IP、时间及提示级别），渲染到顶部告警条 #lastLogininfo，5秒后自动收起。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountLastLogininfo)

    const data = await this.client.get('/erpaccount/erpaccount/dashboard/lastLogininfo', { params: {} })
    this.output(data)
  }
}
