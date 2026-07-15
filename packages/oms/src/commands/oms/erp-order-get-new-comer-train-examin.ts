// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetNewComerTrainExamin extends MBSCommand {
  static description = '新人培训考核查询：营销新人成绩单详情页「培训考核」板块数据查询：按员工姓名查询该新人应参加/已参加的培训课题及各项考试结果，返回培训考核记录列表，前端渲染到「培训考核」表格(content5)。'

  static flags = {
    employeeName: Flags.string({ description: '员工(新人)姓名。来源：当前页面 URL 查询参数 employeeName(GetQueryString 取得后 decodeURI 解码)，以 URL query 形式拼接传递', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetNewComerTrainExamin)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getNewComerTrainExamin', { "employeeName": flags.employeeName })
    this.output(data)
  }
}
