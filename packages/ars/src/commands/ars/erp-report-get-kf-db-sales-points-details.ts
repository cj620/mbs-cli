// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetKfDbSalesPointsDetails extends MBSCommand {
  static description = '客服/开发销售积分明细查询(getKfDbSalesPointsDetails)：「开发积分榜单」大屏右侧「积分明细」表格数据源：按月份与销售人员列表查询各销售人员的积分明细流水（积分项目、加减分值、发生时间），前端 Rightdata 绑定 el-table 自动滚动展示。'

  static flags = {
    months: Flags.string({ description: '查询月份，格式 YYYY-MM（由 GetNow() 生成，取当前年月，如 2026-07），单位=月', required: true }),
    salePersonList: Flags.string({ description: '销售人员姓名列表(string[])，来源团队人员下拉 shopmanager（teamNumberDropDown 返回项的 name）；空数组表示不限人员/查询全部 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetKfDbSalesPointsDetails)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/pointsRanking/getKfDbSalesPointsDetails', { "months": flags.months, "salePersonList": toArray(flags.salePersonList, 'string') })
    this.output(data)
  }
}
