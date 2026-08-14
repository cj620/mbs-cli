// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetEmpSaleRepSite extends MBSCommand {
  static description = '员工销售报表站点统计查询：月销售主管报表中，鼠标悬浮到某员工行时按需查询该员工在指定月份、指定平台下各站点的新刊登量、总在线量与新品比例，渲染到悬浮下拉框中。第一层(getEmpSaleRepSite)与第二层(getEmpSaleRepSite2)均调用本接口，入参与出参一致。'

  static flags = {
    empName: Flags.string({ description: '员工姓名。来源 hover 行 data-empname，若含 \'[\' 则截取 \'[\' 之前部分（去除工号/后缀）', required: true }),
    descr: Flags.string({ description: '月份描述（统计月份）。来源 sessionStorage 的 thisMonth/lastMonth/beforeMonth（或其他月选择值）', required: true }),
    isChief: Flags.string({ description: '是否主管标识。来源 hover 行 data-ischief（用于区分主管/员工口径）', required: true }),
    platformId: Flags.string({ description: '平台ID。来源 hover 行 data-platformid（按平台过滤站点统计）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetEmpSaleRepSite)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getEmpSaleRepSite', { "empName": flags.empName, "descr": flags.descr, "isChief": flags.isChief, "platformId": flags.platformId })
    this.output(data)
  }
}
