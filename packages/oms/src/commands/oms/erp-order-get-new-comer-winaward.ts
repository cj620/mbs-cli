// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetNewComerWinaward extends MBSCommand {
  static description = '新人试用期获得奖项查询：新人成绩单页面「试用期间获得奖项」模块数据查询：按员工姓名查询该新人在试用期间获得的奖项列表，返回奖项名称集合，前端逐条渲染序号与奖项名称。'

  static flags = {
    employeeName: Flags.string({ description: '员工姓名（新人姓名）。来源：页面URL查询参数employeeName，GetQueryString获取并decodeURI解码后拼接到接口URL查询串', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetNewComerWinaward)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getNewComerWinaward', {}, { params: { "employeeName": flags.employeeName } })
    this.output(data)
  }
}
