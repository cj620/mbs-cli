// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetPrimaryCategory extends MBSCommand {
  static description = '获取大类(一级类目)列表：移动端「开发搜索」页面初始化时调用，拉取“大类(一级类目)”候选列表，用于渲染大类多选复选框。无任何请求参数，返回大类的 id/name 列表，前端用 id 作为复选框 value、name 作为复选框标签。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetPrimaryCategory)

    const data = await this.client.get('/erpMobile/erpMobile/saleTrendChart/getPrimaryCategory', { params: {} })
    this.output(data)
  }
}
