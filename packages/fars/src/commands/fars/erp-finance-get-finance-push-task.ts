// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetFinancePushTask extends MBSCommand {
  static description = '财务推送任务进度查询：财务数据导入页按所选期数(年份 years + 期次 cycle)查询财务推送任务列表，返回各任务的应导入数/成功数/失败数/进度/状态等汇总字段，用于 el-table 渲染任务进度。'

  static flags = {
    years: Flags.string({ description: '期数-年份。来源期数选择器 el-select，由 time.split(\',\')[0] 经 Number() 转换；选项值来自 getCycles 的 item.years。未选择时传空字符串。' }),
    cycle: Flags.string({ description: '期数-期次/周期。来源期数选择器 el-select，由 time.split(\',\')[1] 经 Number() 转换；选项值来自 getCycles 的 item.cycle。未选择时传空字符串。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetFinancePushTask)

    const data = await this.client.get('/erpFinance/erpFinance/financePushTask/getFinancePushTask', { params: {} })
    this.output(data)
  }
}
