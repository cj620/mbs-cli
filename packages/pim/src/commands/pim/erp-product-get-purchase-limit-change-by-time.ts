// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPurchaseLimitChangeByTime extends MBSCommand {
  static description = '导出备货额度变更明细：库存/备货额度管理页「导出额度明细」按钮触发：按提交人、审核人、审核状态、额度状态、SKU、提交时间区间等条件，导出采购/备货额度变更明细。响应为二进制文件流(Excel)，前端以 blob 接收并通过 content-disposition 中的 fileName 生成下载链接。'

  static flags = {
    oper: Flags.string({ description: '提交人(多选)，选项来自 /yypms/pms/photoOrder/getAllEmp 员工列表，初始为空数组 (comma-separated)' }),
    checkBy: Flags.string({ description: '审核人，选项同 getAllEmp 员工列表' }),
    checkStatus: Flags.string({ description: '审核状态。1=审核通过;2=待审核;3=审核不通过' }),
    saleStatus: Flags.string({ description: '额度状态。1=正在销售;2=待销售;3=售空' }),
    sku: Flags.string({ description: 'SKU(多个用英文逗号隔开)' }),
    beginTime: Flags.string({ description: '提交时间-起始(YYYY-MM-DD)，由日期范围选择器 time[0] 覆盖，默认当前时间前30天' }),
    endTime: Flags.string({ description: '提交时间-结束(YYYY-MM-DD)，由日期范围选择器 time[1] 覆盖，默认当前日期' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPurchaseLimitChangeByTime)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/product/getPurchaseLimitChangeByTime', { "oper": toArray(flags.oper, 'string'), "checkBy": flags.checkBy, "checkStatus": flags.checkStatus, "saleStatus": flags.saleStatus, "sku": flags.sku, "beginTime": flags.beginTime, "endTime": flags.endTime })
    this.output(data)
  }
}
