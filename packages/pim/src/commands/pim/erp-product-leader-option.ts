// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductLeaderOption extends MBSCommand {
  static description = '创建人组长下拉选项查询：进入违规产品处理页面时调用，获取「创建人组长」筛选下拉框的全部组长名称选项。无入参，返回组长姓名字符串数组，前端用 art-template 的 groupLeaderTemplate 逐项渲染为 option，并在 search2()/exportTable() 的 getSearchParams() 中把所选组长拼进 employees 数组作为查询条件。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductLeaderOption)

    const data = await this.client.get('/erpProduct/erpProduct/product/leaderOption', { params: {} })
    this.output(data)
  }
}
