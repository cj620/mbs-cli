// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderPlatformList extends MBSCommand {
  static description = '平台下拉列表查询：订单列表页初始化时加载所有平台，用于填充顶部筛选区"平台"下拉框(#platformList)。无入参，返回平台集合(序号ID + 平台名称)，前端通过 art-template 渲染为 <option>。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderPlatformList)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/platformList', {})
    this.output(data)
  }
}
