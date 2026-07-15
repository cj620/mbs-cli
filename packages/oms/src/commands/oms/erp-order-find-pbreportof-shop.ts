// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindPbreportofShop extends MBSCommand {
  static description = '店铺ProductBoost(PB)推广费报表查询：根据店铺ID与活动时间区间，查询该店铺下 Wish ProductBoost(商品推广)各活动的费用报表：返回活动基础信息、GMV/PB GMV、活动最大预算、广告总消耗与期间消耗、曝光费/报名费/曝光数等明细；前端对 totalCampaignSpend、incrementFee 做合计生成汇总行并以 art-template 渲染表格。'

  static flags = {
    startTime: Flags.string({ description: '活动统计-开始时间，来源 URL 查询参数 startTime', required: true }),
    endTime: Flags.string({ description: '活动统计-结束时间，来源 URL 查询参数 endTime', required: true }),
    shopId: Flags.string({ description: '店铺ID，来源 URL 查询参数 shopId，用于筛选指定店铺的 PB 报表', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindPbreportofShop)

    const data = await this.client.post('/erpOrder/erpOrder/wishProductBoost/findPBReportofShop', { "startTime": flags.startTime, "endTime": flags.endTime, "shopId": flags.shopId })
    this.output(data)
  }
}
