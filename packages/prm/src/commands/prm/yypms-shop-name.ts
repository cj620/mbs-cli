// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmYypmsShopName extends MBSCommand {
  static description = '亚马逊获取默认/可用物流模板：亚马逊调价页面切换店铺时，按店铺名称(shopName，作为 URL 路径参数)查询该店铺的可用物流(运费)模板，返回模板列表用于渲染「物流模板」下拉框(#shippingTemplate)。'

  static flags = {}

  static args = {
    shopName: Args.string({ required: true, description: '店铺名称(URL 路径参数)。来源：物流模板联动，取当前选中店铺在 shopOptionList 中匹配出的 item.shopName，用于查询该店铺可用物流模板。' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmYypmsShopName)

    const data = await this.client.get(`/yypms/pms/amazon/new/getDefaultTemplate/${args.shopName}`, { params: {} })
    this.output(data)
  }
}
