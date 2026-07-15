// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetDbSpuSalesStatusShopDatas extends MBSCommand {
  static description = '个人SKU业绩-店铺SKU销售业绩数据查询：「个人sku业绩」页面主列表查询：按月份(可多选)、平台、总监/经理/主管/店长组织层级、SKU、排序条件分页查询店铺维度的SKU销售业绩，返回销售额、销量、毛利额/毛利率、退款/退款率、广告费(含店长明细)等汇总指标。'

  static flags = {
    platformList: Flags.string({ description: '平台对象列表（来源「平台」多选下拉，元素为所选平台对象） (comma-separated)' }),
    directorList: Flags.string({ description: '总监ID列表（来源「总监」多选下拉，元素为总监 id） (comma-separated)' }),
    manager: Flags.string({ description: '经理ID列表（来源「经理」多选下拉，元素为经理 id） (comma-separated)' }),
    littleLeaders: Flags.string({ description: '主管ID列表（来源「主管」多选下拉，元素为主管 id） (comma-separated)' }),
    shopManager: Flags.string({ description: '店长名称列表（来源「店长」多选下拉，value 取 name） (comma-separated)' }),
    pageSize: Flags.string({ description: '每页条数（分页控件，可选 20/30/40，默认 20）', required: true }),
    sku: Flags.string({ description: 'SKU（输入框，多个 SKU 用英文逗号分隔）' }),
    monthsList: Flags.string({ description: '月份列表（来源月份树形多选，元素格式 YYYY-MM，默认当前月） (comma-separated)' }),
    pageNo: Flags.string({ description: '当前页码（默认 1）', required: true }),
    orderMapList: Flags.string({ description: '排序条件列表（表头排序生成；无排序时为空数组） (comma-separated)' }),
    platformNames: Flags.string({ description: '平台名称列表（由 platformList 映射 PLATFORMNAME 生成，元素为 string） (comma-separated)' }),
    bigChiefs: Flags.string({ description: '总监列表（值等同 directorList，提交时附加发送） (comma-separated)' }),
    leaders: Flags.string({ description: '经理列表（值等同 manager，提交时附加发送） (comma-separated)' }),
    employeeNames: Flags.string({ description: '店长名称列表（值等同 shopManager，提交时附加发送，元素为 string） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetDbSpuSalesStatusShopDatas)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/feeReport/getDbSpuSalesStatusShopDatas', { "platformList": toArray(flags.platformList, 'unknown'), "directorList": toArray(flags.directorList, 'string'), "manager": toArray(flags.manager, 'string'), "littleLeaders": toArray(flags.littleLeaders, 'string'), "shopManager": toArray(flags.shopManager, 'string'), "pageSize": flags.pageSize, "sku": flags.sku, "monthsList": toArray(flags.monthsList, 'string'), "pageNo": flags.pageNo, "orderMapList": toArray(flags.orderMapList, 'unknown'), "platformNames": toArray(flags.platformNames, 'string'), "bigChiefs": toArray(flags.bigChiefs, 'string'), "leaders": toArray(flags.leaders, 'string'), "employeeNames": toArray(flags.employeeNames, 'string') })
    this.output(data)
  }
}
