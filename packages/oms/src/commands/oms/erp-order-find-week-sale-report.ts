// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWeekSaleReport extends MBSCommand {
  static description = '销售周报-获取周次销售报表描述(findWeek)：销售周报(销售大屏)页面初始化时调用，无入参，返回本周/上周/上上周三个销售报表描述(descr)的数组，前端分别存入 sessionStorage 的 thisweek/lastweek/beforeweek，供后续 findSaleChiefReportNew 等接口作为 descr 查询条件。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWeekSaleReport)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/findWeek', {})
    this.output(data)
  }
}
