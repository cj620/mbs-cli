// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindWishPbofItemidEveryTable extends MBSCommand {
  static description = 'Wish产品PB活动每日明细表查询：根据产品ID与时间区间(默认前45天至昨天)，查询该Wish产品在 Product Boost(PB)推广中每日的活动明细列表，含活动名称、起止时间、关键字、订单数、活动状态、花费，用于刊登趋势图(listingChart)下方明细表渲染。'

  static flags = {
    productId: Flags.string({ description: '产品ID(MongoDB ObjectId)。来源：URL 查询参数 GetQueryString(\'productId\')，可能为空' }),
    startTime: Flags.string({ description: '起始时间，格式 YYYY-MM-DD。来源：getTody(new Date(),45,0).today，即当前日期向前45天', required: true }),
    endTime: Flags.string({ description: '结束时间，格式 YYYY-MM-DD。来源：getTody(new Date(),1,0).today，即昨天', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindWishPbofItemidEveryTable)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryTable', { "productId": flags.productId, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
