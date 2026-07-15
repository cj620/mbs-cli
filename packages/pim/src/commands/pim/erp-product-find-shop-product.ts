// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopProduct extends MBSCommand {
  static description = '查询可公开店铺列表：SPU 详情页加载"对外公开店铺(publiclyAvailableShops)"下拉框时调用，返回可选店铺列表(店铺名称集合)，前端通过 art-template 模板 contentTemplate17 渲染为 <option> 选项。请求不携带任何参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopProduct)

    const data = await this.client.post('/erpProduct/erpProduct/product/findShop', {})
    this.output(data)
  }
}
