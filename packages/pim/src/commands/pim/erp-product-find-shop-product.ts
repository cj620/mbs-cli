// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
