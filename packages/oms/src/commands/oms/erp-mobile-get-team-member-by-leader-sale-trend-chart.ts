// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetTeamMemberByLeaderSaleTrendChart extends MBSCommand {
  static description = '获取组长名下团队组员列表：移动端马帮ERP「销售搜索」页面初始化时调用，根据当前登录人(组长)身份返回其名下可选的团队组员列表，用于渲染"组员"多选筛选项。前端无入参，由后端依据登录态识别组长并返回组员集合。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetTeamMemberByLeaderSaleTrendChart)

    const data = await this.client.get('/erpMobile/erpMobile/saleTrendChart/getTeamMemberByLeader', { params: {} })
    this.output(data)
  }
}
