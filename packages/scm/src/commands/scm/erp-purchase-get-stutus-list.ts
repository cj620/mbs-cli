// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseGetStutusList extends MBSCommand {
  static description = '菜鸟入库单-状态列表查询：查询菜鸟优选入库单的状态枚举列表，用于「入库单查询」页面顶部「状态」下拉筛选框的选项渲染（el-option 的 label/value 数据源）。无请求参数，成功后返回状态数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseGetStutusList)

    const data = await this.client.post('/erpPurchase/erpPurchase/caiNiao/getStutusList', {})
    this.output(data)
  }
}
