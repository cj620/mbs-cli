// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductQueryTiktokTortWords extends MBSCommand {
  static description = '查询TikTok侵权词(违禁词)列表：在TikTok刊登页面点击「侵权词/违禁词」按钮时，弹出违禁词弹窗并请求该接口，返回全部TikTok侵权词(违禁词)文本数组，前端通过 art-template shopeeWordTemplate 遍历 obj 平铺渲染到弹窗列表。请求不携带任何业务参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductQueryTiktokTortWords)

    const data = await this.client.post('/erpProduct/erpProduct/tiktokProductPublish/queryTiktokTortWords', {})
    this.output(data)
  }
}
