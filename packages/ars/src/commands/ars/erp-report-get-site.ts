// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetSite extends MBSCommand {
  static description = '获取亚马逊账单站点列表：amazonBill「文件上传解析」页面初始化(created)时调用，获取已配置解析规则的亚马逊站点(site)名称列表，用于「设置解析规则」弹窗中的站点下拉选择。选中站点后再调用 getSiteByType 拉取该站点的表头规则。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetSite)

    const data = await this.client.get('/erpReport/erpReport/amazonHeaderRecord/getSite', { params: {} })
    this.output(data)
  }
}
