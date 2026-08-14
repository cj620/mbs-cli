// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetWalmartSaler extends MBSCommand {
  static description = '获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetWalmartSaler)

    const data = await this.client.get('/yypms/pms/walmart/getWalmartSaler', { params: {} })
    this.output(data)
  }
}
