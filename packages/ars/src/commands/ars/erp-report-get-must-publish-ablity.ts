// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetMustPublishAblity extends MBSCommand {
  static description = '获取必发布(适用)平台列表：进入「今日推送团队监控」页面时调用，拉取必发布/适用平台清单，用于顶部「请选择平台」下拉框(el-select)的选项渲染。无请求参数，返回平台数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetMustPublishAblity)

    const data = await this.client.get('/erpReport/erpReport/todayPushTeam/getMustPublishAblity', { params: {} })
    this.output(data)
  }
}
