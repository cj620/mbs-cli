// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheckForbidPlatform extends MBSCommand {
  static description = '校验Forbid平台：校验Forbid平台(源码无注释,按方法名推断)'

  static flags = {
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
    platform: Flags.string({ description: '平台（字段名推断,语义待核实）' }),
    checkSkus: Flags.string({ description: '校验SKU列表（字段名推断,语义待核实） (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheckForbidPlatform)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/spu/checkForbidPlatform', { "site": flags.site, "platform": flags.platform, "checkSkus": toArray(flags.checkSkus, 'string') })
    this.output(data)
  }
}
