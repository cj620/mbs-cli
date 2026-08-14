// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindTrackCountry extends MBSCommand {
  static description = '物流跟进-国家下拉查询：物流跟进日志页面初始化时调用，拉取可选「国家」清单，用于顶部「请选择国家」下拉框(#country)的渲染。无请求参数，直接返回国家名称字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindTrackCountry)

    const data = await this.client.post('/erpOrder/erpOrder/trackController/findTrackCountry', {})
    this.output(data)
  }
}
