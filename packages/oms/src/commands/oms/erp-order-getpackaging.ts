// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetpackaging extends MBSCommand {
  static description = '包材(包装材料)下拉列表查询：订单详情页编辑时加载“包材(包装材料)”下拉框的可选项列表。无请求参数，POST 空 body；返回全部包材选项(ID/NAME)，前端用 art-template 渲染为 option 并用 select2 美化，同时把当前订单的 packagingid 设为选中值。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetpackaging)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getpackaging', {})
    this.output(data)
  }
}
