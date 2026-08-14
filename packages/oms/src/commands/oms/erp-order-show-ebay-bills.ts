// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowEbayBills extends MBSCommand {
  static description = 'eBay账期(账单周期)列表查询：eBay账户费用对账页面初始化时调用，查询当前可选的eBay账单账期(账单周期)列表。返回值为账期字符串数组，前端用于渲染“选择账期”下拉框选项，并默认选中第一个账期后触发账单明细查询(search())。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowEbayBills)

    const data = await this.client.post('/erpOrder/erpOrder/ebayAccountFee/showEbayBills', {})
    this.output(data)
  }
}
