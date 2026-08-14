// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderQueryConditions extends MBSCommand {
  static description = '订单查询条件(筛选项)下拉数据查询：订单列表页初始化时拉取“查询条件(filtertype)”下拉框的可选项列表，返回 key(提交值)/values(中文显示文案)，用于渲染 #queryConditions 选择器；用户选中后其 key 作为 filtertype 提交给订单列表查询接口。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderQueryConditions)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/queryConditions', {})
    this.output(data)
  }
}
