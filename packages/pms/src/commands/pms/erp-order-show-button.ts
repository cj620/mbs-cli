// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpOrderShowButton extends MBSCommand {
  static description = '今日必做清零按钮显隐判断：客服工作台首页判断「保存今日清零结果」按钮是否显示：后端据当前登录人当日是否满足清零条件返回 obj=0/1，前端据此 show/hide 按钮。页面加载调用一次并每 30 秒轮询。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpOrderShowButton)

    const data = await this.client.post('/dev/erpOrder/erpOrder/saleFussionOrder/showButton', {})
    this.output(data)
  }
}
