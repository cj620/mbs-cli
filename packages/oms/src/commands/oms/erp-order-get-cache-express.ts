// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetCacheExpress extends MBSCommand {
  static description = '获取缓存运单(借用单号)信息：在“借用Vova运单号”页面，前端无参 POST 请求该接口，获取后端缓存的运单号集合及外部/内部调用耗时；desc/innerdesc/url 均为逗号拼接字符串，前端 split(\',\') 后通过 art-template 渲染并显示接口用时/内部用时。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetCacheExpress)

    const data = await this.client.post('/erpOrder/erpOrder/ERPOrder/getCacheExpress', {})
    this.output(data)
  }
}
