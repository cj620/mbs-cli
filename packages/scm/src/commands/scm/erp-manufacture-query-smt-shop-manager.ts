// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureQuerySmtShopManager extends MBSCommand {
  static description = 'SMT店长列表查询：查询 SMT 纠纷统计页面"店长"筛选下拉框的可选店长名称列表。无请求参数，返回店长名称字符串数组，前端直接遍历填充 el-select 选项（label 与 value 均为店长名称）。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureQuerySmtShopManager)

    const data = await this.client.post('/erpManufacture/erpManufacture/issueInfo/querySmtShopManager', {})
    this.output(data)
  }
}
