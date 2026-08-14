// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetShopSaleInfo extends MBSCommand {
  static description = '店铺昨日销售表现查询：销售看板（销售名片页）右侧 店铺昨日表现 卡片数据源。页面加载时无参 GET 调用，返回当前用户可见店铺列表，每个店铺含昨日销售额、订单量、在线量、动销率、缺货率、按时发货率、退款金额及各自的环比涨跌幅，由 #ShopSaleTemplate 循环渲染。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetShopSaleInfo)

    const data = await this.client.get('/erpOrder/erpOrder/saleVistingCard/getShopSaleInfo', { params: {} })
    this.output(data)
  }
}
