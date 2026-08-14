// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetYandexPublishShopYandexPublish extends MBSCommand {
  static description = '获取yandex刊登店铺列表：获取yandex刊登店铺列表'

  static flags = {
    shopType: Flags.integer({ description: '店铺类型（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetYandexPublishShopYandexPublish)

    const data = await this.client.post('/yypms/pms/yandexPublish/getYandexPublishShop', {}, { params: { "shopType": flags.shopType } })
    this.output(data)
  }
}
