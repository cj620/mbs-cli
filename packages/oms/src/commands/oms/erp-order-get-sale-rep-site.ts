// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSaleRepSite extends MBSCommand {
  static description = '销售报表-按店铺查询站点刊登统计(getSaleRepSite)：销售月报表第三层（店铺维度）查询：根据店铺名称与月份描述，查询该店铺各站点的新刊登量、总在线量、新品比例，用于月报表悬浮下拉框中展示站点刊登统计明细。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（第三层被操作的店铺名，来源为页面店铺行传入的 shopName 参数）', required: true }),
    descr: Flags.string({ description: '月份描述/标识（查询所属月份，来源 sessionStorage 的 thisMonth/lastMonth/beforeMonth，由调用方以 descr 传入）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSaleRepSite)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getSaleRepSite', { "shopName": flags.shopName, "descr": flags.descr })
    this.output(data)
  }
}
