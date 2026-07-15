// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetShopSelect2 extends MBSCommand {
  static description = '新人转正第二阶段考核店铺下拉查询：营销新人成绩单详情页“新人转正目标 - 第二阶段”考核店铺下拉框(#shopSelect7_2)的数据源。按员工(新人)姓名查询其可选店铺名称列表，前端用 art-template 渲染成 <option>，并初始化 ySelect 多选下拉。'

  static flags = {
    employeeName: Flags.string({ description: '员工(新人)姓名。经 decodeURI 解码后作为查询参数拼接到接口URL ?employeeName= 之后，用于查询该新人第二阶段可选考核店铺', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetShopSelect2)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getShopSelect2', {}, { params: { "employeeName": flags.employeeName } })
    this.output(data)
  }
}
