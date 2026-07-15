// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindshopByManger extends MBSCommand {
  static description = '按店铺负责人查询店铺(findshopByManger)：PB广告费报表页：根据已选「店铺负责人」联动查询其名下店铺列表，结果渲染到「请选择店铺」下拉(#shopName)。由 #shopManger 选择框 onchange 触发的 findshopByManger() 发起；GET 请求，shopmanager 作为查询字符串传入。'

  static flags = {
    shopmanager: Flags.string({ description: '店铺负责人(姓名)。取值 $(\'#shopManger\').val()；候选项由 findAllManager 接口填充(option value=value.shopmanager)；默认/未选时为空字符串(不限)。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindshopByManger)

    const data = await this.client.get('/erpOrder/erpOrder/wishProductBoost/findshopByManger', { params: { "shopmanager": flags.shopmanager } })
    this.output(data)
  }
}
