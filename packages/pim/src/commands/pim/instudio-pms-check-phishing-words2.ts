// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheckPhishingWords2 extends MBSCommand {
  static description = '单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheckPhishingWords2)

    const data = await this.client.post('/yypms/pms/phishingWordsController/checkPhishingWords2', {})
    this.output(data)
  }
}
