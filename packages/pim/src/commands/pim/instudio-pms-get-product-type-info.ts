// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetProductTypeInfo extends MBSCommand {
  static description = '获取产品类型列表（直接读取所有的产品类型）：获取产品类型列表（直接读取所有的产品类型）'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetProductTypeInfo)

    const data = await this.client.get('/yypms/pms/amazon/new/getProductTypeInfo', { params: {} })
    this.output(data)
  }
}
