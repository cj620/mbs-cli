// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetDeveloperBigChief extends MBSCommand {
  static description = '获取开发大酋长(含小酋长)名单：移动端开发数据搜索页加载时调用，返回当前可筛选的“大酋长”与“小酋长”开发负责人姓名列表，用于渲染“大酋长”分组的复选框筛选项。无任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetDeveloperBigChief)

    const data = await this.client.get('/erpMobile/erpMobile/saleTrendChart/getDeveloperBigChief', { params: {} })
    this.output(data)
  }
}
