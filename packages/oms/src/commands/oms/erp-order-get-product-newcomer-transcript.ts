// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetProductNewcomerTranscript extends MBSCommand {
  static description = '产品新人成绩单查询：根据员工姓名查询产品新人试用期成绩单：返回新人summary（头像、姓名、入职、指导人、HRBP、简介）及业绩明细（开发量SPU、动销率、百元动销率、新品销售额、日均销售额、发货毛利率及各自我司产品部平均值），并返回大酋长评语、总经办意见。'

  static flags = {
    employeeName: Flags.string({ description: '员工姓名（新人姓名，作为成绩单查询主键），来源URL查询串employeeName经decodeURI解码', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetProductNewcomerTranscript)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getProductNewcomerTranscript', { "employeeName": flags.employeeName })
    this.output(data)
  }
}
