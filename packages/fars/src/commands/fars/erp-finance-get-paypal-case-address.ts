// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetPaypalCaseAddress extends MBSCommand {
  static description = '获取PayPal纠纷退货地址列表：PayPal纠纷(Case)处理详情页加载时调用，拉取当前账号可用的退货地址列表，用于退货并部分退款(PART_REFUND_RETURN)、退货并全额退款(FULL_REFUND_RETURN)的退货地址下拉选择(.refundAddress)。无请求参数，返回地址列表(每项含地址主键 sid 与地址展示内容 content)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetPaypalCaseAddress)

    const data = await this.client.post('/erpFinance/erpFinance/paypalcase/getPaypalCaseAddress', {})
    this.output(data)
  }
}
