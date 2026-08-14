// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsBatchAmazonPublishInfo extends MBSCommand {
  static description = '批量复制刊登任务：批量复制刊登任务'

  static flags = {
    idList: Flags.string({ description: '复制的id list (comma-separated)' }),
    shopInfoList: Flags.string({ description: '店铺信息列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsBatchAmazonPublishInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/amazon/new/batchAmazonPublishInfo', { "idList": toArray(flags.idList, 'string'), "shopInfoList": toArray(flags.shopInfoList, 'object') })
    this.output(data)
  }
}
