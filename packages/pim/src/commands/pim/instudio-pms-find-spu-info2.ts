// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindSpuInfo2 extends MBSCommand {
  static description = 'SPU编辑页面：SPU编辑页面'

  static flags = {
    index: Flags.string({ description: '索引（字段名推断,语义待核实）', required: true }),
    createdBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    createdOn: Flags.string({ description: '创建（字段名推断,语义待核实）' }),
    brandId: Flags.string({ description: '品牌ID（字段名推断,语义待核实）' }),
    skustatus: Flags.integer({ description: 'Skustatus（字段名推断,语义待核实）', required: true }),
    warehouseid: Flags.integer({ description: 'Warehouseid（字段名推断,语义待核实）', required: true }),
    positionname: Flags.string({ description: 'Positionname（字段名推断,语义待核实）' }),
    companyname: Flags.string({ description: 'Companyname（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    nameCn: Flags.string({ description: '名称中文（字段名推断,语义待核实）' }),
    tagId: Flags.integer({ description: '标签ID（字段名推断,语义待核实）', required: true }),
    createtimestart: Flags.string({ description: 'Createtimestart（字段名推断,语义待核实）' }),
    createtimeend: Flags.string({ description: 'Createtimeend（字段名推断,语义待核实）' }),
    orderby: Flags.integer({ description: 'Orderby（字段名推断,语义待核实）', required: true }),
    marketstates: Flags.integer({ description: 'Marketstates（字段名推断,语义待核实）', required: true }),
    categoryId: Flags.string({ description: '类目ID（字段名推断,语义待核实）' }),
    parentCategoryId: Flags.string({ description: '父级类目ID（字段名推断,语义待核实）' }),
    principal: Flags.string({ description: 'Principal（字段名推断,语义待核实）' }),
    keywordArry: Flags.string({ description: '关键词ARRY（字段名推断,语义待核实）' }),
    userId: Flags.string({ description: '用户ID（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindSpuInfo2)

    const data = await this.client.post('/yypms/pms/spu/findSpuInfo2', {}, { params: { "index": flags.index, "createdBy": flags.createdBy, "createdOn": flags.createdOn, "brand_id": flags.brandId, "skustatus": flags.skustatus, "warehouseid": flags.warehouseid, "positionname": flags.positionname, "companyname": flags.companyname, "spu": flags.spu, "name_cn": flags.nameCn, "tag_id": flags.tagId, "createtimestart": flags.createtimestart, "createtimeend": flags.createtimeend, "orderby": flags.orderby, "marketstates": flags.marketstates, "category_id": flags.categoryId, "parent_category_id": flags.parentCategoryId, "principal": flags.principal, "keywordArry": flags.keywordArry, "userId": flags.userId } })
    this.output(data)
  }
}
