// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelTkVoucherProvisionFetcher extends MBSCommand {
  static description = 'TikTok计提冲销凭证拉取(列表查询)：TikTok平台「计提冲销」凭证并行拉取的列表分页查询：按订单编号、结算单号、店铺名称、创建(付款)时间区间、所属公司等条件筛选，分页返回交易号、发货时间、店铺、平台费、物流费、币种、汇率、上传人、公司等字段。?type=1 为固定查询参数。'

  static flags = {
    orderIds: Flags.string({ description: '订单编号(交易号)，输入框按空格拆分为字符串数组，空时为[] (comma-separated)' }),
    settlementIds: Flags.string({ description: '结算单号，输入框按空格拆分为字符串数组，空时为[] (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称(模糊匹配)' }),
    shortCreateTime: Flags.string({ description: '创建(付款)时间-起始，默认\'\'' }),
    longCreateTime: Flags.string({ description: '创建(付款)时间-结束，默认\'\'' }),
    companyId: Flags.string({ description: '所属公司。1=胤元;33=启元' }),
    pageSize: Flags.string({ description: '每页条数，默认100，可选100/200/300/400', required: true }),
    page: Flags.string({ description: '当前页码(从1开始)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelTkVoucherProvisionFetcher)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelTkVoucherProvisionFetcher', { "orderIds": toArray(flags.orderIds, 'string'), "settlementIds": toArray(flags.settlementIds, 'string'), "shopName": flags.shopName, "shortCreateTime": flags.shortCreateTime, "longCreateTime": flags.longCreateTime, "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
