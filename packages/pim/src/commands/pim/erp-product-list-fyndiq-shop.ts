// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListFyndiqShop extends MBSCommand {
  static description = 'Fyndiq刊登店铺列表查询：查询当前用户可用的 Fyndiq 刊登店铺列表，用于 Fyndiq 刊登页面顶部“选择刊登店铺”下拉框的选项填充。无请求参数，返回店铺数组，前端用 art-template 模板 shopnmeTemplate 渲染为 option，仅使用 shopName 字段。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListFyndiqShop)

    const data = await this.client.post('/erpProduct/erpProduct/fyndiqProductPublish/listFyndiqShop', {})
    this.output(data)
  }
}
