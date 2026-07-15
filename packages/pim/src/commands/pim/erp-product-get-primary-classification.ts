// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPrimaryClassification extends MBSCommand {
  static description = '获取商品一级分类(SKU分类下拉)：进入「商品导出新建」页时($(document).ready)无条件调用，拉取商品一级分类列表，用 art-template 渲染 #contentTemplate3 填充「SKU分类」多选下拉(#skuCategory)的可选项。无请求参数，返回分类数组，每项以 name 同时作为下拉的 value 与显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPrimaryClassification)

    const data = await this.client.post('/erpProduct/erpProduct/product/getPrimaryClassification', {})
    this.output(data)
  }
}
