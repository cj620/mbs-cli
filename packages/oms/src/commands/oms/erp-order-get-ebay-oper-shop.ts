// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetEbayOperShop extends MBSCommand {
  static description = '获取eBay店铺/店长/国家下拉数据：eBay店铺SPK发货比例报表页初始化时调用，一次性返回当前用户可见的店铺列表、店铺负责人(店长)列表、国家列表，用于填充页面顶部「--店铺--」「--店铺负责人--」「--国家--」三个多选下拉框。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetEbayOperShop)

    const data = await this.client.post('/erpOrder/erpOrder/ebayShopSpkRate/getEbayOperShop', {})
    this.output(data)
  }
}
