// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSiteListEbayCaseTask extends MBSCommand {
  static description = 'eBay个案-站点下拉列表查询：eBay升级个案（case）处理页面初始化时调用，获取当前用户可见的站点列表，用于填充顶部「请选择站点」下拉框（#siteLists），作为案件列表查询的筛选条件之一。无请求参数，返回站点字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSiteListEbayCaseTask)

    const data = await this.client.post('/erpOrder/erpOrder/ebayCaseTask/getSiteList', {})
    this.output(data)
  }
}
