// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetItemIdsByDiscountIdShopeeRevisepriceConfirm extends MBSCommand {
  static description = '根据折扣活动ID查询商品ItemID：Shopee提价确认弹窗中，选择店铺并选择该店铺的折扣活动后，根据折扣活动ID(discountId)与店铺名查询该活动下的商品ItemID集合，返回后直接回填到"Item ID"文本域(#itemID)供生成提价商品信息使用。'

  static flags = {
    discountIds: Flags.string({ description: '折扣活动ID。取自店铺活动下拉 .activities-select 的选中值(select2 val)，其值为 getDiscountInfoByShop 返回的 discountId；单选控件故通常为单个 discountId(字段名为复数，如后端支持多个以逗号拼接则为多值，待人工确认)', required: true }),
    shopName: Flags.string({ description: '店铺名称。取自店铺搜索多选下拉 .shop-select 选中值 $(\'.shop-select\').select2(\'val\').join()，多个店铺名以英文逗号拼接', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetItemIdsByDiscountIdShopeeRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/getItemIdsByDiscountId', { "discountIds": flags.discountIds, "shopName": flags.shopName })
    this.output(data)
  }
}
