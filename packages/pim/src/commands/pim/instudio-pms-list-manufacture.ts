// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsListManufacture extends MBSCommand {
  static description = '供应商中台的列表数据：供应商中台的列表数据'

  static flags = {
    times: Flags.string({ description: '时间' }),
    manufacture: Flags.string({ description: '供应商' }),
    paymentType: Flags.string({ description: '付款方式' }),
    buyer: Flags.string({ description: '采购员' }),
    buyers: Flags.string({ description: '采购员s (comma-separated)' }),
    page: Flags.integer({ description: '页码' }),
    pageSize: Flags.integer({ description: '页容量' }),
    startIndex: Flags.integer({ description: '开始页码' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsListManufacture)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/manufacture/list', { "times": flags.times, "manufacture": flags.manufacture, "paymentType": flags.paymentType, "buyer": flags.buyer, "buyers": toArray(flags.buyers, 'string'), "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex })
    this.output(data)
  }
}
