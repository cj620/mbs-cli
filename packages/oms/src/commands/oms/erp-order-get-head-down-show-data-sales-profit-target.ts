// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetHeadDownShowDataSalesProfitTarget extends MBSCommand {
  static description = '市场部月目标-头部目标展示数据查询：进入「市场部月目标」看板时调用，返回页面头部展示所需数据：年度目标及完成情况(yearHead)、各月毛利额目标(monthHead)、当年各月目标时间段列表(down)、头部展示模式(headStatus)及默认选中的年度头(maxyearHead)。headStatus 决定 yearHead/monthHead 的结构形态。'

  static flags = {
    currentTime: Flags.string({ description: '当前日期，格式 YYYY-MM-DD。来源：dateFormat(new Date())，前端取当天日期生成', required: true }),
    departmentId: Flags.string({ description: '部门ID。本页面固定传 54(市场部)，来源为代码常量', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetHeadDownShowDataSalesProfitTarget)

    const data = await this.client.get('/erpOrder/erpOrder/salesProfitTarget/getHeadDownShowData', { params: {} })
    this.output(data)
  }
}
