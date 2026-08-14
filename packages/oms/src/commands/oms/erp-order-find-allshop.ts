// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindAllshop extends MBSCommand {
  static description = '查询全部店铺(店铺下拉)：PB广告费报表(按店铺查看)页面初始化时拉取全部店铺列表，用于渲染「请选择店铺」下拉框。GET 请求，无任何入参；响应 obj 为店铺数组，前端通过 art-template 模板 contentTemplate2 遍历，仅取 shopname 作为 option 的 value 与文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindAllshop)

    const data = await this.client.get('/erpOrder/erpOrder/wishProductBoost/findAllshop', { params: {} })
    this.output(data)
  }
}
