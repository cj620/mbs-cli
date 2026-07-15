// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
