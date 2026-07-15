// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetDbSpuSalesStatusShopDataDetails extends MBSCommand {
  static description = 'SPU店铺销售状态店铺数据明细(退款明细)查询：SKU业绩页中点击某行退款金额时，按所选月份/平台/总监/经理/主管/店长及SKU筛选条件，分页查询该SKU+平台维度下的退款订单明细列表，渲染于退款详情抽屉表格。'

  static flags = {
    monthsList: Flags.string({ description: '月份列表，元素为 年-月 字符串(如 2025-06)。来源：月份树选择器，多选，默认当前月 (comma-separated)' }),
    sku: Flags.string({ description: 'SKU 编号，多个用逗号分隔。来源：搜索框；点击退款行时改写为该行 sku，合计行则取 json 中各 sku 逗号拼接' }),
    platformList: Flags.string({ description: '平台对象列表，来源：平台多选(value 为平台对象) (comma-separated)' }),
    platformNames: Flags.string({ description: '平台名称列表。由 platformList 映射 PLATFORMNAME 得到；点击退款行时改写为该行平台名，合计行则取 json 各平台名数组 (comma-separated)' }),
    directorList: Flags.string({ description: '总监ID列表(原始字段)。来源：总监多选(value=item.id) (comma-separated)' }),
    bigChiefs: Flags.string({ description: '总监ID列表(后端别名，等于 directorList) (comma-separated)' }),
    manager: Flags.string({ description: '经理ID列表(原始字段)。来源：经理多选(value=item.id) (comma-separated)' }),
    leaders: Flags.string({ description: '经理ID列表(后端别名，等于 manager) (comma-separated)' }),
    littleLeaders: Flags.string({ description: '主管ID列表。来源：主管多选(value=item.id) (comma-separated)' }),
    shopManager: Flags.string({ description: '店长名称列表(原始字段)。来源：店长多选(value=item.name) (comma-separated)' }),
    employeeNames: Flags.string({ description: '店长名称列表(后端别名，等于 shopManager) (comma-separated)' }),
    orderMapList: Flags.string({ description: '排序条件列表，来源：表格列排序。无排序时为空数组 (comma-separated)' }),
    pageNo: Flags.string({ description: '当前页码。明细分页 refundpage.pageNo，从1开始', required: true }),
    pageSize: Flags.string({ description: '每页条数。明细分页 refundpage.pageSize，默认50(可选50/100/200)', required: true }),
    total: Flags.string({ description: '总条数。refundpage.total 被一并展开进请求体透传(前端遗留字段，后端通常忽略)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetDbSpuSalesStatusShopDataDetails)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/feeReport/getDbSpuSalesStatusShopDataDetails', { "monthsList": toArray(flags.monthsList, 'string'), "sku": flags.sku, "platformList": toArray(flags.platformList, 'unknown'), "platformNames": toArray(flags.platformNames, 'string'), "directorList": toArray(flags.directorList, 'string'), "bigChiefs": toArray(flags.bigChiefs, 'string'), "manager": toArray(flags.manager, 'string'), "leaders": toArray(flags.leaders, 'string'), "littleLeaders": toArray(flags.littleLeaders, 'string'), "shopManager": toArray(flags.shopManager, 'string'), "employeeNames": toArray(flags.employeeNames, 'string'), "orderMapList": toArray(flags.orderMapList, 'unknown'), "pageNo": flags.pageNo, "pageSize": flags.pageSize, "total": flags.total })
    this.output(data)
  }
}
