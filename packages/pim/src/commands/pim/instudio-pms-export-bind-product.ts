// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportBindProduct extends MBSCommand {
  static description = '导出捆绑商品：导出捆绑商品'

  static flags = {
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    queryField: Flags.string({ description: '查询字段（字段名推断,语义待核实）' }),
    field: Flags.string({ description: '字段（字段名推断,语义待核实）' }),
    keyword: Flags.string({ description: '关键词（字段名推断,语义待核实）' }),
    text: Flags.string({ description: '文本（字段名推断,语义待核实）' }),
    status: Flags.string({ description: '状态（字段名推断,语义待核实）' }),
    exportAll: Flags.boolean({ description: '导出全部（字段名推断,语义待核实）', allowNo: true }),
    exportScope: Flags.string({ description: '导出范围（字段名推断,语义待核实）' }),
    exportType: Flags.string({ description: '导出类型（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportBindProduct)

    const data = await this.client.post('/yypms/pms/product/exportBindProduct', { "page": flags.page, "currentPage": flags.currentPage, "pageSize": flags.pageSize, "queryField": flags.queryField, "field": flags.field, "keyword": flags.keyword, "text": flags.text, "status": flags.status, "exportAll": flags.exportAll, "exportScope": flags.exportScope, "exportType": flags.exportType })
    this.output(data)
  }
}
