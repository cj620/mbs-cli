// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetShopSelect1 extends MBSCommand {
  static description = '新人转正目标-第一阶段店铺下拉列表查询：新人营销成绩单详情页「新人转正目标」第一阶段(入职次个自然月)考核店铺下拉框的数据源接口：按员工姓名查询其第一阶段可选/已选店铺名称列表，前端用 art-template 渲染为 #shopSelect7_1 下拉选项(ySelect 多选)。'

  static flags = {
    employeeName: Flags.string({ description: '员工姓名(新人姓名)。来源=当前页面地址栏 query 参数 employeeName，经 decodeURI 解码后作为 URL 查询参数传入；用于查询该新人第一阶段考核店铺下拉数据', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetShopSelect1)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getShopSelect1', {}, { params: { "employeeName": flags.employeeName } })
    this.output(data)
  }
}
