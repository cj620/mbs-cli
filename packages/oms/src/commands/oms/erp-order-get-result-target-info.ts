// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetResultTargetInfo extends MBSCommand {
  static description = '新人转正结果考核目标查询(getResultTargetInfo)：营销新人成绩单「新人转正目标」模块——结果考核数据查询：按员工姓名查询该新人「结果考核」表格(考核店铺、转正目标、提前转正目标、实际完成销售额)及第一/第二阶段日常任务完成率，用于渲染结果考核行并回填两阶段完成率。'

  static flags = {
    employeeName: Flags.string({ description: '员工(新人)姓名。URL 查询参数；来源=当前页面 URL 的 employeeName 查询串，经 decodeURI 解码后拼接到接口地址', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetResultTargetInfo)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getResultTargetInfo', {}, { params: { "employeeName": flags.employeeName } })
    this.output(data)
  }
}
