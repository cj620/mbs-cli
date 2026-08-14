// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorPullDiscountInfoOfShopShopeeRevisepriceConfirm extends MBSCommand {
  static description = '拉取（同步）店铺折扣信息：Shopee 提价确认页，按所选店铺名称从平台侧拉取/同步该店铺最新的折扣活动信息。仅以查询参数 shopName 传入店铺名（多个以逗号拼接），无请求体；返回操作结果状态与提示文案。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（Query 参数）。多个店铺以英文逗号拼接。来源控件：#checkShop / #selectShop / .shop-select 多选下拉。为空时前端拦截提示“请先选择店铺”', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorPullDiscountInfoOfShopShopeeRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/pullDiscountInfoOfShop', {}, { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
