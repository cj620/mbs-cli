// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: fixtures/sample-audit-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 72c8f075e04b68f55ab24eeb60c2fdd522a6a7cd002d255c0f0b0e89842256e2
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class AccountPage extends MBSCommand {
  static description = '分页获取账号列表'

  static flags = {
    currentPage: Flags.integer({ description: '当前页' }),
    pageSize: Flags.integer({ description: '每页大小' }),
    id: Flags.integer({ description: '账号ID' }),
    code: Flags.string({ description: '账号编码' }),
    busCode: Flags.string({ description: '业务编码' }),
    status: Flags.integer({ description: '账号状态' }),
    account: Flags.string({ description: '账号' }),
    platform: Flags.string({ description: '平台' }),
    hostType: Flags.integer({ description: '托管方式' }),
    email: Flags.string({ description: '邮箱' }),
    phone: Flags.string({ description: '手机号' }),
    accountType: Flags.string({ description: '账号类型' }),
    passwordUpdateTime: Flags.string({ description: '密码修改时间区间 (comma-separated)' }),
    hasExpired: Flags.boolean({ description: '密码是否过期', allowNo: true }),
    incorrect: Flags.integer({ description: '是否错误' }),
    enabled: Flags.boolean({ description: '是否启用', allowNo: true }),
    groupCompanyId: Flags.integer({ description: '公司ID' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(AccountPage)

    const toArray = (value: string | undefined): string[] | undefined =>
      value === undefined ? undefined : value.split(',').map((item) => item.trim()).filter(Boolean)

    const data = await this.client.post('/page', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "id": flags.id, "code": flags.code, "busCode": flags.busCode, "status": flags.status, "account": flags.account, "platform": flags.platform, "hostType": flags.hostType, "email": flags.email, "phone": flags.phone, "accountType": flags.accountType, "passwordUpdateTime": toArray(flags.passwordUpdateTime), "hasExpired": flags.hasExpired, "incorrect": flags.incorrect, "enabled": flags.enabled, "groupCompanyId": flags.groupCompanyId }, { pathPrefix: '/account' })
    this.output(data)
  }
}
