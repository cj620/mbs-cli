// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetTeamMemberByLeaderHotProductListing extends MBSCommand {
  static description = '根据大酋长(经理)查询组员列表：订单移动端搜索页中，选中某个大酋长(经理)后，按该经理的员工ID查询其下属团队组员列表，用于渲染「组员」多选框；选中组员后会进一步触发店铺列表查询(getLeaderShop2)。'

  static flags = {
    bigChiefEmployeeId: Flags.string({ description: '大酋长(经理)员工ID。取自 getManager()——读取 name="chiefBy" 选中单选项的 value(经理 employeeId)；未选中时为空。来源控件：#chiefByLogin 经理单选框' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetTeamMemberByLeaderHotProductListing)

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/getTeamMemberByLeader', { "bigChiefEmployeeId": flags.bigChiefEmployeeId })
    this.output(data)
  }
}
