// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetBadCommentTaskList extends MBSCommand {
  static description = '差评任务列表查询：客户评价(差评)处理列表分页查询：按订单编号、店铺/店长/客服/站点、店铺等级、回复状态、评价时间、回复次数、排序方式等条件，分 status(待处理/已处理/成功删除) 查询差评任务列表，返回订单、店铺、评价及回复时间等字段，供 customerRating 页面三个 Tab 渲染。'

  static flags = {
    page: Flags.string({ description: '当前页码(首次=1,分页回调=api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(固定 10)', required: true }),
    status: Flags.string({ description: '差评状态(Tab)。0=待处理差评;1=已处理差评;2=成功删除差评(来源隐藏域 #statusFlags)', required: true }),
    orderId: Flags.string({ description: '订单编号(来源输入框 #orderId)' }),
    shopName: Flags.string({ description: '店铺(来源下拉 #shopNameSelect,选项由 getResponsibleShop 加载)' }),
    shopManager: Flags.string({ description: '店长(来源下拉 #shopSaler,选项由 getResponsibleShopSaler 加载)' }),
    site: Flags.string({ description: '站点(来源下拉 #siteList,选项由 getSiteList 加载)' }),
    customerService: Flags.string({ description: '客服(来源下拉 #peopleName,选项由 getManagerPeopleName 加载)' }),
    shopLevel: Flags.string({ description: '店铺等级(来源下拉 #shopLevel)。a=A等级;b=B等级;c=C等级;d=D等级;e=E等级' }),
    taskStatus: Flags.string({ description: '回复状态筛选(来源下拉 #taskStatus)。空=全部;0=未回复;1=已回复' }),
    feedBackTime: Flags.string({ description: '评价时间(来源日期控件 #feedBackTime,格式 yyyy-MM-dd)' }),
    responseCount: Flags.string({ description: '回复次数(来源下拉 #responseCount,取值 1~10)' }),
    orderBy: Flags.string({ description: '排序方式(来源下拉 #orderBy)。feedBackTimeDesc=评价时间降序;feedBackTimeAsc=评价时间升序;responseTimeDesc=最近回复时间降序;responseTimeAsc=最近回复时间升序;customerReponseTimeDesc=客户回复时间倒序;customerReponseTimeAsc=客户回复时间升序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetBadCommentTaskList)

    const data = await this.client.post('/erpOrder/erpOrder/badCommentTask/getBadCommentTaskList', { "page": flags.page, "pageSize": flags.pageSize, "status": flags.status, "orderId": flags.orderId, "shopName": flags.shopName, "shopManager": flags.shopManager, "site": flags.site, "customerService": flags.customerService, "shopLevel": flags.shopLevel, "taskStatus": flags.taskStatus, "feedBackTime": flags.feedBackTime, "responseCount": flags.responseCount, "orderBy": flags.orderBy })
    this.output(data)
  }
}
