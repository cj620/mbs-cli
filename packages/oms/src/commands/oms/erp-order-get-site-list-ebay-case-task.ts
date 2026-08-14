// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
