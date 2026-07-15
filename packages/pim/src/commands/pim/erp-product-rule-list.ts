// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductRuleList extends MBSCommand {
  static description = '备货人(规则)下拉列表查询：为「国内库存(不良库存)分析」页面提供「末次采购备货人」「滞销分析占比最高备货人」下拉框选项数据源，返回规则/备货人名称字符串数组。前端拼接固定项「公司统一备货」「无采购记录」及员工名后作为下拉选项。无请求参数(空 body POST)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductRuleList)

    const data = await this.client.post('/erpProduct/erpProduct/indonesia/ruleList', {})
    this.output(data)
  }
}
