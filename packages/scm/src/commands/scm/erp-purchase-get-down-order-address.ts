// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchaseGetDownOrderAddress extends MBSCommand {
  static description = '采购下单-获取下单收货地址列表：采购下单/自动下单弹窗中，依据当前勾选的子SKU列表与所属仓库(storageId)，向后端查询可下单的收货地址集合，返回地址字符串数组，前端渲染为地址下拉框(#address2/#genaddress)的option选项，默认选中第一项。'

  static flags = {
    storageId: Flags.string({ description: '仓库(库存)ID，URL查询参数，来源行数据 obj.storageId；用于限定该仓库下可选下单收货地址', required: true }),
    skuList: Flags.string({ description: '请求体根：勾选的子SKU编号数组(JSON.stringify(params)，params=_getCheckedSkus(i)，取勾选复选框value) (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchaseGetDownOrderAddress)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseDownOrder/getDownOrderAddress', { "storageId": flags.storageId, "skuList": toArray(flags.skuList, 'string') })
    this.output(data)
  }
}
