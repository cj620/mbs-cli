// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheckProhibitedWordsAmazon extends MBSCommand {
  static description = '检查是否包含违禁词：检查是否包含违禁词'

  static flags = {
    needCheckWords: Flags.string({ description: 'NEED校验Words（字段名推断,语义待核实）' }),
    platformId: Flags.string({ description: '平台ID（字段名推断,语义待核实）' }),
    site: Flags.string({ description: '站点（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheckProhibitedWordsAmazon)

    const data = await this.client.post('/yypms/pms/amazon/checkProhibitedWords', { "needCheckWords": flags.needCheckWords, "platformId": flags.platformId, "site": flags.site })
    this.output(data)
  }
}
