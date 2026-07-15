// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorOnSoldProduct extends MBSCommand {
  static description = '已售商品(SPU)监控列表查询：依据店铺、平台、统计日期分页查询该店铺已售出的平台商品(SPU)列表，返回平台SPU ID、平台/胤元SPU编号、商品名称、关键字、售出数量、上架时间与最后更新时间，供运营监控页面表格渲染。'

  static flags = {
    shopId: Flags.string({ description: '店铺ID，取自页面URL参数 shopId(GetQueryString("shopId"))', required: true }),
    platformId: Flags.string({ description: '平台ID，取自页面URL参数 platformId(全局 platformId = GetQueryString("platformId"))', required: true }),
    analysisCreatedOn: Flags.string({ description: '统计/分析创建日期，取自页面URL参数 analysisCreatedOn 并 decodeURI 解码(格式待人工确认)', required: true }),
    currPage: Flags.string({ description: '当前页码；首次搜索固定为1，分页时取分页组件 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorOnSoldProduct)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/onSoldProduct', {}, { params: { "shopId": flags.shopId, "platformId": flags.platformId, "analysisCreatedOn": flags.analysisCreatedOn, "currPage": flags.currPage } })
    this.output(data)
  }
}
