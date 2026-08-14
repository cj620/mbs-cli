// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListRelistingResultsShopeeProductPublish extends MBSCommand {
  static description = 'Shopee Relisting 结果列表查询：查询 Shopee 重新刊登(relisting)结果列表：按店铺负责人、店铺、relisting 时间区间分页查询，返回各店铺当日 relisting 成功/失败数量、生成日期与 relisting 日期，供 shopee relisting 列表页表格渲染与分页。'

  static flags = {
    employeeId: Flags.string({ description: '店铺负责人ID(下拉框 #employeeId；仅当未选店铺且已选负责人时传，与 shopName 互斥)' }),
    shopName: Flags.string({ description: '店铺名称(下拉框 #shopName；仅当已选店铺时传，与 employeeId 互斥)' }),
    relistingTimeStart: Flags.string({ description: 'relisting开始时间(日期框 #relistingTimeStart；格式 yyyy-MM-dd；未选默认当前日期前一天)' }),
    relistingTimeEnd: Flags.string({ description: 'relisting结束时间(日期框 #relistingTimeEnd；格式 yyyy-MM-dd；未选默认当前日期前一天)' }),
    pageSize: Flags.string({ description: '每页条数(前端固定传 100)', required: true }),
    currentPage: Flags.string({ description: '当前页码(首次固定 1，翻页取分页组件 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListRelistingResultsShopeeProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/listRelistingResults', { "employeeId": flags.employeeId, "shopName": flags.shopName, "relistingTimeStart": flags.relistingTimeStart, "relistingTimeEnd": flags.relistingTimeEnd, "pageSize": flags.pageSize, "currentPage": flags.currentPage })
    this.output(data)
  }
}
