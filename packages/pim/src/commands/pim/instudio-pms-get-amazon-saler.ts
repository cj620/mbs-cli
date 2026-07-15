// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetAmazonSaler extends MBSCommand {
  static description = '获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetAmazonSaler)

    const data = await this.client.get('/yypms/pms/amazon/getAmazonSaler', { params: {} })
    this.output(data)
  }
}
