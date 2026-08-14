// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetCategoryName extends MBSCommand {
  static description = '大类名称下拉列表查询：大类(月)报表页初始化时调用，获取全部商品「大类名称」枚举列表，用于渲染页头 #categoryName 大类下拉框选项（首项固定为「请选择大类」）。无请求参数，响应 obj 为大类名称字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetCategoryName)

    const data = await this.client.post('/erpOrder/erpOrder/personSaleReport/getCategoryName', {})
    this.output(data)
  }
}
