// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorSiteList extends MBSCommand {
  static description = 'TikTok提价-站点列表查询：打开「生成提价商品信息」弹窗时调用，拉取全部可选站点编码列表，用于渲染「请选择站点」下拉框(select2)。无请求参数，返回站点编码字符串数组，前端将每个元素同时作为下拉项的 id 与 text。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorSiteList)

    const data = await this.client.post('/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/siteList', {})
    this.output(data)
  }
}
