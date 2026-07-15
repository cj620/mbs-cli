// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
