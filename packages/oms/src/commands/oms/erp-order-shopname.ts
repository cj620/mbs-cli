// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShopname extends MBSCommand {
  static description = '店铺登录地址获取：订单详情页点击面包屑店铺名称时，按店铺名(路径变量)查询该店铺后台免登录地址；成功(code=200)则 window.open(obj) 打开店铺地址，失败则 ElMessage.warning(desc) 提示。无请求体。'

  static flags = {}

  static args = {
    shopname: Args.string({ required: true, description: '店铺名称(URL路径变量)，取自 orderdata.shoptype，由订单详情页面包屑店铺名点击事件传入并拼接到接口地址末尾' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(OmsErpOrderShopname)

    const data = await this.client.post(`/erpOrder/erpOrder/shop/login/url/get/${args.shopname}`, {})
    this.output(data)
  }
}
