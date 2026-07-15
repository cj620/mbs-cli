// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsYyfmsFmsPositionName extends MBSCommand {
  static description = '查询当前用户岗位名称：根据员工ID查询其在财务结算体系中的岗位名称，前端据返回值是否等于"财务组员"来控制仪表盘上提现登记/账户流水登记两组区块的显隐。JSONP 跨域调用。'

  static flags = {
    userId: Flags.string({ description: '员工ID，取自 Cookie employeeId（getCookie(\'employeeId\')），用于定位当前用户岗位', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsYyfmsFmsPositionName)

    const data = await this.client.get('/yyfms/fms/shopSettlementNew/positionName', { params: {} })
    this.output(data)
  }
}
