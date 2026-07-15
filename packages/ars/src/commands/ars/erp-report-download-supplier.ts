// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportDownloadSupplier extends MBSCommand {
  static description = '供应商应付下载任务创建：在采购/供应商应付报表页，根据供应商名称、应付金额区间、入库时间区间等筛选条件，向后端提交一个异步下载任务。成功返回 code=200 时弹出创建成功提示，失败用 desc 文案提示。'

  static flags = {
    supplierName: Flags.string({ description: '供应商名称(来源 el-input「供应商名称」，模糊筛选)' }),
    beginYingFuAmount: Flags.string({ description: '最小应付金额(来源 el-input「最小应付金额」，金额下限，单位:元)' }),
    endYingFuAmount: Flags.string({ description: '最大应付金额(来源 el-input「最大应付金额」，金额上限，单位:元)' }),
    beginReceivedTime: Flags.string({ description: '入库起始时间(来源 el-date-picker「入库起始时间」，格式 YYYY-MM-DD)' }),
    endReceivedTime: Flags.string({ description: '入库结束时间(来源 el-date-picker「入库结束时间」，格式 YYYY-MM-DD)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportDownloadSupplier)

    const data = await this.client.post('/erpReport/erpReport/SupplierPrimaryBatchController/downloadSupplier', { "supplierName": flags.supplierName, "beginYingFuAmount": flags.beginYingFuAmount, "endYingFuAmount": flags.endYingFuAmount, "beginReceivedTime": flags.beginReceivedTime, "endReceivedTime": flags.endReceivedTime })
    this.output(data)
  }
}
