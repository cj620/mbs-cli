// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetExpressTypeList extends MBSCommand {
  static description = '物流方式列表查询：移动端「修改物流」页面进入时自动调用，查询可选的物流方式（快递类型）列表，用于渲染单选列表供用户选择并修改订单物流方式。无请求参数，返回物流方式数组（含ID与名称）。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetExpressTypeList)

    const data = await this.client.post('/erpMobile/erpMobile/pushController/getExpressTypeList', {})
    this.output(data)
  }
}
