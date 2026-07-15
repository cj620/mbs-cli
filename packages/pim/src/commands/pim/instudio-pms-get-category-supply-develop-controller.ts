// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetCategorySupplyDevelopController extends MBSCommand {
  static description = '分类下拉：分类下拉'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetCategorySupplyDevelopController)

    const data = await this.client.post('/yypms/pms/supplyDevelopController/getCategory', {})
    this.output(data)
  }
}
