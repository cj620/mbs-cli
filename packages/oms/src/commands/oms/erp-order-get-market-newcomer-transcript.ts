// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetMarketNewcomerTranscript extends MBSCommand {
  static description = '市场新人成绩单(Summary)查询：营销/市场新人成绩单页面加载时调用：以员工姓名为入参，返回该新人的基本信息(头像/姓名/入职/指导人/HRBP/简介)、新人summary六大指标(日均销售额、毛利率、手动刊登量、手动动销率、新品出单比、新手刊listing产出，含本人值与平台平均值)、大酋长评语、总经办意见以及转正第一/第二阶段自然月。'

  static flags = {
    employeeName: Flags.string({ description: '员工姓名(新人姓名)。来源：页面 URL 查询参数 employeeName，经 GetQueryString 获取并 decodeURI 解码', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetMarketNewcomerTranscript)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getMarketNewcomerTranscript', { "employeeName": flags.employeeName })
    this.output(data)
  }
}
