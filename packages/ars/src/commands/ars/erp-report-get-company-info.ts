// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
