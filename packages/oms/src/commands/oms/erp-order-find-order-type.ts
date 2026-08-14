// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindOrderType extends MBSCommand {
  static description = '查询自定义订单类型(下拉数据源)：订单详情页点击编辑时，加载「自定义类型」下拉框的可选项列表。返回全部自定义订单类型(ID+名称)，前端用 art-template 渲染为 select#findOrderType 的 option，并以当前订单的 ordertypeid 回显选中项。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindOrderType)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/findOrderType', {})
    this.output(data)
  }
}
