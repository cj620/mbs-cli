// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsMmsVenomListWarehouse extends MBSCommand {
  static description = 'Temu 供应商销售管理-仓库(备货)库存列表查询：Temu 商家后台备货/库存分页列表查询：按店铺(mallid 头)、是否缺货、调价近N天、最大剩余库存数分页拉取 SKC 明细，返回缺货/售罄/即将售罄等汇总统计及每个 SKC 的 SKU 数量明细、多仓库存信息、价格与备货建议。'

  static flags = {
    isLack: Flags.string({ description: '是否只查缺货,当前固定传0', required: true }),
    priceAdjustRecentDays: Flags.string({ description: '调价近N天(单位:天),当前固定传7', required: true }),
    maxRemanentInventoryNum: Flags.string({ description: '最大剩余库存数,当前固定传1', required: true }),
    pageNo: Flags.string({ description: '当前页码(从1开始)', required: true }),
    pageSize: Flags.string({ description: '每页条数,当前固定传40', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsMmsVenomListWarehouse)

    const data = await this.client.post('/mms/venom/api/supplier/sales/management/listWarehouse', { "isLack": flags.isLack, "priceAdjustRecentDays": flags.priceAdjustRecentDays, "maxRemanentInventoryNum": flags.maxRemanentInventoryNum, "pageNo": flags.pageNo, "pageSize": flags.pageSize })
    this.output(data)
  }
}
