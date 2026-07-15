// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetManagerShop extends MBSCommand {
  static description = '销售日报-经理店铺数据查询(getManagerShop)：销售目标/销售日报页面中，按员工(经理)下钻查询其名下各店铺的本周/上周/上上周发布(刊登)数量数据。点击表格行展开图标时触发，传入员工ID、员工姓名及周标识，返回该员工下各店铺(weekList)及每店铺逐日数量(week)，由 art-template 渲染到店铺明细行。'

  static flags = {
    employeeId: Flags.string({ description: '员工(经理)ID，来源：被点击行 data-id', required: true }),
    employeeName: Flags.string({ description: '员工(经理)姓名，来源：被点击行 data-name，拼接到 URL(中文将被 URL 编码)', required: true }),
    weekTag: Flags.string({ description: '周标识(枚举)。001=本周；010=上周；100=上上周', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetManagerShop)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getManagerShop', {}, { params: { "employeeId": flags.employeeId, "employeeName": flags.employeeName, "weekTag": flags.weekTag } })
    this.output(data)
  }
}
