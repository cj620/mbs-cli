// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListEzBuyShop extends MBSCommand {
  static description = 'EzBuy刊登店铺列表查询：进入EzBuy刊登管理页时调用，获取当前可选的EzBuy刊登店铺列表，用于「选择刊登店铺」筛选下拉框（#shopName）与「生成下架商品信息」弹窗的店铺选择框（#selectShop）。无请求参数，返回店铺数组，前端仅取店铺名 shopName 渲染为下拉选项。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListEzBuyShop)

    const data = await this.client.post('/erpProduct/erpProduct/ezBuyProductPublish/listEzBuyShop', {})
    this.output(data)
  }
}
