// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSchemaPathComplete extends MBSCommand {
  static description = '查询指定的Schema文件是否同步完成：查询指定的Schema文件是否同步完成'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）', required: true }),
    productType: Flags.string({ description: '商品类型（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSchemaPathComplete)

    const data = await this.client.get('/yypms/pms/amazon/new/getSchemaPathComplete', { params: { "shopName": flags.shopName, "productType": flags.productType } })
    this.output(data)
  }
}
