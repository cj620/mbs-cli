// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductTrackingListHwcList extends MBSCommand {
  static description = '真实海外仓跟踪单列表查询：真实海外仓(HWC)跟踪单分页列表查询：按时间类型/时间区间、货件编号、货件状态、海外仓、SKU、酋长/店长等条件筛选，返回跟踪单汇总列表(货件、发/收数量、损耗、金额、运费、状态等)及总条数与总页数。'

  static flags = {
    page: Flags.string({ description: '当前页码。search()固定传1；分页回调传api.getCurrent()当前页', required: true }),
    dateType: Flags.string({ description: '时间类型(来源下拉#dateType)。1=创建时间;2=更新时间' }),
    startDate: Flags.string({ description: '起始时间(来源日期框#startDate,placeholder=任务生成时间)' }),
    endDate: Flags.string({ description: '结束时间(来源日期框#endDate)' }),
    groupId: Flags.string({ description: '货件编号(来源输入框#groupId)' }),
    chiefList: Flags.string({ description: '酋长列表(来源#bigChif值按逗号拆分;该控件已注释,当前恒为空数组) (comma-separated)' }),
    operList: Flags.string({ description: '店长/组员列表(来源#shopmanger值按逗号拆分;该控件已注释,当前恒为空数组) (comma-separated)' }),
    fbaStatus: Flags.string({ description: '货件状态(来源下拉#fbaStatus值按逗号拆分)。枚举:运输中/上架中/已上架/已取消 (comma-separated)' }),
    shopIds: Flags.string({ description: '海外仓店铺ID列表(来源下拉#shopContent值按逗号拆分,值=海外仓shopId) (comma-separated)' }),
    sku: Flags.string({ description: 'SKU(来源输入框#sku)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductTrackingListHwcList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/hwcProduct/trackingListHwcList', { "page": flags.page, "dateType": flags.dateType, "startDate": flags.startDate, "endDate": flags.endDate, "groupId": flags.groupId, "chiefList": toArray(flags.chiefList, 'string'), "operList": toArray(flags.operList, 'string'), "fbaStatus": toArray(flags.fbaStatus, 'string'), "shopIds": toArray(flags.shopIds, 'string'), "sku": flags.sku })
    this.output(data)
  }
}
