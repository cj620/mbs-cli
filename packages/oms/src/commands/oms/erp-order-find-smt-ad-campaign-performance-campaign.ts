// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindSmtAdCampaignPerformanceCampaign extends MBSCommand {
  static description = 'SMT广告报表-广告活动绩效查询：速卖通(SMT)广告报表页查询：按店铺/人员维度，结合周期、店长、店铺、排序方式等条件分页查询广告活动绩效，返回曝光、点击、下单、毛利、广告费、ACOS、ROI、PB占比等汇总指标列表。'

  static flags = {
    groupBy: Flags.string({ description: '统计维度。shop=按店铺查看;oper=按人员查看(默认shop)', required: true }),
    weekList: Flags.string({ description: '周期(周)列表,多选;元素为周标识week字符串(选项取自findSmtAdCampaignWeeks,默认选中isSelect=1的周) (comma-separated)' }),
    shopManager: Flags.string({ description: '店长姓名(选项取自findAllManagerPlatform,默认空串)' }),
    shopName: Flags.string({ description: '店铺名称(选项取自findAllshopPlatform的shopname,默认空串)' }),
    orderField: Flags.string({ description: '排序字段。exposure/click/ctr/cvr/promotionCount/cpc/orderNum/roi/cost/payOrderAmt/acos/orderAmount/payOrderCnt/collectionNum/cartNum/totalAmount/profit/profitRate/pbRate(默认exposure)', required: true }),
    orderSort: Flags.string({ description: '排序方向。desc=降序;asc=升序(默认desc)', required: true }),
    pageSize: Flags.string({ description: '每页条数。枚举50/100/150/200(默认50)', required: true }),
    page: Flags.string({ description: '当前页码(由unproxy写入,默认1)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindSmtAdCampaignPerformanceCampaign)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/eabyAdCampaignFee/findSmtAdCampaignPerformanceCampaign', { "groupBy": flags.groupBy, "weekList": toArray(flags.weekList, 'string'), "shopManager": flags.shopManager, "shopName": flags.shopName, "orderField": flags.orderField, "orderSort": flags.orderSort, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
