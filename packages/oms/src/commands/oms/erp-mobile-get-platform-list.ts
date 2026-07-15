// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetPlatformList extends MBSCommand {
  static description = '平台列表查询：移动端销售趋势图「搜索」页加载时调用，获取当前登录用户可见的平台列表，用于渲染「平台」多选框（art-template getPlatformTemplate）。选中某平台后会以其 PLATFORMID 触发「大酋长」接口 findbigchiefByLogin。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetPlatformList)

    const data = await this.client.get('/erpMobile/erpMobile/saleTrendChart/getPlatformList', { params: {} })
    this.output(data)
  }
}
