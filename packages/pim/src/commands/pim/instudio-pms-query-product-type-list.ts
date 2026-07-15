// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryProductTypeList extends MBSCommand {
  static description = '通过产品标题/关键字信息来筛选产品类型：通过产品标题/关键字信息来筛选产品类型'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）', required: true }),
    keywords: Flags.string({ description: 'Keywords（字段名推断,语义待核实）' }),
    itemName: Flags.string({ description: '条目名称（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryProductTypeList)

    const data = await this.client.get('/yypms/pms/amazon/new/queryProductTypeList', { params: { "shopName": flags.shopName, "keywords": flags.keywords, "itemName": flags.itemName } })
    this.output(data)
  }
}
