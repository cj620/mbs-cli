// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetShopManager extends MBSCommand {
  static description = '获取店长信息：PayPal纠纷(Case)列表页初始化时调用，无入参，返回当前可选的店长名称列表，用于填充顶部"店长"多选下拉框(#shopManager)，作为列表查询的筛选条件来源。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetShopManager)

    const data = await this.client.post('/erpFinance/erpFinance/paypalcase/getShopManager', {})
    this.output(data)
  }
}
