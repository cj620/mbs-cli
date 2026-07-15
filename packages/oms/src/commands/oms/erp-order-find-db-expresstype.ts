// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDbExpresstype extends MBSCommand {
  static description = '查询物流类型(渠道)下拉列表：查询数据库中全部物流类型(物流渠道)，用于「物流延迟」筛选区 #expressType 下拉框的数据源；前端在页面加载时调用 getExpressTypeList()，把返回的 obj 数组渲染为 <option>，option 的 value 取 expressTypeId、显示文本取 expressType，并初始化 select2。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDbExpresstype)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findDbExpresstype', {})
    this.output(data)
  }
}
