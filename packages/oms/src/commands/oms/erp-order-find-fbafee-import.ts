// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindFbafeeImport extends MBSCommand {
  static description = 'FBA费用导入记录查询：财务报表-FBA费用导入记录分页查询：按页码分页拉取FBA费用导入记录列表，返回店铺、费用产生时间、费用类型、站点、导入状态、结果描述、创建人/创建时间及源文件地址等信息，供前端表格渲染与分页展示。'

  static flags = {
    page: Flags.string({ description: '当前页码（来源页码变量 fbaPages，初始 1，分页回调更新）', required: true }),
    pageSize: Flags.string({ description: '每页条数（前端固定传 100，页面提示每页100条）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindFbafeeImport)

    const data = await this.client.post('/erpOrder/erpOrder/fbaReport/findFBAFeeImport', { "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
