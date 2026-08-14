// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindShop extends MBSCommand {
  static description = '店铺名称列表查询：订单详情页加载时调用，查询当前用户可见的店铺列表，用于渲染左侧导航「店铺」子菜单（每项可跳转到对应店铺的订单列表）。无请求参数，返回店铺ID与店铺名称。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindShop)

    const data = await this.client.post('/erpMobile/erpMobile/pushController/findShop', {})
    this.output(data)
  }
}
