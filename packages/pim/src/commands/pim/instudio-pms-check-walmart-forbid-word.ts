// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheckWalmartForbidWord extends MBSCommand {
  static description = 'walmart刊登禁售词校验：walmart刊登禁售词校验'

  static flags = {
    checkResult: Flags.boolean({ description: '校验结果（字段名推断,语义待核实）', allowNo: true }),
    checkforbidWordList: Flags.string({ description: 'Checkforbid词列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheckWalmartForbidWord)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/walmart/checkWalmartForbidWord', { "checkResult": flags.checkResult, "checkforbidWordList": toArray(flags.checkforbidWordList, 'object') })
    this.output(data)
  }
}
