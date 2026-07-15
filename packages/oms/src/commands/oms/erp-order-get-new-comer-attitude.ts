// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetNewComerAttitude extends MBSCommand {
  static description = '新人成绩单-态度(出勤)明细查询：营销新人成绩单详情页「态度」板块数据查询：按员工姓名查询新人的出勤态度明细，返回个人与大酋长组平均两行数据，含应出勤工时、实际工时、事假、其它假、迟到、秒闪、缺卡、旷工等出勤考核指标，用于渲染态度表格。'

  static flags = {
    employeeName: Flags.string({ description: '员工(新人)姓名，作为查询主键，拼接到接口URL查询串(GetQueryString(\'employeeName\')→decodeURI)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetNewComerAttitude)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getNewComerAttitude', { "employeeName": flags.employeeName })
    this.output(data)
  }
}
