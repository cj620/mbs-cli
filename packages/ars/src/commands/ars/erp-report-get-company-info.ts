// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetCompanyInfo extends MBSCommand {
  static description = '公司信息下拉列表查询：消息客服监控报表页加载时调用，获取当前用户可见的公司列表，用于渲染顶部「请选择公司」下拉框。GET 无入参，返回公司数组，前端用 art-template 模板 companyTemplate 遍历 obj 渲染 option(value=companyId, text=companyName)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetCompanyInfo)

    const data = await this.client.get('/erpReport/erpReport/message/getCompanyInfo', { params: {} })
    this.output(data)
  }
}
