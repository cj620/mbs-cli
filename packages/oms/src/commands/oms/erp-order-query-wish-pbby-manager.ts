// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderQueryWishPbbyManager extends MBSCommand {
  static description = 'Wish推广(店长维度)活动查询：按店长(店铺经理)与时间区间查询其名下店铺的 Wish 商品推广(Product Boost)活动列表，返回各活动的店铺、活动ID/名称、起止时间、状态、成交额(GMV)、最大预算与期间消耗等；前端汇总各活动期间消耗(incrementFee)合计展示。'

  static flags = {
    shopmanager: Flags.string({ description: '店长(店铺经理)名称。来源：URL 参数 shopmanager，经 decodeURI 解码', required: true }),
    startTime: Flags.string({ description: '查询起始时间。来源：URL 参数 startTime', required: true }),
    endTime: Flags.string({ description: '查询结束时间。来源：URL 参数 endTime', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderQueryWishPbbyManager)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/QueryWishPBByManager', { "shopmanager": flags.shopmanager, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
