// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-28T00:00:00+08:00 @ 0288660e19ac6780f7e17ea7cf6dbba582d931f13fc7926fe3ff6f26ae1e4148
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class AccountPage extends MBSCommand {
  static description = 'Page account list'

  static flags = {
    currentPage: Flags.integer({ description: 'Current page' }),
    pageSize: Flags.integer({ description: 'Page size' }),
    id: Flags.integer({ description: 'Account ID' }),
    code: Flags.string({ description: 'Account code' }),
    busCode: Flags.string({ description: 'Business code' }),
    status: Flags.integer({ description: 'Account status' }),
    account: Flags.string({ description: 'Account name' }),
    platform: Flags.string({ description: 'Platform' }),
    hostType: Flags.integer({ description: 'Host type' }),
    email: Flags.string({ description: 'Email' }),
    phone: Flags.string({ description: 'Phone' }),
    accountType: Flags.string({ description: 'Account type' }),
    passwordUpdateTime: Flags.string({ description: 'Password update time range (comma-separated)' }),
    hasExpired: Flags.boolean({ description: 'Password expired', allowNo: true }),
    incorrect: Flags.integer({ description: 'Incorrect flag' }),
    enabled: Flags.boolean({ description: 'Enabled', allowNo: true }),
    groupCompanyId: Flags.integer({ description: 'Company ID' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(AccountPage)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/gateway/account-center-service/account/page/noauth', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "id": flags.id, "code": flags.code, "busCode": flags.busCode, "status": flags.status, "account": flags.account, "platform": flags.platform, "hostType": flags.hostType, "email": flags.email, "phone": flags.phone, "accountType": flags.accountType, "passwordUpdateTime": toArray(flags.passwordUpdateTime, 'string'), "hasExpired": flags.hasExpired, "incorrect": flags.incorrect, "enabled": flags.enabled, "groupCompanyId": flags.groupCompanyId })
    this.output(data)
  }
}
