// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderSearchOrder extends MBSCommand {
  static description = '待发货订单查询：待发货订单列表分页查询：按订单状态(必选)、SKU、供应商、平台/店铺、货运方式、订单时间区间、是否缺货等条件筛选，返回订单列表及总数、总页数。'

  static flags = {
    status: Flags.string({ description: '订单状态(多选逗号拼接)。来源控件 #status(如:已支付/配货中)。未选则前端拦截不发请求', required: true }),
    page: Flags.string({ description: '当前页码(baseData.page,固定从1开始,分页回调时更新)', required: true }),
    pageSize: Flags.string({ description: '每页条数(来源 #pageNume 输入框,默认50,Number()转换)', required: true }),
    sku: Flags.string({ description: 'SKU(多值空格分隔,来源 #sku)' }),
    manufacture: Flags.string({ description: '供应商(多值空格分隔,来源 #manufacture)' }),
    platformid: Flags.string({ description: '平台/店铺ID(多选逗号拼接,来源隐藏域 #platformid,由店铺勾选 #shopList 生成)' }),
    expresstypeid: Flags.string({ description: '货运方式ID(多选逗号拼接,来源隐藏域 #expresstypeid,由 #expressList 勾选生成)' }),
    startDate: Flags.string({ description: '订单时间-起始(date,来源 #starttime)' }),
    endDate: Flags.string({ description: '订单时间-结束(date,来源 #endtime)' }),
    alertflag: Flags.string({ description: '是否缺货。1=是,0=否(来源复选框 #alertflag,恒传值)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderSearchOrder)

    const data = await this.client.post('/erpOrder/erpOrder/orderDeliver/searchOrder', { "status": flags.status, "page": flags.page, "pageSize": flags.pageSize, "sku": flags.sku, "manufacture": flags.manufacture, "platformid": flags.platformid, "expresstypeid": flags.expresstypeid, "startDate": flags.startDate, "endDate": flags.endDate, "alertflag": flags.alertflag })
    this.output(data)
  }
}
