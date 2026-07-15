// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetDiscountInfoByShopShopeeRevisepriceConfirm extends MBSCommand {
  static description = '按店铺获取折扣活动信息：Shopee 提价（改价）确认页“生成提价商品信息”弹窗中，选定单个店铺后，根据店铺名查询该店铺已同步的折扣活动列表，用于填充“店铺活动”下拉框（select2），下拉项 value=discountId、显示文本=discountName。'

  static flags = {
    shopName: Flags.string({ description: '店铺名（URL Query 参数）。取自 .shop-select 店铺下拉选中值 select2(\'val\') 数组 join() 逗号拼接；本接口触发时仅选中单个店铺，故实为单个店铺名。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetDiscountInfoByShopShopeeRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/getDiscountInfoByShop', {}, { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
