// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindMonthSaleReport extends MBSCommand {
  static description = '销售报表-月份(账期)列表查询：月度销售报表页(monthReport.html)初始化时调用,返回月份(账期)描述列表 obj。obj[0]=本月、obj[1]=上月、obj[2]=上上月(写入 sessionStorage 作为后续报表查询 descr 入参);obj 从第4个元素起(obj.splice(3))为前十二个月可选项,渲染进 #otherMonthSelect 下拉框。接口本身不传任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindMonthSaleReport)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/findMonth', {})
    this.output(data)
  }
}
