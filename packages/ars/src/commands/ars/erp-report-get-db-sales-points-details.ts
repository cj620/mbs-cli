// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetDbSalesPointsDetails extends MBSCommand {
  static description = '销售积分明细查询：销售积分榜单页面右侧「积分明细」数据查询：按月份与销售人员名单查询，返回每位销售人员的积分项目明细（姓名、积分项目、积分增减、时间），用于右侧明细表格滚动展示。'

  static flags = {
    months: Flags.string({ description: '查询月份，格式 YYYY-MM（来自 GetNow()，取当前系统年-月，月份补零）', required: true }),
    salePersonList: Flags.string({ description: '销售人员姓名列表（元素为店长姓名字符串，来源店长下拉 shopmanager；当前 getPeople() 被注释，实际固定传空数组 []) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetDbSalesPointsDetails)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/pointsRanking/getDbSalesPointsDetails', { "months": flags.months, "salePersonList": toArray(flags.salePersonList, 'string') })
    this.output(data)
  }
}
