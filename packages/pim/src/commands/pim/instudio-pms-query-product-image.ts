// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryProductImage extends MBSCommand {
  static description = '查询商品图片：查询商品图片(源码无注释,按方法名推断)'

  static flags = {
    productId: Flags.integer({ description: '商品ID（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryProductImage)

    const data = await this.client.post('/yypms/pms/productImage/queryProductImage', {}, { params: { "productId": flags.productId } })
    this.output(data)
  }
}
