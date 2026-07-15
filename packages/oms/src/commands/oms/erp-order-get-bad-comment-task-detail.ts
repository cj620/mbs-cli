// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetBadCommentTaskDetail extends MBSCommand {
  static description = '获取差评任务详情：根据订单编号(orderId)与任务状态(status)查询该订单下差评任务的商品(SKU)明细列表，返回SKU图片/标题/itemId/销量级别/商品状态/售价/原始币种售价/币种/数量/总售价/评价类别/评价内容等字段，用于差评处理页(待处理/已处理/已结案)点击订单行展开时渲染下级明细表。'

  static flags = {}

  static args = {
    orderId: Args.string({ required: true, description: '订单编号(路径参数)。来源：列表行的 v.orderId，点击订单行展开明细时传入。后端为空时返回404参数不能为空。' }),
    status: Args.string({ required: true, description: '任务状态(路径参数)。枚举：0=待处理,1=已处理,2=已结案(成功解决)。来源：当前 Tab 的 statusFlag。后端为空时返回404参数不能为空。' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(OmsErpOrderGetBadCommentTaskDetail)

    const data = await this.client.post(`/erpOrder/erpOrder/badCommentTask/${args.orderId}/${args.status}/getBadCommentTaskDetail`, {})
    this.output(data)
  }
}
