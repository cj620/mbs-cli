// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpflowmonitorGetItemDataMonitor extends MBSCommand {
  static description = '商品流量监控列表查询（getItemDataMonitor）：平台流量看板页「商品流量看板」Tab 的商品维度流量监控分页查询：按平台、大酋长、组员、店铺、SPU、统计天数（1/7/30天）筛选，并按订单量/销售数量/访问/转化率/销售风向/退款风向等排序，返回商品流量列表及总数、总页数。'

  static flags = {
    bigChief: Flags.string({ description: '大酋长（来源 #shopManager2 多选下拉，店铺负责人ID数组） (comma-separated)' }),
    employeeNames: Flags.string({ description: '组员（来源 #employeeList2 多选；选了大酋长但未选组员时取 sessionStorage SHOPID 拆分值） (comma-separated)' }),
    orderBy: Flags.string({ description: '排序方式。1=按订单量降序;2=按销售数量降序;3=按访问次数降序;4=按访客数降序;5=按转化率降序;6=按人均访问次数降序;7=按人均访问时长降序;8=按销售风向降幅排序;9=按销售风向涨幅排序;10=按退款风向降幅排序;11=按退款风向涨幅排序' }),
    platformId: Flags.string({ description: '所属平台（来源 #platformId2）。1=ebay;89=SeeBee' }),
    shopIds: Flags.string({ description: '店铺（来源 #shoptypeid2 多选下拉，店铺ID数组） (comma-separated)' }),
    spu: Flags.string({ description: '商品SPU（来源输入框 #inputs）' }),
    dayNum: Flags.string({ description: '统计天数（来源 1天/7天/30天 按钮或 sessionStorage days）。取值 1/7/30，单位：天', required: true }),
    page: Flags.string({ description: '当前页码（首次查询固定为1，分页回调取 api.getCurrent()）', required: true }),
    pageSize: Flags.string({ description: '每页条数（固定为50）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpflowmonitorGetItemDataMonitor)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpflowmonitor/erpflowmonitor/ebayDataMonitor/getItemDataMonitor', { "bigChief": toArray(flags.bigChief, 'string'), "employeeNames": toArray(flags.employeeNames, 'string'), "orderBy": flags.orderBy, "platformId": flags.platformId, "shopIds": toArray(flags.shopIds, 'string'), "spu": flags.spu, "dayNum": flags.dayNum, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
