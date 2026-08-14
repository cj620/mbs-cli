// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListRelistingResults extends MBSCommand {
  static description = 'AliExpress Relisting结果列表查询：速卖通(平台ID=10) relisting 结果列表查询：按店铺负责人、店铺、relisting时间区间分页查询，返回每个店铺/日期的 relisting 成功数量、失败数量及生成/relisting日期，并附分页总页数与总条数。'

  static flags = {
    employeeId: Flags.string({ description: '店铺负责人ID(来源#employeeId下拉,取employee_id;仅当shopName为空且employeeId非空时传)' }),
    shopName: Flags.string({ description: '店铺名称(来源#shopName下拉;仅当shopName非空时传)' }),
    relistingTimeStart: Flags.string({ description: 'relisting开始时间(来源#relistingTimeStart,为空默认昨天)', required: true }),
    relistingTimeEnd: Flags.string({ description: 'relisting结束时间(来源#relistingTimeEnd,为空默认昨天)', required: true }),
    pageSize: Flags.string({ description: '每页条数,固定100', required: true }),
    currentPage: Flags.string({ description: '当前页码(search固定1,分页回调取api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListRelistingResults)

    const data = await this.client.post('/erpPublish/erpPublish/smtProductPublish/listRelistingResults', { "employeeId": flags.employeeId, "shopName": flags.shopName, "relistingTimeStart": flags.relistingTimeStart, "relistingTimeEnd": flags.relistingTimeEnd, "pageSize": flags.pageSize, "currentPage": flags.currentPage })
    this.output(data)
  }
}
