// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductTrackingListHwcDetails extends MBSCommand {
  static description = '真实海外仓跟踪单-SKU明细查询：真实海外仓(HWC)跟踪单列表中，点击某条货件行的“点击看sku详情”展开按钮时，按货件编号(groupId)+时间类型/区间+货件状态+SKU 查询该货件下的逐 SKU 明细(发货/接收数量、金额、损耗、重量、头程运费、货件状态等)，用于子表 sontableTemplate 渲染。'

  static flags = {
    groupId: Flags.string({ description: '货件编号(分组ID)。来源：被点击展开行的 data-id(即父列表 v.groupId)，由 getFbaDetails(ids) 的 ids 传入；或顶部 #groupId 货件编号输入框', required: true }),
    dateType: Flags.string({ description: '时间类型(决定 startDate/endDate 作用于哪个时间)。1=创建时间;2=更新时间。来源控件 #dateType' }),
    startDate: Flags.string({ description: '起始时间(yyyy-MM-dd，按 dateType 过滤)。来源控件 #startDate' }),
    endDate: Flags.string({ description: '结束时间(yyyy-MM-dd，按 dateType 过滤)。来源控件 #endDate' }),
    fbaStatus: Flags.string({ description: '货件状态列表。前端取 #fbaStatus 值按逗号 split 成数组(无值时为空数组)。枚举单值：运输中/上架中/已上架/已取消 (comma-separated)' }),
    sku: Flags.string({ description: 'SKU(按 SKU 过滤明细)。来源控件 #sku' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductTrackingListHwcDetails)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/hwcProduct/trackingListHwcDetails', { "groupId": flags.groupId, "dateType": flags.dateType, "startDate": flags.startDate, "endDate": flags.endDate, "fbaStatus": toArray(flags.fbaStatus, 'string'), "sku": flags.sku })
    this.output(data)
  }
}
