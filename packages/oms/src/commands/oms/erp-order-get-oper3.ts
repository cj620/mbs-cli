// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetOper3 extends MBSCommand {
  static description = '高级搜索-开发员下拉数据查询：订单列表页「高级搜索」弹窗中，初始化「开发员」(#selloper)下拉框选项。返回当前用户可选的开发员(销售开发员)名称列表；前端用 art-template selloperTemplate 遍历 obj 渲染为 option，并对 #selloper 启用 select2。无任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetOper3)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getOper3', {})
    this.output(data)
  }
}
