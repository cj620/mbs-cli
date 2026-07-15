// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetYandexPublishShopYandexAutoPublish extends MBSCommand {
  static description = '获取yandex刊登店铺列表：获取yandex刊登店铺列表'

  static flags = {
    shopIds: Flags.string({ description: '店铺ID列表（字段名推断,语义待核实） (comma-separated)' }),
    shopType: Flags.integer({ description: '店铺类型（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetYandexPublishShopYandexAutoPublish)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/yandexAutoPublish/getYandexPublishShop', { "shopIds": toArray(flags.shopIds, 'string'), "shopType": flags.shopType })
    this.output(data)
  }
}
