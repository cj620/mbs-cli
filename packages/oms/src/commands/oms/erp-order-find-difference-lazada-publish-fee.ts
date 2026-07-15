// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindDifferenceLazadaPublishFee extends MBSCommand {
  static description = 'Lazada刊登费差异(站内费用)列表查询：查询Lazada刊登费差异(站内RMB费用)对账列表：按费用时间区间分页查询，返回订单/交易编号、店铺、店长、站内RMB费用、费用时间等明细及总条数、总页数，用于差异费用核对展示。'

  static flags = {
    pageSize: Flags.string({ description: '每页条数(前端固定=50)', required: true }),
    page: Flags.string({ description: '当前页码(首次查询=1，翻页取分页控件当前页)', required: true }),
    startTime: Flags.string({ description: '费用时间-起始(格式YYYY-MM-DD 00:00:00，来源URL参数oneDay或startTime，无则不传)' }),
    endTime: Flags.string({ description: '费用时间-结束(格式YYYY-MM-DD 23:59:59，来源URL参数oneDay或endTime，无则不传)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindDifferenceLazadaPublishFee)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/findDifferenceLazadaPublishFee', { "pageSize": flags.pageSize, "page": flags.page, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
