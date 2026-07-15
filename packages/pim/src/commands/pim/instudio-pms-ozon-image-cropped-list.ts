// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsOzonImageCroppedList extends MBSCommand {
  static description = '提交裁剪数据：提交裁剪数据'

  static flags = {
    erpSpu: Flags.string({ description: 'ERPSPU（字段名推断,语义待核实）' }),
    listingId: Flags.integer({ description: '当前编辑的 id' }),
    croppedList: Flags.string({ description: '当前需要裁剪的数据 (comma-separated)' }),
    spuFormList: Flags.string({ description: 'spu的原图数据 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsOzonImageCroppedList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/ozonSinglepublishInfoController/ozonImageCroppedList', { "erpSpu": flags.erpSpu, "listingId": flags.listingId, "croppedList": toArray(flags.croppedList, 'object'), "spuFormList": toArray(flags.spuFormList, 'object') })
    this.output(data)
  }
}
