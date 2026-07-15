// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryPage extends MBSCommand {
  static description = '列表信息：列表信息'

  static flags = {
    index: Flags.string({ description: '索引（字段名推断,语义待核实）' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    tagId: Flags.string({ description: '标签ID（字段名推断,语义待核实）' }),
    brandId: Flags.string({ description: '品牌ID（字段名推断,语义待核实）' }),
    productname: Flags.string({ description: '商品名称（字段名推断,语义待核实）' }),
    createoper: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    createtimestart: Flags.string({ description: 'Createtimestart（字段名推断,语义待核实）' }),
    createtimeend: Flags.string({ description: 'Createtimeend（字段名推断,语义待核实）' }),
    companyname: Flags.string({ description: 'Companyname（字段名推断,语义待核实）' }),
    warehouseid: Flags.integer({ description: 'Warehouseid（字段名推断,语义待核实）', required: true }),
    positionmname: Flags.string({ description: 'Positionmname（字段名推断,语义待核实）' }),
    skustatus: Flags.integer({ description: 'Skustatus（字段名推断,语义待核实）', required: true }),
    orderby: Flags.integer({ description: 'Orderby（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryPage)

    const data = await this.client.post('/yypms/pms/product/queryPage', {}, { params: { "index": flags.index, "sku": flags.sku, "spu": flags.spu, "category_id": flags.categoryId, "tag_id": flags.tagId, "brand_id": flags.brandId, "productname": flags.productname, "createoper": flags.createoper, "createtimestart": flags.createtimestart, "createtimeend": flags.createtimeend, "companyname": flags.companyname, "warehouseid": flags.warehouseid, "positionmname": flags.positionmname, "skustatus": flags.skustatus, "orderby": flags.orderby } })
    this.output(data)
  }
}
