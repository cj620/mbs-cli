// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpsoldoutFindInfringProductNum extends MBSCommand {
  static description = '待处理侵权商品数量查询：工作台(customerservice)首页顶部统计卡片，按员工查询其名下「待处理侵权」商品数量。页面初始化及切换组员时各调用一次，返回数量填入 #findInfringProductNum，并用返回的员工ID拼接侵权明细页链接。'

  static flags = {
    userId: Flags.string({ description: '员工ID(YY员工ID)。URL query 参数；首页初始化取自 data.obj.user_info.yyemployeeId，切换组员时取自 #userInfo 选中项 data-value(组员 employeeId)。用于查询该员工名下待处理侵权商品数量', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpsoldoutFindInfringProductNum)

    const data = await this.client.post('/dev/erpsoldout/erpsoldout/infringing/findInfringProductNum', {}, { params: { "userId": flags.userId } })
    this.output(data)
  }
}
