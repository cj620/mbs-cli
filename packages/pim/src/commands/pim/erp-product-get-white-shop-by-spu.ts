// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetWhiteShopBySpu extends MBSCommand {
  static description = 'SPU可刊登白名单店铺查询：商品SPU列表页中，鼠标悬浮“可刊登店铺”气泡时，按SPU查询该商品在各平台可刊登（白名单）的店铺列表，按平台分组展示平台名与店铺名。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号；来源于组件 prop spu（prop.spu），即列表行 {{value.spu}}。按此SPU查询其可刊登的白名单店铺', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetWhiteShopBySpu)

    const data = await this.client.post('/erpProduct/erpProduct/product/getWhiteShopBySpu', { "spu": flags.spu })
    this.output(data)
  }
}
