// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductTrackingListFbaDetails extends MBSCommand {
  static description = 'FBA跟踪单-货件SKU明细查询：FBA跟踪单报表中，点击某条 FBA 货件行的“点击看sku详情”时触发：以货件编号(groupId)为主键，结合时间类型/起止时间/FBA货件状态/SKU 条件，查询该货件下各 SKU 的发货数、接收数、损耗、重量、头程运费、状态等明细，渲染到展开的子表格。'

  static flags = {
    groupId: Flags.string({ description: 'FBA货件编号(列表行 data-id，点击展开行传入的 ids；定位要查明细的货件)', required: true }),
    dateType: Flags.string({ description: '时间类型(来源控件 #dateType 下拉)。1=创建时间;2=更新时间' }),
    startDate: Flags.string({ description: '起始日期(来源 #startDate 日期控件，按 dateType 对应时间过滤，格式 yyyy-MM-dd)' }),
    endDate: Flags.string({ description: '结束日期(来源 #endDate 日期控件，格式 yyyy-MM-dd)' }),
    fbaStatus: Flags.string({ description: 'FBA货件状态列表(来源 #fbaStatus 下拉 split 成数组)。取值枚举：WORKING/SHIPPED/IN_TRANSIT/DELIVERED/CHECKED_IN/RECEIVING/CLOSED/CANCELLED/DELETED/ERROR(未选时传空数组) (comma-separated)' }),
    sku: Flags.string({ description: 'SKU(来源 #sku 输入框，按 SKU 过滤明细)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductTrackingListFbaDetails)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/fbaProduct/trackingListFbaDetails', { "groupId": flags.groupId, "dateType": flags.dateType, "startDate": flags.startDate, "endDate": flags.endDate, "fbaStatus": toArray(flags.fbaStatus, 'string'), "sku": flags.sku })
    this.output(data)
  }
}
