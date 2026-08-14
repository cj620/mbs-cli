// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetCharacteristicOption extends MBSCommand {
  static description = '根据属性获取对应值：根据属性获取对应值'

  static flags = {
    categoryId: Flags.integer({ description: '类目ID（字段名推断,语义待核实）' }),
    characteristicsId: Flags.integer({ description: 'CharacteristicsID（字段名推断,语义待核实）' }),
    keyValue: Flags.string({ description: '键值（字段名推断,语义待核实）' }),
    limitSize: Flags.integer({ description: '限制大小（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetCharacteristicOption)

    const data = await this.client.post('/yypms/pms/yandexPublish/getCharacteristicOption', { "categoryId": flags.categoryId, "characteristicsId": flags.characteristicsId, "keyValue": flags.keyValue, "limitSize": flags.limitSize })
    this.output(data)
  }
}
