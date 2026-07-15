// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetItemIdsByDiscountIdTiktokRevisepriceConfirm extends MBSCommand {
  static description = '根据折扣活动ID查询ItemId：TikTok提价：在“生成提价商品信息”弹窗中选中单个店铺后，选择该店铺的折扣活动(select2)，根据折扣活动ID查询该活动下的商品 Item ID 列表，前端将结果回填到 itemId 文本域，供后续批量提价使用。'

  static flags = {
    discountIds: Flags.string({ description: '折扣活动ID。取值 $(\'.activities-select\').select2(\'val\')，下拉数据来源于 getDiscountInfoByShop 返回的 discountId(text=discountName)；字段名复数但实际为选中的单个折扣活动ID。', required: true }),
    shopName: Flags.string({ description: '店铺名称，多个以英文逗号拼接。取值 selectShopName.value.join()；活动区仅在选中单个店铺时显示，通常为单个店铺名。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetItemIdsByDiscountIdTiktokRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getItemIdsByDiscountId', { "discountIds": flags.discountIds, "shopName": flags.shopName })
    this.output(data)
  }
}
