// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListRelistingResultsLazadaPublish extends MBSCommand {
  static description = 'Lazada Relisting结果列表查询：查询Lazada平台重新刊登(relisting)结果列表：支持按店铺负责人、店铺、relisting时间区间筛选，分页返回各店铺当日relisting成功/失败数量、负责人、生成日期等汇总信息，用于lazada relisting列表页展示。'

  static flags = {
    employeeId: Flags.string({ description: '店铺负责人ID(来源#employeeId下拉,仅当未选店铺且选了负责人时传)' }),
    shopName: Flags.string({ description: '店铺名称(来源#shopName下拉,仅当选了店铺时传)' }),
    relistingTimeStart: Flags.string({ description: 'relisting开始时间(yyyy-MM-dd,来源#relistingTimeStart,空时默认昨天)', required: true }),
    relistingTimeEnd: Flags.string({ description: 'relisting结束时间(yyyy-MM-dd,来源#relistingTimeEnd,空时默认昨天)', required: true }),
    pageSize: Flags.string({ description: '每页条数,前端固定传100', required: true }),
    currentPage: Flags.string({ description: '当前页码,首次固定1,分页时取api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListRelistingResultsLazadaPublish)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaPublish/listRelistingResults', { "employeeId": flags.employeeId, "shopName": flags.shopName, "relistingTimeStart": flags.relistingTimeStart, "relistingTimeEnd": flags.relistingTimeEnd, "pageSize": flags.pageSize, "currentPage": flags.currentPage })
    this.output(data)
  }
}
