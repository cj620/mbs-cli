// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
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
