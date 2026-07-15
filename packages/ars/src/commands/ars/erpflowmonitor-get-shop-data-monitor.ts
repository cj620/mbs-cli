// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpflowmonitorGetShopDataMonitor extends MBSCommand {
  static description = '店铺流量监控-平台流量看板数据查询：店铺流量监控页「平台流量看板」按平台/大酋长/组员/店铺维度，统计近 1/7/30 天店铺整体流量指标(访客数UV、访问次数PV、人均访问次数、访问时长、被访问产品数、订单量及各指标环比上期变化率)，用于渲染顶部 7 个指标卡。'

  static flags = {
    bigChief: Flags.string({ description: '大酋长(店铺管理者)，来源多选控件 #shopManager (comma-separated)' }),
    employeeNames: Flags.string({ description: '组员(销售员)名称列表，仅当 bigChief 非空时下发；来源 #employeeList 或 sessionStorage.employeName (comma-separated)' }),
    shopIds: Flags.string({ description: '店铺ID列表，来源多选控件 #shoptypeid (comma-separated)' }),
    platformId: Flags.string({ description: '所属平台，来源下拉 #platformId。1=ebay;89=SeeBee', required: true }),
    dayNum: Flags.string({ description: '统计天数，来源 1/7/30 天按钮。1=近1天;7=近7天;30=近30天', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpflowmonitorGetShopDataMonitor)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpflowmonitor/erpflowmonitor/ebayDataMonitor/getShopDataMonitor', { "bigChief": toArray(flags.bigChief, 'string'), "employeeNames": toArray(flags.employeeNames, 'string'), "shopIds": toArray(flags.shopIds, 'string'), "platformId": flags.platformId, "dayNum": flags.dayNum })
    this.output(data)
  }
}
