// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorShopByPlatform extends MBSCommand {
  static description = '平台店铺/店铺负责人下拉查询：热销商品监控页初始化及平台切换时调用：按平台(platformId)查询该平台下的店铺列表与店铺负责人列表，返回结果分别渲染到店铺下拉(shopId/shopName)与店铺负责人下拉(saleLeader)。无 platformId 时返回全部平台的店铺/负责人。'

  static flags = {
    platformId: Flags.string({ description: '平台ID(经查询串 ?platformId= 传入,用于筛选该平台下的店铺/负责人;初始化调用不传即查询全部平台)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorShopByPlatform)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/shopByPlatform', {}, { params: { "platformId": flags.platformId } })
    this.output(data)
  }
}
