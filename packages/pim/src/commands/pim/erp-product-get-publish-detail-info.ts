// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPublishDetailInfo extends MBSCommand {
  static description = 'Lazada刊登详情统计(getPublishDetailInfo)：进入Lazada刊登管理页时调用，获取当前用户/团队的刊登任务统计：待刊登、刊登中、昨日刊登成功/失败、今日刊登成功/失败六项指标，渲染到页面头部统计卡片。该接口无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPublishDetailInfo)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaPublish/getPublishDetailInfo', {})
    this.output(data)
  }
}
