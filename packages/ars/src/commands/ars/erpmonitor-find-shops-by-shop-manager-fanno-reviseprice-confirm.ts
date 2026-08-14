// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindShopsByShopManagerFannoRevisepriceConfirm extends MBSCommand {
  static description = '根据店铺负责人查询店铺列表：fanno提价页"生成提价商品信息"弹窗中，选择"店铺负责人"后联动触发；以负责人(员工名)列表为入参，查询其名下的店铺，返回店铺名称集合用于填充"店铺"多选下拉框。'

  static flags = {
    shopManager: Flags.string({ description: '店铺负责人(员工名 employee_name，多选时英文逗号拼接)。来源控件 #shopManagerSelect 多选下拉。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindShopsByShopManagerFannoRevisepriceConfirm)

    const data = await this.client.post('/erpmonitor/erpmonitor/fannoRevisepriceConfirm/findShopsByShopManager', { "shopManager": flags.shopManager })
    this.output(data)
  }
}
