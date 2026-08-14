// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsCheckPhishingWords extends MBSCommand {
  static description = '单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsCheckPhishingWords)

    const data = await this.client.post('/yypms/pms/phishingWordsController/checkPhishingWords', {})
    this.output(data)
  }
}
