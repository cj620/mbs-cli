// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetNotificationList extends MBSCommand {
  static description = '查询通知列表：查询通知列表(源码无注释,按方法名推断)'

  static flags = {
    platform: Flags.string({ description: '平台（字段名推断,语义待核实）' }),
    shopName: Flags.string({ description: '店铺名称（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetNotificationList)

    const data = await this.client.post('/yypms/pms/middlePanel/getNotificationList', { "platform": flags.platform, "shopName": flags.shopName })
    this.output(data)
  }
}
