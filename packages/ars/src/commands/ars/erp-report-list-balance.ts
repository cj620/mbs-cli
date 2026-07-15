// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportListBalance extends MBSCommand {
  static description = '速卖通店铺余额列表查询：按店铺名称分页查询速卖通(AliExpress)各店铺账户余额（可用余额、总余额、冻结余额、币种、拉取时间），用于运营监控页表格展示与导出。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码（分页组件当前页，首次加载固定为1；来源 el-pagination current-change）', required: true }),
    pageSize: Flags.string({ description: '每页条数（默认100，可选 50/100/150/200；来源 el-pagination page-sizes）', required: true }),
    shopNameList: Flags.string({ description: '店铺名称列表（多选店铺名，可为空表示全部；来源 header 店铺多选框 shop，值为 SHOPNAME 数组） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportListBalance)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/aliexpress/balance/list', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "shopNameList": toArray(flags.shopNameList, 'string') })
    this.output(data)
  }
}
