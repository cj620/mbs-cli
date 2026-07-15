// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsPageHotgoodsProtect extends MBSCommand {
  static description = '热销保护分页查询：热销保护分页查询'

  static flags = {
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
    spu: Flags.string({ description: 'SPU（字段名推断,语义待核实）' }),
    sku: Flags.string({ description: 'SKU（字段名推断,语义待核实）' }),
    shopManagerList: Flags.string({ description: '店铺负责人 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsPageHotgoodsProtect)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/amazon/hotgoodsProtect/page', { "page": flags.page, "pageSize": flags.pageSize, "shopName": flags.shopName, "spu": flags.spu, "sku": flags.sku, "shopManagerList": toArray(flags.shopManagerList, 'string') })
    this.output(data)
  }
}
