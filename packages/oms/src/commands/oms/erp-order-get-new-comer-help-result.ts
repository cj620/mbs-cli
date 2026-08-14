// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetNewComerHelpResult extends MBSCommand {
  static description = '新人助力结果查询：按员工姓名查询新人转正助力结果，返回方案一/方案二两套助力评估数据（第一阶段、第二阶段、转正述职评分、完成目标档位、提前转正天数），用于在"新人助力结果"表格中渲染。'

  static flags = {
    employeeName: Flags.string({ description: '员工姓名。来源：页面 URL 查询串 employeeName，经 GetQueryString 取值并 decodeURI 解码后拼接到接口 URL', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetNewComerHelpResult)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getNewComerHelpResult', {}, { params: { "employeeName": flags.employeeName } })
    this.output(data)
  }
}
