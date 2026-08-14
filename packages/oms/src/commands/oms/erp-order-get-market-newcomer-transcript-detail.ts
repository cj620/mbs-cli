// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetMarketNewcomerTranscriptDetail extends MBSCommand {
  static description = '营销新人成绩单-业绩/店铺状态明细查询：营销新人成绩单详情页「业绩明细」与「店铺状态明细」两块表格的数据来源。按员工姓名查询该新人各入职阶段的刊登/出单/动销/毛利/销售额等业绩汇总，以及各时间节点的店铺数量/黑马/健康/疲软/等级变化等店铺状态汇总，返回按阶段排列的明细列表。'

  static flags = {
    employeeName: Flags.string({ description: '新人员工姓名(成绩单归属人),来源 URL 查询参数 employeeName(decodeURI 解码)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetMarketNewcomerTranscriptDetail)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getMarketNewcomerTranscriptDetail', { "employeeName": flags.employeeName })
    this.output(data)
  }
}
