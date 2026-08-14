// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderSkuWarehouseList extends MBSCommand {
  static description = '海外仓SKU仓位查询：订单详情页「转海外仓」弹窗中，选择海外仓类型后，按订单未删除明细行(flag!=3)批量提交 sku/海外仓类型/订单号，查询并返回各 SKU 对应的海外仓 SKU(hwcSku)等信息，渲染「修改前SKU/修改后SKU」对照表。'

  static flags = {
    root: Flags.string({ description: '请求体根数组(订单明细 SKU 列表，每元素一条) (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderSkuWarehouseList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/skuWarehouseList', { "(root)": toArray(flags.root, 'unknown') })
    this.output(data)
  }
}
