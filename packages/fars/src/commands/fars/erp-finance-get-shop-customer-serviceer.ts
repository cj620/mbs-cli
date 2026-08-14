// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetShopCustomerServiceer extends MBSCommand {
  static description = '获取客服信息（店铺客服列表）：进入 PayPal 纠纷(Case)列表页时调用，拉取全部「店铺客服(客服服务员)」名称列表，用于渲染页面顶部「客服」多选下拉框(#shopCustomer)的可选项；用户选中的客服作为 shopCustomerServiceerList 参与 Case 列表查询及店铺联动查询。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetShopCustomerServiceer)

    const data = await this.client.post('/erpFinance/erpFinance/paypalcase/getShopCustomerServiceer', {})
    this.output(data)
  }
}
