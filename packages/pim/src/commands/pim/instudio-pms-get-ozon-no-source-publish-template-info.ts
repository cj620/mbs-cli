// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetOzonNoSourcePublishTemplateInfo extends MBSCommand {
  static description = 'Ozon无源刊登模板查询信息：Ozon无源刊登模板查询信息'

  static flags = {
    erpSpu: Flags.string({ description: 'ERP SPU' }),
    skuList: Flags.string({ description: 'ERP SKU 列表 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetOzonNoSourcePublishTemplateInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/ozonNoSourceTemplate/getOzonNoSourcePublishTemplateInfo', { "erpSpu": flags.erpSpu, "skuList": toArray(flags.skuList, 'string') })
    this.output(data)
  }
}
