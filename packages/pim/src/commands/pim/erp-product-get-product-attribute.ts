// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductAttribute extends MBSCommand {
  static description = '获取商品(SKU)属性列表：查询全部商品(SKU)属性，供「商品导出新建」页「SKU属性」多选下拉框作为可选项数据源。无请求参数，固定返回属性集合，前端通过 art-template 渲染为 <option>。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductAttribute)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getProductAttribute', {})
    this.output(data)
  }
}
