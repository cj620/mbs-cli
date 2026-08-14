// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindIssueShop extends MBSCommand {
  static description = '纠纷店铺/负责人下拉数据查询：纠纷处理（拒绝退款）页面初始化时调用，返回当前用户可见的店铺列表(shopTypeList)与店铺负责人列表(operList)，用于渲染顶部“店铺”和“店铺负责人”两个筛选下拉框的选项。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindIssueShop)

    const data = await this.client.get('/erpManufacture/erpManufacture/issueInfo/findIssueShop', { params: {} })
    this.output(data)
  }
}
