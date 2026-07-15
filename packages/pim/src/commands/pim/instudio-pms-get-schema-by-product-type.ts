// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSchemaByProductType extends MBSCommand {
  static description = '获取指定的Schema文件：获取指定的Schema文件'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）', required: true }),
    productType: Flags.string({ description: '商品类型（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSchemaByProductType)

    const data = await this.client.get('/yypms/pms/amazon/new/getSchemaByProductType', { params: { "shopName": flags.shopName, "productType": flags.productType } })
    this.output(data)
  }
}
