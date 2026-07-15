// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetShopBill extends MBSCommand {
  static description = '平台店铺列表查询：财务-平台账单页中，平台下拉框 change 时触发，按所选平台名称查询其下全部店铺，返回店铺列表用于渲染「店铺」下拉框选项。'

  static flags = {
    platform: Flags.string({ description: '平台名称。取自页面「平台」下拉框 #Platform 的当前值，以查询字符串拼接在 URL 上；未选择时传空字符串。来源控件：#Platform select。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetShopBill)

    const data = await this.client.post('/erpFinance/erpFinance/bill/getShop', {}, { params: { "platform": flags.platform } })
    this.output(data)
  }
}
