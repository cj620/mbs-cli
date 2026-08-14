// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSiteListSaleReport extends MBSCommand {
  static description = '销售报表-站点下拉列表查询：订单时间/发货时间业绩报表页面的站点多选下拉数据源。根据已选所属平台的平台ID列表，查询该平台下的站点集合，用于渲染 #getSiteList 站点多选下拉框。'

  static flags = {
    platformids: Flags.string({ description: '平台ID列表，来源所属平台多选下拉 #reserve11；前端把数组拼接到URL，数组转字符串后为逗号拼接的多个平台ID(如 10,11,12)；初始化传全部平台ID，切换平台传已选平台ID，未选时可能为空。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSiteListSaleReport)

    const data = await this.client.get('/erpOrder/erpOrder/saleReport/getSiteList', { params: { "platformids": flags.platformids } })
    this.output(data)
  }
}
