// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShopId extends MBSCommand {
  static description = '根据店铺ID获取店长：在“事业部人员毛利方差图”页面，店铺下拉框选中某店铺后触发，按店铺ID（拼接到URL路径末尾）查询该店铺对应的店长，前端取返回 obj.SHOPMANAGER 回填店长筛选项并重新加载方差数据。'

  static flags = {}

  static args = {
    shopId: Args.string({ required: true, description: '店铺ID，路径参数（拼接到 URL .../getShopManagerByShopId/ 之后）。来源：店铺下拉框 el-select-v2（form.shop），其选项 value 取自 getShop() 返回的 item.SHOPID。为空/null/\'\' 时不发起请求' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(OmsErpOrderShopId)

    const data = await this.client.get(`/erpOrder/erpOrder/teamDropDown/getShopManagerByShopId/${args.shopId}`, { params: {} })
    this.output(data)
  }
}
