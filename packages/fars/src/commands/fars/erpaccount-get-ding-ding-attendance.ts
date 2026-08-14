// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
