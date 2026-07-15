// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindShopsByShopManagerLazadaRevisepriceConfirm extends MBSCommand {
  static description = '按店铺负责人查询店铺(findShopsByShopManager)：Lazada商品提价确认页“生成提价商品信息”弹窗中，选择店铺负责人后联动触发：根据所选店铺负责人(可多选,逗号拼接)查询其名下的店铺列表，用于渲染“店铺”下拉框(ySelect)供选择。'

  static flags = {
    shopManager: Flags.string({ description: '店铺负责人(多选逗号拼接)。取自 #shopManagerSelect 选中值 .val().join()，值为各负责人 employee_name 用逗号拼接；选项来源 getTeamMemberByLeader。来源控件：#shopManagerSelect。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindShopsByShopManagerLazadaRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/findShopsByShopManager', { "shopManager": flags.shopManager })
    this.output(data)
  }
}
