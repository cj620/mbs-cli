// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpaccountLastLogininfo extends MBSCommand {
  static description = '上次登录信息查询：客服工作台首页加载时查询当前登录用户的“上次登录信息”，用于在页面顶部弹出安全提醒条（不同 loginType 对应 成功/警告/危险 三种样式），5 秒后自动收起。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpaccountLastLogininfo)

    const data = await this.client.get('/dev/erpaccount/erpaccount/dashboard/lastLogininfo', { params: {} })
    this.output(data)
  }
}
