// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindSmtShop extends MBSCommand {
  static description = 'SMT店铺列表查询：查询当前用户可见的 SMT(速卖通)店铺名称列表，用于「SMT批量下架」页面顶部店铺多选框及「生成下架商品信息」模态框店铺多选框的数据源。无入参，返回店铺名称字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindSmtShop)

    const data = await this.client.post('/erpProduct/erpProduct/smtExportController/findSmtShop', {})
    this.output(data)
  }
}
