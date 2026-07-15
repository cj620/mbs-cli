// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetSkuOnlineProduct extends MBSCommand {
  static description = 'SPU在线商品SKU明细查询：在“已上架商品数量统计”页面点击某平台SPU行的展开箭头时触发，按平台SPU ID + 平台 + 统计日期查询该SPU下的在线子SKU明细（平台子SKU、胤元SKU、售价、库存、尺寸/颜色），渲染为SPU下的子表格。'

  static flags = {
    spuId: Flags.string({ description: '平台SPU ID。来源=表格行展开箭头控件 onclick="getSkuOnlineProduct({{value.spuId}})"（列表接口返回行的 spuId），用于查询该SPU下的子SKU明细', required: true }),
    platformId: Flags.string({ description: '平台ID。来源=页面URL query 参数 platformId（GetQueryString("platformId"))' }),
    analysisCreatedOn: Flags.string({ description: '统计/分析生成日期。来源=页面URL query 参数 analysisCreatedOn，经 decodeURI 解码后提交' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetSkuOnlineProduct)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/getSkuOnlineProduct', {}, { params: { "spuId": flags.spuId, "platformId": flags.platformId, "analysisCreatedOn": flags.analysisCreatedOn } })
    this.output(data)
  }
}
