// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileHotProductWithShop extends MBSCommand {
  static description = '在线商品(SPU)列表查询(带店铺)：移动端"在线"页热卖商品列表分页查询：按关键词(店铺名/商品ID)、时间区间、价格区间、缺货标记、平台、大区主管、团队成员、店铺等条件筛选，返回在线商品(SPU)列表及销量、单量、毛利率、备货天数、TikTok佣金率等字段；用于首屏 search() 与加载更多 getMore()。'

  static flags = {
    searchKey: Flags.string({ description: '搜索关键词(店铺名/商品ID)。来源搜索输入框 #search' }),
    pageSize: Flags.string({ description: '每页条数。前端固定传 50', required: true }),
    currPage: Flags.string({ description: '当前页码。search() 固定 1；getMore() 自增', required: true }),
    startTime: Flags.string({ description: '开始时间(时间区间筛选-起始)。来源 sessionStorage startTime，无则传空' }),
    endTime: Flags.string({ description: '结束时间(时间区间筛选-结束)。来源 sessionStorage endTime，无则传空' }),
    minPrice: Flags.string({ description: '最低价格(价格区间-下限)。来源 sessionStorage minPrice，无则传空' }),
    maxPrice: Flags.string({ description: '最高价格(价格区间-上限)。来源 sessionStorage maxPrice，无则传空' }),
    saleOutFlag: Flags.string({ description: '缺货/售罄标记筛选。来源 sessionStorage saleOutFlag，无则传空(枚举待人工确认)' }),
    plaformId: Flags.string({ description: '平台ID(源码键名拼写为 plaformId)。来源 sessionStorage plaformId，无则传空' }),
    bigChiefEmployeeId: Flags.string({ description: '大区主管/大队长员工ID(按主管筛选)。来源 sessionStorage bigChiefEmployeeId，无则传空' }),
    teamNumberEmployeeNames: Flags.string({ description: '团队成员员工名(按团队成员筛选)。来源 sessionStorage teamNumberEmployeeNames，无则传空' }),
    shopIds: Flags.string({ description: '店铺ID列表(按店铺筛选)。来源 sessionStorage shopIds：search() 按逗号拆为数组，getMore() 传字符串；无则传 [] (comma-separated)' }),
    orderFiled: Flags.string({ description: '排序字段(源码键名拼写为 orderFiled)。仅当 sessionStorage 存在 orderFiled 时随 search() 传入(枚举待人工确认)' }),
    orderWay: Flags.string({ description: '排序方式(升/降序)。与 orderFiled 同时传入，来源 sessionStorage orderWay(枚举待人工确认)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileHotProductWithShop)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/hotProductWithShop', { "searchKey": flags.searchKey, "pageSize": flags.pageSize, "currPage": flags.currPage, "startTime": flags.startTime, "endTime": flags.endTime, "minPrice": flags.minPrice, "maxPrice": flags.maxPrice, "saleOutFlag": flags.saleOutFlag, "plaformId": flags.plaformId, "bigChiefEmployeeId": flags.bigChiefEmployeeId, "teamNumberEmployeeNames": flags.teamNumberEmployeeNames, "shopIds": toArray(flags.shopIds, 'string'), "orderFiled": flags.orderFiled, "orderWay": flags.orderWay })
    this.output(data)
  }
}
