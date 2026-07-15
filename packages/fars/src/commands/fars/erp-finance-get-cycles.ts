// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetCycles extends MBSCommand {
  static description = '财务推送任务-获取期数列表(getCycles)：财务导入进度页面初始化(onMounted)时调用，获取可选的财务期数列表，用于顶部"请选择期数"下拉框；返回后默认选中第一项并据其 years/cycle 触发任务列表查询。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetCycles)

    const data = await this.client.get('/erpFinance/erpFinance/financePushTask/getCycles', { params: {} })
    this.output(data)
  }
}
