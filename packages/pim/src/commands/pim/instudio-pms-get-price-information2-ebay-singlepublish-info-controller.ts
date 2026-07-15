// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetPriceInformation2EbaySinglepublishInfoController extends MBSCommand {
  static description = '计算价格信息2：计算价格信息2'

  static flags = {
    list: Flags.string({ description: '列表列表（字段名推断,语义待核实） (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetPriceInformation2EbaySinglepublishInfoController)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/ebaySinglepublishInfoController/getPriceInformation2', { "list": toArray(flags.list, 'object') })
    this.output(data)
  }
}
