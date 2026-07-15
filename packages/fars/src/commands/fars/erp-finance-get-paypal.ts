// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetPaypal extends MBSCommand {
  static description = '获取PayPal账号列表(下拉数据)：PayPal纠纷Case列表页初始化时调用，获取全部可筛选的PayPal账号及其对应Case数量，用于渲染页面顶部"请选择paypal账号"多选下拉框(#paypal)的选项。每个选项展示为 账号名称(数量)。该接口无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetPaypal)

    const data = await this.client.post('/erpFinance/erpFinance/paypalcase/getPaypal', {})
    this.output(data)
  }
}
