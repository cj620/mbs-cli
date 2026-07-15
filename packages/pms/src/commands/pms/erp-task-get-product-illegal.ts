// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetProductIllegal extends MBSCommand {
  static description = '违规产品列表查询：已完成商品看板"违规产品"页签的分页列表查询：按当前页码/每页条数、审核状态(待处理/已完成)及角色(经理·总监/普通)拉取违规(被举报)商品列表，返回商品信息、开发人/创建人、销量(7/30/90)、毛利率/退款率、举报类型/原因/图片、处理结果等字段，供 productsTemplate 渲染。'

  static flags = {
    page: Flags.string({ description: '当前页码。首屏固定 1，分页回调取 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定传 10', required: true }),
    checkStatus: Flags.string({ description: '审核状态。取自页面下拉 #checkStatus：1=待处理；2=已完成' }),
    role: Flags.string({ description: '角色标识。getoper() 的 obj 为"产品部-经理"或"产品部-总监"时=2，否则=1' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskGetProductIllegal)

    const data = await this.client.post('/erpTask/erpTask/developMustDo/getProductIllegal', { "page": flags.page, "pageSize": flags.pageSize, "checkStatus": flags.checkStatus, "role": flags.role })
    this.output(data)
  }
}
