// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetAddShippingfeeByOneDay extends MBSCommand {
  static description = '某日补差运费(getAddShippingfeeByOneDay)明细查询：查询某一天(oneDay)的订单补差运费明细：以上一页传入的报表筛选条件(URL params)为基础，叠加统计日 oneDay、分页参数，分页返回订单编号、店铺号、补差运费、店长等明细行，并返回总页数用于分页。'

  static flags = {
    oneDay: Flags.string({ description: '统计日(某一天)。来源：URL query oneDay，由 GetQueryString(\'oneDay\') 取得后写入 params.oneDay' }),
    pageSize: Flags.string({ description: '每页条数。来源：前端固定写死 100', required: true }),
    page: Flags.string({ description: '当前页码。来源：search(index) 入参，默认 1，分页回调传入当前页', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetAddShippingfeeByOneDay)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getAddShippingfeeByOneDay', { "oneDay": flags.oneDay, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
