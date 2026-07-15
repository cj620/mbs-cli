// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetRunturnPkgbyDate extends MBSCommand {
  static description = '退包(退货报表)按日期查询：退货报表页(马帮ERP)按日期统计退包数据：接收上级页面通过 URL params 透传的筛选条件 JSON，叠加单日标记、分页参数后分页查询，返回订单退包列表(订单编号/店铺/店长/退包收入/订单金额)及分页汇总。'

  static flags = {
    oneDay: Flags.string({ description: '单日标记，取自 URL oneDay 查询串(GetQueryString(\'oneDay\'))，写入 params.oneDay 一并提交' }),
    pageSize: Flags.string({ description: '每页条数，前端固定写死为 100', required: true }),
    page: Flags.string({ description: '当前页码，search(index) 传入则取 index，否则默认 1(分页回调传入当前页)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetRunturnPkgbyDate)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getRunturnPKGByDate', { "oneDay": flags.oneDay, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
