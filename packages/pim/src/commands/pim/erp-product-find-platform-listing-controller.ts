// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindPlatformListingController extends MBSCommand {
  static description = '平台列表查询：查询平台基础数据列表，用于「爆款listing」页面顶部平台多选下拉框(platfromlist)的数据填充。无请求参数(空请求体)，返回平台数组，前端取 sequenceid 作为选项值、name 作为显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindPlatformListingController)

    const data = await this.client.post('/erpProduct/erpProduct/listingController/findPlatform', {})
    this.output(data)
  }
}
