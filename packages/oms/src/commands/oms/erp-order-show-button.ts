// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowButton extends MBSCommand {
  static description = '今日必做清零按钮是否显示：管理者驾驶舱(看板)加载后，查询当前登录人是否具备「今日必做清零」按钮显示权限/条件，返回 1 显示、0 隐藏，用于控制页面 .getsure(保存今日清零结果按钮及提示语)的显隐。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowButton)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/showButton', {})
    this.output(data)
  }
}
