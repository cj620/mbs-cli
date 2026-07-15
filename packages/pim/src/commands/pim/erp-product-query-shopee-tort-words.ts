// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductQueryShopeeTortWords extends MBSCommand {
  static description = '查询Shopee拦截关键词(侵权词)：Shopee商品刊登页面点击「拦截关键词」按钮时调用，无入参，返回当前Shopee平台的全部拦截/侵权关键词字符串列表，前端在 #shopeeWordModal 弹窗内用 art-template 模板 shopeeWordTemplate 遍历 obj 渲染为关键词标签。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductQueryShopeeTortWords)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/queryShopeeTortWords', {})
    this.output(data)
  }
}
