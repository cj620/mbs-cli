// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetEbayCaseTaskClearDetail extends MBSCommand {
  static description = 'eBay Case/Return升级清理详情查询：客服工作台详情页「case/return升级」页签数据查询：按店铺/组员维度返回各时间段(表头)收到的 case/return 升级数与未处理升级数，并标记是否「忘清」。页面加载时无参调用，结果渲染到 #contentTemplate2。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetEbayCaseTaskClearDetail)

    const data = await this.client.post('/erpOrder/erpOrder/ebayCaseTask/getEbayCaseTaskClearDetail', {})
    this.output(data)
  }
}
