// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetProNewcomerTranscriptDet extends MBSCommand {
  static description = '新人成绩单-产品开发明细查询：新人成绩单详情页第二块数据查询：按员工姓名查询其各接手时间段(平均/0-15天…61-75天)的产品开发量、营销率、销量及增长、以及各时间节点(第0/30/60/75天)的SPU爆款/旺款/平款/滞款占比、供应商占比、侵权误导处罚、降本数量等明细，前端用 contentTemplate3~6 渲染 4 张明细表。'

  static flags = {
    employeeName: Flags.string({ description: '员工姓名(新人姓名)。来源：浏览器 URL 查询参数 employeeName，经 decodeURI 解码后提交', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetProNewcomerTranscriptDet)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getProNewcomerTranscriptDet', { "employeeName": flags.employeeName })
    this.output(data)
  }
}
