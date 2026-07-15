// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopListingController extends MBSCommand {
  static description = '按平台查询店铺(findShop)：爆款listing页面(\'店铺\'下拉联动)：根据所选平台(reserve11)查询该平台下的店铺列表，渲染到店铺下拉框(#shopId)。当未选择平台时传空 reserve11，查询全部店铺。'

  static flags = {
    reserve11: Flags.string({ description: '平台(平台ID)，取自下拉控件 $("#plaformId").val()。为空时查询全部平台下店铺。来源控件：平台选择框' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopListingController)

    const data = await this.client.post('/erpProduct/erpProduct/listingController/findShop', { "reserve11": flags.reserve11 })
    this.output(data)
  }
}
