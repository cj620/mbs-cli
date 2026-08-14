// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetSaleNames extends MBSCommand {
  static description = '所属销售名称列表查询：获取“所属销售”名称列表，用于 CRM 客户列表页 #saleNames 下拉框的选项数据源。请求无任何业务参数；返回 obj 为销售姓名字符串数组，前端经 saleNamesTemplate 渲染为 <option>。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetSaleNames)

    const data = await this.client.post('/erpManufacture/erpManufacture/customer/getSaleNames', {})
    this.output(data)
  }
}
