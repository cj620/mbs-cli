// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetDiscountInfoByShopTiktokRevisepriceConfirm extends MBSCommand {
  static description = '按店铺查询TikTok折扣活动信息：TikTok改价确认(提价)弹窗中，当仅选择1个店铺时，按店铺名查询该店铺下的TikTok折扣活动列表，用于渲染“店铺活动”下拉框：每项以 discountId 为值、discountName 为展示文本。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称(URL查询参数)，取自 selectShopName.value 单个店铺名(shops.join())，业务约束店铺数=1，来源控件为Vue店铺多选组件 #shopSelect', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetDiscountInfoByShopTiktokRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getDiscountInfoByShop', {}, { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
