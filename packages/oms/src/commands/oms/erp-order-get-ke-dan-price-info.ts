// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetKeDanPriceInfo extends MBSCommand {
  static description = '客单价报表查询(国家/品类)：销售客单价报表：按时间区间、平台、排序及总监/经理/店长/店铺/国家/品类/邮寄方式等筛选，查询各客单价分组的收入、支出、订单数量、利润与毛利率明细行及合计行；前端用于渲染明细表格与收入/利润柱状图。'

  static flags = {
    keDanPriceType: Flags.string({ description: '客单价类型(来源 #keDanPriceType)。country=国家客单价;category=品类客单价' }),
    employeeType: Flags.string({ description: '人员类别，前端固定传 \'1\'' }),
    startTime: Flags.string({ description: '起始日期(yyyy-MM-dd，来源日期控件 #time1)，默认当前日期前一个月' }),
    endTime: Flags.string({ description: '结束日期(yyyy-MM-dd，来源日期控件 #time2)，不可大于当前日期' }),
    platformId: Flags.string({ description: '平台ID(来源平台下拉 #reserve11，空串=全部)' }),
    sort: Flags.string({ description: '排序方式(来源 #sort)。7=客单价正序;1=收入小计倒序;2=收入小计正序;3=毛利倒序;4=毛利正序;5=毛利率倒序;6=毛利率正序' }),
    country: Flags.string({ description: '国家列表(来源国家多选 #countryList，未选传空数组) (comma-separated)' }),
    categoryNameList: Flags.string({ description: '品类名称列表(来源品类多选 #categoryList，品类客单价模式使用) (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称列表(来源 Vue shop，以空格拆分；未选传空数组) (comma-separated)' }),
    employeeName: Flags.string({ description: '店长/组员(来源 Vue shopmanager 选中值) (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长/经理(来源 Vue manager 选中值) (comma-separated)' }),
    leaders: Flags.string({ description: '总监(来源 Vue leaders 选中值) (comma-separated)' }),
    modetype: Flags.string({ description: '邮寄方式(来源 #modetype)。平邮/挂号/大货;空串=全部' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetKeDanPriceInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getKeDanPriceInfo', { "keDanPriceType": flags.keDanPriceType, "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "platformId": flags.platformId, "sort": flags.sort, "country": toArray(flags.country, 'string'), "categoryNameList": toArray(flags.categoryNameList, 'string'), "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string'), "leaders": toArray(flags.leaders, 'string'), "modetype": flags.modetype })
    this.output(data)
  }
}
