// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetFinancePushTaskSell extends MBSCommand {
  static description = '财务推送任务-销售导入日志查询：财务数据导入页面：展开某个推送任务行或导入过程中(每5秒轮询)调用，按期数(年份/周期)+任务ID查询该任务下的销售导入子任务列表，返回各子任务的数据周期、应导入数/成功数/失败数、进度、操作人、状态、操作时间，用于表格展开行渲染与进度刷新。'

  static flags = {
    years: Flags.string({ description: '期数-年份。来源期数选择器 time.split(\',\')[0] 并 Number()；time 为空时传空字符串。单位:年' }),
    cycle: Flags.string({ description: '期数-周期(第几期)。来源期数选择器 time.split(\',\')[1] 并 Number()；time 为空时传空字符串' }),
    taskId: Flags.string({ description: '任务ID。来源表格行 row.sid(外层任务记录主键 sid)，标识要查询子任务/导入日志的推送任务', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetFinancePushTaskSell)

    const data = await this.client.post('/erpFinance/erpFinance/financePushTask/getFinancePushTaskSell', { "years": flags.years, "cycle": flags.cycle, "taskId": flags.taskId })
    this.output(data)
  }
}
