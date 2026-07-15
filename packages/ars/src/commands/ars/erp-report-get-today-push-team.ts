// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetTodayPushTeam extends MBSCommand {
  static description = '平台刊登推送表查询：按平台与时间区间分页查询各平台今日刊登推送汇总数据，返回平台人数、人均/总推送量、第一轮新品（昨日提交）、24/72小时出单、推送覆盖率、单SPU推送次数、放弃率/放弃次数、推送失败SPU等运营监控指标。'

  static flags = {
    page: Flags.string({ description: '当前页码，来源分页组件及搜索按钮，默认从1开始', required: true }),
    beginDateTime: Flags.string({ description: '开始时间，来源日期区间选择器 time[0]，格式 YYYY-MM-DD' }),
    endDateTime: Flags.string({ description: '结束时间，来源日期区间选择器 time[1]，格式 YYYY-MM-DD' }),
    platformName: Flags.string({ description: '平台名称，来源平台下拉框选项 platformlist[].platformname' }),
    limit: Flags.string({ description: '每页条数，前端固定传100', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetTodayPushTeam)

    const data = await this.client.post('/erpReport/erpReport/todayPushTeam/getTodayPushTeam', { "page": flags.page, "beginDateTime": flags.beginDateTime, "endDateTime": flags.endDateTime, "platformName": flags.platformName, "limit": flags.limit })
    this.output(data)
  }
}
