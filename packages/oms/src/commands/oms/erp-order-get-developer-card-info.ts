// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDeveloperCardInfo extends MBSCommand {
  static description = '开发员名片信息查询：仪表盘加载时查询当前登录开发员的名片信息：返回开发员基本信息(姓名/职位/头像/品类/工龄)及8项考核指标(销售额、30天开发量、动销率、爆旺比例、滞销比例、单SKU产出、累积侵权量、30天发货毛利率)的实际值/排名/进度区间。obj为空则判定为非开发员(展示管理者卡片)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDeveloperCardInfo)

    const data = await this.client.get('/erpOrder/erpOrder/developerVisting/getDeveloperCardInfo', { params: {} })
    this.output(data)
  }
}
