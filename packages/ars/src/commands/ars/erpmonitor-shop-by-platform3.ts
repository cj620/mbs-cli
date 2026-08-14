// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorShopByPlatform3 extends MBSCommand {
  static description = '店铺列表查询(按平台/shopByPlatform3)：热销商品(店铺)监控页加载时调用，无参 POST，后端按登录上下文返回店铺列表，前端通过 art-template 模板 contentTemplate2 渲染为店铺下拉框(#shopId)的 option 列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorShopByPlatform3)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/shopByPlatform3', {})
    this.output(data)
  }
}
