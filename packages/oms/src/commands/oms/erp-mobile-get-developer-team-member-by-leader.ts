// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetDeveloperTeamMemberByLeader extends MBSCommand {
  static description = '获取组长下属开发组员列表：移动端马帮ERP「开发搜索」页面加载时调用，返回当前登录组长名下的开发组员(姓名)列表，用于"组员"筛选区渲染可勾选的复选框。GET 请求，无业务请求参数(身份由会话/Cookie 识别)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetDeveloperTeamMemberByLeader)

    const data = await this.client.get('/erpMobile/erpMobile/saleTrendChart/getDeveloperTeamMemberByLeader', { params: {} })
    this.output(data)
  }
}
