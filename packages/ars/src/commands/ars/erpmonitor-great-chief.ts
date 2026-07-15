// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGreatChief extends MBSCommand {
  static description = '销售大酋长下拉列表查询：店铺运营监控页初始化时加载"销售大酋长"筛选下拉框的数据源。无请求参数，返回销售大酋长的 ID 与名称列表，前端用 art-template(contentTemplate4) 渲染为 option 选项，供搜索时按大酋长过滤。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGreatChief)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/greatChief', {})
    this.output(data)
  }
}
