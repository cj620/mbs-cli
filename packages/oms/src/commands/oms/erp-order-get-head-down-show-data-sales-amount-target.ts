// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetHeadDownShowDataSalesAmountTarget extends MBSCommand {
  static description = '启元市场部头部年度/月度目标展示数据查询：加载启元市场部月目标页面头部展示数据：年度目标及完成情况（实际/目标毛利额、完成率、预计完成率提点档位）、各月毛利额目标列表（目标/实际/完成率），并返回当年各月时间段记录（down）。前端据 headStatus 切换单一汇总视图与多平台下拉切换视图。'

  static flags = {
    currentTime: Flags.string({ description: '当前日期，格式 YYYY-MM-DD，由 dateFormat(new Date()) 生成。来源：系统当前时间', required: true }),
    departmentId: Flags.string({ description: '部门ID，前端固定传 54（启元市场部）。来源：代码常量', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetHeadDownShowDataSalesAmountTarget)

    const data = await this.client.get('/erpOrder/erpOrder/salesAmountTarget/getHeadDownShowData', { params: {} })
    this.output(data)
  }
}
