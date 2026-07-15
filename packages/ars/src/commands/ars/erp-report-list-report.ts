// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportListReport extends MBSCommand {
  static description = 'TikTok店铺回款状态报表列表查询：按运营状态、回款状态、总监/经理/运营、店铺等条件分页查询 TikTok 店铺扣分与回款状态监控报表，支持按扣分、拉取时间排序，返回店铺监控行列表及总数。'

  static flags = {
    shopNameList: Flags.string({ description: '店铺名称列表（店铺多选框，多值用空格分割后拆为数组） (comma-separated)' }),
    shopManagerList: Flags.string({ description: '运营(店长)名称列表（运营多选框，取所选项 name 字段） (comma-separated)' }),
    paymentStatus: Flags.string({ description: '回款状态。枚举：正常/异常（空=不限）' }),
    managerList: Flags.string({ description: '经理名称列表（取所选项 name） (comma-separated)' }),
    leaderList: Flags.string({ description: '总监名称列表（取所选项 name） (comma-separated)' }),
    operateStatus: Flags.string({ description: '运营状态（单选值包装为单元素数组）。枚举：1=运营中;2=暂停运营;3=永久关闭中 (comma-separated)' }),
    pageSize: Flags.string({ description: '每页条数（前端固定为100）', required: true }),
    currentPage: Flags.string({ description: '当前页码（分页控件，从1开始）', required: true }),
    order: Flags.string({ description: '排序方向（仅排序时提交）。枚举：asc=升序;desc=降序' }),
    sort: Flags.string({ description: '排序字段（仅排序时提交）。取值：扣分列=h.score + 0；拉取时间列=a.created_on' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportListReport)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/tiktok/payment/report/list', { "shopNameList": toArray(flags.shopNameList, 'string'), "shopManagerList": toArray(flags.shopManagerList, 'string'), "paymentStatus": flags.paymentStatus, "managerList": toArray(flags.managerList, 'string'), "leaderList": toArray(flags.leaderList, 'string'), "operateStatus": toArray(flags.operateStatus, 'string'), "pageSize": flags.pageSize, "currentPage": flags.currentPage, "order": flags.order, "sort": flags.sort })
    this.output(data)
  }
}
