// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountLazadaCouponList extends MBSCommand {
  static description = 'Lazada优惠券(促销)执行记录列表查询：查询各店铺Lazada促销(优惠券)定时执行结果：按店铺/店长(组员)/大酋长/站点/状态/日期类型与时间区间分页筛选，返回店铺、店长、站点、促销设置、上一次成功/失败时间及失败原因，并支持分页与排序。'

  static flags = {
    page: Flags.string({ description: '当前页码(首次查询固定为1，分页回调取 api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(来源 #everyPage1 下拉：50/100/200/500/1000/2000)', required: true }),
    orderBy: Flags.string({ description: '排序方式。1=店铺名称升序;2=店铺名称降序;3=完成时间升序;4=完成时间降序;5=失败时间升序;6=失败时间降序' }),
    dateType: Flags.string({ description: '日期类型(源码注释为人员类别)。1=成功时间;2=失败时间' }),
    startDate: Flags.string({ description: '起始日期(来源 #time1，date 控件，格式 yyyy-MM-dd)' }),
    endDate: Flags.string({ description: '结束日期(来源 #time2，date 控件，格式 yyyy-MM-dd)' }),
    status: Flags.string({ description: '执行状态。空=全部;1=成功;2=失败' }),
    sites: Flags.string({ description: '站点列表(来源 #siteList，逗号拆分)。取值:ID/MY/SG/PH/VN/TH;未选传[] (comma-separated)' }),
    shopNames: Flags.string({ description: '店铺名称列表(来源 #shopList，逗号或空格拆分)；未选传[] (comma-separated)' }),
    shopManager: Flags.string({ description: '店长/组员(来源 #employeeList)；当选了大酋长但未选店长时取该大酋长下全部组员;未选传[] (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长(来源 #shopManager 多选)；未选传[] (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountLazadaCouponList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpaccount/erpaccount/lazadaUnRead/lazadaCouponList', { "page": flags.page, "pageSize": flags.pageSize, "orderBy": flags.orderBy, "dateType": flags.dateType, "startDate": flags.startDate, "endDate": flags.endDate, "status": flags.status, "sites": toArray(flags.sites, 'string'), "shopNames": toArray(flags.shopNames, 'string'), "shopManager": toArray(flags.shopManager, 'string'), "bigChief": toArray(flags.bigChief, 'string') })
    this.output(data)
  }
}
