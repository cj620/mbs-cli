// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListPublishShopProductPublish extends MBSCommand {
  static description = '查询未刊登过的eBay店铺列表：eBay批量刊登页面初始化时调用，获取当前用户可用于刊登的eBay店铺列表，返回店铺ID、店铺名称及大额/小额Paypal账号，用于渲染选择未刊登过店铺下拉框与请选择您要刊登店铺下拉框。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListPublishShopProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/productPublish/listPublishShop', {})
    this.output(data)
  }
}
