// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetLeaderShop2SaleTrendChart extends MBSCommand {
  static description = '组长店铺列表查询(getLeaderShop2)：移动端销售趋势"搜索"页：在用户勾选平台或组员后触发，按所选组员员工姓名与平台ID查询该范围下可选的店铺列表，渲染为店铺勾选框。'

  static flags = {
    teamNumberEmployeeNames: Flags.string({ description: '组员员工姓名。来源：组员勾选框 input.MemberByLeader 的 value(即返回的 employee_name)。未勾选时传空字符串' }),
    platformId: Flags.string({ description: '平台ID。来源：平台勾选框 input.Platform 的 value(即 PLATFORMID)。未勾选时传空字符串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetLeaderShop2SaleTrendChart)

    const data = await this.client.get('/erpMobile/erpMobile/saleTrendChart/getLeaderShop2', { params: { "teamNumberEmployeeNames": flags.teamNumberEmployeeNames, "platformId": flags.platformId } })
    this.output(data)
  }
}
