// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetDingDingAttendance extends MBSCommand {
  static description = '钉钉考勤(奋斗榜)查询：获取钉钉考勤奋斗榜数据，返回员工加班时长排行列表(含头像、姓名、部门、加班小时数)及考勤统计时间，用于 struggleLlist 看板页面渲染。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetDingDingAttendance)

    const data = await this.client.get('/erpaccount/erpaccount/account/getDingDingAttendance', { params: {} })
    this.output(data)
  }
}
