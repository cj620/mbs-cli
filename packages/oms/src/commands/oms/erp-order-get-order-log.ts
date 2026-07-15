// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetOrderLog extends MBSCommand {
  static description = '订单操作日志分页查询：订单详情页右侧操作日志时间轴分页查询：按订单号查询该订单的操作日志，返回当前页码、总页数及日志列表(操作员、部门、日志描述、操作时间、星期)。前端按相邻同一操作员(oper)合并分组渲染。'

  static flags = {
    orderid: Flags.string({ description: '订单号。来源 basedata.orderid = GetQueryString("orderid")，即页面 URL 上的 orderid', required: true }),
    page: Flags.string({ description: '当前页码。来源 getlog(index) 入参，首次加载取 URL 的 page(缺省为1)，翻页时取 pagenum', required: true }),
    pageSize: Flags.string({ description: '每页条数。前端固定传 20', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetOrderLog)

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/getOrderLog', {}, { params: { "orderid": flags.orderid, "page": flags.page, "pageSize": flags.pageSize } })
    this.output(data)
  }
}
