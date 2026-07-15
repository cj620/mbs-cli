// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountShop extends MBSCommand {
  static description = '物流店铺下拉列表查询：加载「Case分析（管理明细）」页面店铺筛选下拉框(#shoptype)的可选项数据。页面初始化时无参 GET 调用，返回店铺集合，前端用 art-template(contentTemplate2) 渲染为 option，仅取 shopName 作为选项值与文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountShop)

    const data = await this.client.get('/erpaccount/erpaccount/dashboard/shop', { params: {} })
    this.output(data)
  }
}
