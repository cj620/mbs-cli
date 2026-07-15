// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetShopownerSalesPkMatch extends MBSCommand {
  static description = '店长销售PK赛榜单查询：大屏轮播看板按平台查询店长销售额PK赛榜单：传入统计日期(time，前端取昨日 yyyyMMdd)与平台(platform)，返回各二/三级部门、店长在指定平台的上月/本月/预计本月/预计增长销售额及平台排名、公司排名，用于大屏自动滚动轮播展示。'

  static flags = {
    time: Flags.string({ description: '统计日期。格式 yyyyMMdd；前端取昨日日期(当前时间减24小时后格式化)。来源：JS计算，非控件', required: true }),
    platform: Flags.string({ description: '平台标识。枚举：ebay/Amazon/Shopee/aliexpress/Lazada。来源：页面URL查询参数 platform(GetQueryString(\'platform\'))', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetShopownerSalesPkMatch)

    const data = await this.client.post('/erpOrder/erpOrder/pKmatchController/getShopownerSalesPkMatch', { "time": flags.time, "platform": flags.platform })
    this.output(data)
  }
}
