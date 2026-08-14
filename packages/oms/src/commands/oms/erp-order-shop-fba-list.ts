// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShopFbaList extends MBSCommand {
  static description = '店铺(FBA)列表查询：订单详情页进入「修改」编辑态时调用，拉取当前可选店铺列表，用于渲染所属店铺下拉框(select2)。接口无请求参数，返回店铺名称集合。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShopFbaList)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/shopFbaList', {})
    this.output(data)
  }
}
