// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSubManagerNumber extends MBSCommand {
  static description = '销售目标-下级主管(酋长)业绩数量查询：销售日报页面，点击展开某员工行时，按 employeeId+weekTag 查询其下级主管(酋长)的本周/上周/上上周业绩数量明细(weekList)，用于渲染下钻子表。请求参数全部以 URL query 传递(weekTag: 001本周/010上周/100上上周)。'

  static flags = {
    employeeId: Flags.string({ description: '员工ID(被展开行的主管/员工ID)，来源：被点击行 tr 的 data-id', required: true }),
    employeeName: Flags.string({ description: '员工姓名，来源：被点击行 tr 的 data-name，仅用于回显/拼接' }),
    weekTag: Flags.string({ description: '周标签枚举。001=本周;010=上周;100=上上周', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSubManagerNumber)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getSubManagerNumber', {}, { params: { "employeeId": flags.employeeId, "employeeName": flags.employeeName, "weekTag": flags.weekTag } })
    this.output(data)
  }
}
