// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopmanager extends MBSCommand {
  static description = '店铺负责人(店长)下拉查询：爆款 listing 页面初始化时拉取店铺负责人(店长)下拉选项数据，用于店铺负责人筛选控件(#saleLeader)的选项渲染。该调用为无参的空 POST，后端返回全部可选店铺负责人列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopmanager)

    const data = await this.client.post('/erpProduct/erpProduct/listingController/findShopmanager', {})
    this.output(data)
  }
}
