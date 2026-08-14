// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetKfDbSalesPoints extends MBSCommand {
  static description = '客服/开发销售积分榜单查询(getKfDbSalesPoints)：开发积分榜单大屏左侧「榜单」数据查询：按月份与销售人员列表查询各销售人员的开发积分排名，返回排名/姓名/积分列表，供 el-table 自动滚动展示。'

  static flags = {
    months: Flags.string({ description: '查询月份，格式 YYYY-MM（如 2026-06）。由 GetNow() 取系统当前年月生成。来源：系统当前时间(new Date())', required: true }),
    salePersonList: Flags.string({ description: '销售人员姓名列表，按指定开发人员过滤。来源：getPeople() 通过 /erpOrder/.../teamNumberDropDown 返回 obj 映射 item.name；当前页面 getPeople() 被注释，实际传入空数组（不过滤，查全部）。元素类型：string (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetKfDbSalesPoints)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/pointsRanking/getKfDbSalesPoints', { "months": flags.months, "salePersonList": toArray(flags.salePersonList, 'string') })
    this.output(data)
  }
}
