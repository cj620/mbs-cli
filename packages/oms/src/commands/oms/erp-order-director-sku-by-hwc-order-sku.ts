// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderDirectorSkuByHwcOrderSku extends MBSCommand {
  static description = '转直邮发货-按海外仓订单SKU获取直邮SKU：订单详情页点击「转直邮发货」时调用：以当前订单未删除(flag!=3)商品列表为入参(每项含 sku/storage/orderId)，请求后端返回转直邮的 SKU 列表(res.data.obj)，写入 basedata.zhiyouSKUList 并在「转直邮发货设置」弹窗中展示「修改前SKU」，供录入「修改后SKU」后确认转单。'

  static flags = {
    requestBody: Flags.string({ description: '请求体根：订单商品列表(由 basedata.ordernum.list 过滤 flag!=3 后映射) (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderDirectorSkuByHwcOrderSku)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/orderNew/directorSkuByHwcOrderSku', { "requestBody": toArray(flags.requestBody, 'unknown') })
    this.output(data)
  }
}
