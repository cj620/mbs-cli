// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindLogisticsProviders extends MBSCommand {
  static description = '物流商下拉列表查询：物流跟进日志页加载时调用，无入参，返回全部物流商名称列表，用于填充“请选择物流商”下拉框。返回的 obj 数组每一项既作为 option 的 value 又作为显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindLogisticsProviders)

    const data = await this.client.post('/erpOrder/erpOrder/trackController/findLogisticsProviders', {})
    this.output(data)
  }
}
