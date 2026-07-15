// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetResponsibleShopSaler extends MBSCommand {
  static description = '获取负责店长(店长下拉)列表：eBay Case 任务看板筛选区「店长」下拉框的数据源接口。页面加载时无参 POST 调用，返回当前用户可见的负责店长(销售员)名称数组，前端用 art-template 渲染为 option 列表填充 #shopSalers 下拉框。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetResponsibleShopSaler)

    const data = await this.client.post('/erpOrder/erpOrder/ebayCaseTask/getResponsibleShopSaler', {})
    this.output(data)
  }
}
