// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmProductAutoListingServicePlatformTypeEnum extends MBSCommand {
  static description = '平台类型枚举查询：获取刊登模板下拉所需的「平台类型枚举」列表。前端在组件挂载时调用，拿到平台数组后用于渲染「刊登模板」下拉菜单，并按 canSalePlatform 过滤被禁用平台（120→TIKTOK、119→OZON），再据所选平台预取刊登模板ID。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmProductAutoListingServicePlatformTypeEnum)

    const data = await this.client.get('/product-auto-listing-service/support/enum/platformTypeEnum', { params: {} })
    this.output(data)
  }
}
