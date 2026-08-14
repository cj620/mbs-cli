// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetPaypalCaseConstant extends MBSCommand {
  static description = '获取PayPal纠纷承运商常量(TRACK_NAME)：PayPal纠纷详情页加载时调用，获取"提供跟踪信息"时可选择的承运商(物流商)常量列表。URL中 TRACK_NAME 为固定常量类型标识。返回承运商列表渲染为 #paypalConstant 下拉框选项，供提交跟踪信息时填入 carrierName。无请求体参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetPaypalCaseConstant)

    const data = await this.client.post('/erpFinance/erpFinance/paypalcase/TRACK_NAME/getPaypalCaseConstant', {})
    this.output(data)
  }
}
