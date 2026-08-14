// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetStageInfo extends MBSCommand {
  static description = '新人转正阶段考核信息查询：新人转正成绩单详情页中，按员工+阶段(第一阶段/第二阶段)+店铺查询该阶段考核指标：手动刊登量、订单量、店铺发货运营毛利率、月目标完成档位，结果回填到对应阶段表格行。'

  static flags = {
    employeeName: Flags.string({ description: '员工姓名(取自URL查询参数 employeeName，decodeURI 解码后传入)', required: true }),
    status: Flags.string({ description: '阶段标识。1=第一阶段(入职次个自然月);2=第二阶段(入职次次个自然月)；由 getStageInfo(status) 入参与下拉 onchange 决定', required: true }),
    shopName: Flags.string({ description: '店铺名称(多选)。status=1 取 #shopSelect7_1、status=2 取 #shopSelect7_2 的选中值，多选逗号拼接；未选则传空字符串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetStageInfo)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getStageInfo', { "employeeName": flags.employeeName, "status": flags.status, "shopName": flags.shopName })
    this.output(data)
  }
}
