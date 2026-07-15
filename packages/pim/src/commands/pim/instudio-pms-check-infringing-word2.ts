// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheckInfringingWord2 extends MBSCommand {
  static description = '检查是否包含违禁词：检查是否包含违禁词'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheckInfringingWord2)

    const data = await this.client.post('/yypms/pms/infringing/checkInfringingWord2', {})
    this.output(data)
  }
}
