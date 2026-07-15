// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowOneDayEbayBillDetail extends MBSCommand {
  static description = '某一天eBay账单明细查询：日销报表下钻：根据父页面筛选条件(员工类型/时间区间/平台/分类/店铺/员工/大主管)+指定某一天(currentdate)，分页查询该日 eBay 账单明细，并返回总条数与总页数供前端分页与展示。'

  static flags = {
    employeeType: Flags.string({ description: '员工类型(父页面筛选透传，导出时取 params.employeeType)' }),
    startTime: Flags.string({ description: '统计起始时间(父页面时间区间-起)' }),
    endTime: Flags.string({ description: '统计结束时间(父页面时间区间-止)' }),
    platformId: Flags.string({ description: '平台ID(eBay 平台标识，父页面透传)' }),
    categoryNameList: Flags.string({ description: '分类名称列表(缺省为空数组 []) (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称列表(缺省为空数组 []) (comma-separated)' }),
    employeeName: Flags.string({ description: '员工名称列表(缺省为空数组 []) (comma-separated)' }),
    bigChief: Flags.string({ description: '大主管(列表，缺省为空数组 []) (comma-separated)' }),
    currentdate: Flags.string({ description: '指定的某一天日期(本页由 URL 参数 oneDay 赋值 params.currentdate)' }),
    page: Flags.string({ description: '当前页码(首次固定为 1，分页回调取 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowOneDayEbayBillDetail)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/showOneDayEbayBillDetail', { "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "platformId": flags.platformId, "categoryNameList": toArray(flags.categoryNameList, 'string'), "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "currentdate": flags.currentdate, "page": flags.page })
    this.output(data)
  }
}
