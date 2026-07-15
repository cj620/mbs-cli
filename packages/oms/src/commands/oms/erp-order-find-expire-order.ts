// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindExpireOrder extends MBSCommand {
  static description = '到期订单列表查询：订单管理「到期订单」页签查询：按店铺、店长、延迟天数区间筛选备货到期/临期订单，分页返回订单列表（含状态、店铺、金额、备货时长、国家、物流、运费等）及总数/总页数。'

  static flags = {
    shopid: Flags.string({ description: '店铺ID（来源店铺下拉 #shopName8，空则不限店铺）' }),
    shopManager: Flags.string({ description: '店长/店铺负责人（来源店长下拉 #saleLeader8）' }),
    delayDaysS: Flags.string({ description: '延迟天数-起始（来源输入框 #delayDaysS，单位：天；仅首次查询拼接）' }),
    delayDaysE: Flags.string({ description: '延迟天数-结束（来源输入框 #delayDaysE，单位：天；仅首次查询拼接）' }),
    currPage: Flags.string({ description: '当前页码（来源分页组件 .dueM-box，首次查询不传，翻页时拼接）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindExpireOrder)

    const data = await this.client.post('/erpOrder/erpOrder/saleFussionOrder/findExpireOrder', {}, { params: { "shopid": flags.shopid, "shopManager": flags.shopManager, "delayDaysS": flags.delayDaysS, "delayDaysE": flags.delayDaysE, "currPage": flags.currPage } })
    this.output(data)
  }
}
