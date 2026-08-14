// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetEstimatedFreightDetail extends MBSCommand {
  static description = '预估运费明细查询：销售报表-预估运费明细分页查询：根据父页面透传的查询条件(params)、统计日期(currentdate)与页码(page)，分页返回订单的预估运费明细列表(订单号/店铺号/预估运费/店长/时间)及总条数、总页数。'

  static flags = {
    currentdate: Flags.string({ description: '统计日期。来源：URL 查询参数 oneDay，补写为 params.currentdate', required: true }),
    page: Flags.string({ description: '当前页码。初次查询固定为 1；翻页时取分页控件 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetEstimatedFreightDetail)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getEstimatedFreightDetail', { "currentdate": flags.currentdate, "page": flags.page })
    this.output(data)
  }
}
