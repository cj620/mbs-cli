// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountCountry extends MBSCommand {
  static description = '仪表盘-国家下拉列表查询：财务仪表盘(经理case分析页)初始化时拉取国家列表，用于填充“按国家搜索”的国家下拉框 #country。页面加载即自动调用 country()，无入参，返回国家值数组，前端用 art-template 渲染为 <option>。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountCountry)

    const data = await this.client.get('/erpaccount/erpaccount/dashboard/country', { params: {} })
    this.output(data)
  }
}
