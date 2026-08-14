// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetPersonInfo extends MBSCommand {
  static description = '当前登录人业绩信息查询：订单列表页加载时调用，获取当前登录人头像及当月业绩汇总(营业额、总毛利额、总毛利率)，渲染到页面左上角用户信息区(.user-head)。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetPersonInfo)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getPersonInfo', {})
    this.output(data)
  }
}
