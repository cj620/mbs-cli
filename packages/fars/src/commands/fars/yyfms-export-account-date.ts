// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsYyfmsExportAccountDate extends MBSCommand {
  static description = 'Payoneer账户费用明细导出：根据币种、起止日期、邮箱、描述等筛选条件及表格勾选的记录ID集合，导出账户费用明细文件(Excel)。前端以XMLHttpRequest POST JSON、responseType=blob接收二进制流，并从响应头content-disposition解析文件名后触发浏览器下载。'

  static flags = {
    currency: Flags.string({ description: '币种(来源:币种输入框 postdata.currency)' }),
    startDate: Flags.string({ description: '开始日期,格式YYYY-MM-DD(来源:日期选择器,默认当前-30天)' }),
    endDate: Flags.string({ description: '结束日期,格式YYYY-MM-DD(来源:日期选择器,默认当天)' }),
    email: Flags.string({ description: '邮箱(来源:邮箱输入框 postdata.email)' }),
    description: Flags.string({ description: '描述(来源:描述输入框 postdata.description)' }),
    ids: Flags.string({ description: '选中导出的记录ID列表(元素为表格行item.id,来源表格多选;空数组表示按筛选条件全量导出) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsYyfmsExportAccountDate)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yyfms/fms/accountcostexport/exportAccountDate', { "currency": flags.currency, "startDate": flags.startDate, "endDate": flags.endDate, "email": flags.email, "description": flags.description, "ids": toArray(flags.ids, 'string') })
    this.output(data)
  }
}
