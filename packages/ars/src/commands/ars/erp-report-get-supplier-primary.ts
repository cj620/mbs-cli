// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetSupplierPrimary extends MBSCommand {
  static description = '供应商初付/批次明细查询：按供应商名称、平台单号、应付金额区间、入库时间区间分页查询供应商应付（初付）汇总数据，返回每条供应商应付记录及其下挂的批次入库明细列表（批次号/单价/入库数量/邮费/入库时间/采购时间）。'

  static flags = {
    supplierName: Flags.string({ description: '供应商名称（来源输入框「供应商名称」，模糊查询）' }),
    orderNumber: Flags.string({ description: '平台单号（来源输入框「平台单号」）' }),
    beginYingFuAmount: Flags.string({ description: '最小应付金额（来源输入框「最小应付金额」，金额下限，单位：元）' }),
    endYingFuAmount: Flags.string({ description: '最大应付金额（来源输入框「最大应付金额」，金额上限，单位：元）' }),
    beginReceivedTime: Flags.string({ description: '入库起始时间（来源日期选择器「入库起始时间」，type=date）' }),
    endReceivedTime: Flags.string({ description: '入库结束时间（来源日期选择器「入库结束时间」，type=date）' }),
    page: Flags.string({ description: '当前页码（分页组件 current-change 传入，默认 1，由 unproxy 覆盖写入）', required: true }),
    size: Flags.string({ description: '每页条数（分页组件 size，默认 50，可选 50/100/150/200）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetSupplierPrimary)

    const data = await this.client.post('/erpReport/erpReport/SupplierPrimaryBatchController/getSupplierPrimary', { "supplierName": flags.supplierName, "orderNumber": flags.orderNumber, "beginYingFuAmount": flags.beginYingFuAmount, "endYingFuAmount": flags.endYingFuAmount, "beginReceivedTime": flags.beginReceivedTime, "endReceivedTime": flags.endReceivedTime, "page": flags.page, "size": flags.size })
    this.output(data)
  }
}
