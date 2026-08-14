// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorPullDiscountInfoOfShopTiktokRevisepriceConfirm extends MBSCommand {
  static description = '同步/拉取店铺最新折扣活动信息：TikTok 商品提价页面触发：按传入的店铺名称（可多个，逗号拼接）从平台拉取/同步该店铺的最新折扣活动信息，返回操作结果提示。用于「同步最新折扣活动」按钮、「拉取折扣信息」按钮及多店铺活动刷新（refershActivities）。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（Query 查询参数）。可为单个店铺名，或多个店铺名以英文逗号拼接。来源控件：#selectShop / #checkShop / Vue selectShopName（多店铺 join 逗号拼接）。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorPullDiscountInfoOfShopTiktokRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/pullDiscountInfoOfShop', {}, { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
