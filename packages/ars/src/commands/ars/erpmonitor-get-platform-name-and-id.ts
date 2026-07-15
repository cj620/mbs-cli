// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetPlatformNameAndId extends MBSCommand {
  static description = '查询平台名称与ID列表：商品统计(productStatistics)页面初始化时调用，获取全部平台的 平台ID/平台名称 列表，用于渲染顶部「请选择平台」下拉框(#platformName)的 option 选项。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetPlatformNameAndId)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/getPlatformNameAndId', {})
    this.output(data)
  }
}
