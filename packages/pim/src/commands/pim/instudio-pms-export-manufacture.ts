// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportManufacture extends MBSCommand {
  static description = '供应商中台导出：供应商中台导出'

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
    const { flags } = await this.parse(PimInstudioPmsExportManufacture)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/manufacture/export', { "times": flags.times, "manufacture": flags.manufacture, "paymentType": flags.paymentType, "buyer": flags.buyer, "buyers": toArray(flags.buyers, 'string'), "page": flags.page, "pageSize": flags.pageSize, "startIndex": flags.startIndex })
    this.output(data)
  }
}
