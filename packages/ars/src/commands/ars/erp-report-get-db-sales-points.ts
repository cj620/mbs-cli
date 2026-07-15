// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetDbSalesPoints extends MBSCommand {
  static description = '销售积分榜单-左榜排名查询：销售积分榜单大屏页面加载时调用，按月份 + 销售人员名单查询各销售人员当月积分排名，返回排名/姓名/积分列表，用于左侧「销售积分榜单」表格自动滚动展示。'

  static flags = {
    months: Flags.string({ description: '查询月份，格式 YYYY-MM（由 GetNow() 取当前年月生成，如 2026-07）', required: true }),
    salePersonList: Flags.string({ description: '销售人员名单（字符串数组，元素为销售人员姓名 name）；来源 shopmanager.value，当前 getPeople() 被注释默认传空数组，空数组表示不限人员 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetDbSalesPoints)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/pointsRanking/getDbSalesPoints', { "months": flags.months, "salePersonList": toArray(flags.salePersonList, 'string') })
    this.output(data)
  }
}
