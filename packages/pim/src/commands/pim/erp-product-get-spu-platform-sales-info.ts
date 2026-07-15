// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSpuPlatformSalesInfo extends MBSCommand {
  static description = 'SPU平台30天销量信息查询：商品详情「spu销售量趋势图」页面右侧「平台30天销量(单)」柱状图数据源：按 SPU 查询该商品近30天(可按 month 月份偏移)各平台/店铺的销量(订单数)，前端用 ECharts 横向柱状图渲染。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源：页面 URL 查询串，GetQueryString(\'spu\')', required: true }),
    month: Flags.string({ description: '月份偏移量(0=当前月，每点上一月+1)。来源：页面全局变量 month，控件为上一月/下一月翻页按钮。注：指定 URL ?spu= 的原始注释写法未拼接 month (待人工确认)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSpuPlatformSalesInfo)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getSpuPlatformSalesInfo', { "spu": flags.spu, "month": flags.month })
    this.output(data)
  }
}
