// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
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
