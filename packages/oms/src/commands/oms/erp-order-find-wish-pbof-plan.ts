// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWishPbofPlan extends MBSCommand {
  static description = '按投放计划查询 Wish ProductBoost 推广效果：Wish ProductBoost(产品推广)报表「按照投放计划查看」维度的分页查询：按交易时间区间、店长、店铺、活动名称、活动状态等条件筛选，按指定字段升/降序排序，返回投放计划(活动)列表及其活动花费、订单数、ERP总成交额/总单量等汇总字段。'

  static flags = {
    startTime: Flags.string({ description: '交易时间-起始(yyyy-MM-dd)，来源 #startTime date 控件，为空时拦截不发请求', required: true }),
    endTime: Flags.string({ description: '交易时间-结束(yyyy-MM-dd)，来源 #endTime date 控件，为空时拦截不发请求', required: true }),
    shopmanager: Flags.string({ description: '店长，来源 #Shopowner 下拉(选项由 findAllManager 填充)，可为空' }),
    shopName: Flags.string({ description: '店铺名称，来源 #shopName 下拉(选项由 findAllshop 填充)，可为空' }),
    field: Flags.string({ description: '排序字段，来源 #rank。枚举 mabanggvm=ERP总成交额; mabangOrderNum=ERP总单量; spend=活动花费/实际花费; sales=订单数' }),
    campaignName: Flags.string({ description: '活动名称(模糊)，来源 #campaignName 文本框，可为空' }),
    order: Flags.string({ description: '排序方式，来源 #descending。枚举 asc=升序; desc=降序(默认desc)' }),
    campaignState: Flags.string({ description: '活动状态，来源 #campaignState。枚举 空=全部; 新建; 进行中(默认); 终止; 已取消' }),
    currPage: Flags.string({ description: '当前页码，首页固定为1，翻页取分页组件 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定传100', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWishPbofPlan)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findWishPBOfPlan', { "startTime": flags.startTime, "endTime": flags.endTime, "shopmanager": flags.shopmanager, "shopName": flags.shopName, "field": flags.field, "campaignName": flags.campaignName, "order": flags.order, "campaignState": flags.campaignState, "currPage": flags.currPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
