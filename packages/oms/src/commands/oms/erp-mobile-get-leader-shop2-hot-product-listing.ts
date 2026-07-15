// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetLeaderShop2HotProductListing extends MBSCommand {
  static description = '组员店铺列表查询(getLeaderShop2)：订单查询(爆款)页"店铺"下拉数据源：根据所选大酋长(经理)、组员、平台及店铺名模糊关键字，查询并返回对应的可选店铺列表(店铺ID+店铺名)，渲染为店铺多选复选框。平台/组员选择变化或店铺名输入时自动触发。'

  static flags = {
    bigChiefEmployeeId: Flags.string({ description: '大酋长(经理)员工ID。来源：getManager() 读取 name=chiefBy 选中项 value 后 .toString()(单选)' }),
    teamNumberEmployeeNames: Flags.string({ description: '组员员工名称集合(逗号拼接)。来源：getShopManager() 读取 name=MemberByLeader 选中项 value 数组后 .join(\',\')(多选)' }),
    platformId: Flags.string({ description: '平台ID。来源：getPlatform() 读取 name=Platform 选中项 value 后 .toString()(单选)' }),
    shopName: Flags.string({ description: '店铺名称(模糊搜索关键字)。来源：输入框 #shopName 的值，oninput 触发查询' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetLeaderShop2HotProductListing)

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/getLeaderShop2', { "bigChiefEmployeeId": flags.bigChiefEmployeeId, "teamNumberEmployeeNames": flags.teamNumberEmployeeNames, "platformId": flags.platformId, "shopName": flags.shopName })
    this.output(data)
  }
}
