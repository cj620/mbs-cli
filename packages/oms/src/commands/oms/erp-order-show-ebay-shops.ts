// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowEbayShops extends MBSCommand {
  static description = 'eBay店铺账期-查询店铺下拉列表：eBay 账期费用报表页(ebayRecking)进入时调用，查询当前登录用户可见的 eBay 店铺列表，用于渲染「店铺名」下拉框。POST 无请求体；返回 obj 为店铺数组，每项含 shopId 与 shopName。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowEbayShops)

    const data = await this.client.post('/erpOrder/erpOrder/ebayAccountFee/showEbayShops', {})
    this.output(data)
  }
}
