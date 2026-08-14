// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceAuthUrl extends MBSCommand {
  static description = 'Payoneer 账号授权链接获取：根据 Payoneer 账号ID获取该账号的 OAuth 授权链接。前端点击「获取授权链接」按钮触发；返回链接非空时 window.open 打开授权，返回空字符串时提示「暂无授权链接」。'

  static flags = {
    accountId: Flags.string({ description: 'Payoneer 账号ID，URL 路径参数；指定要获取授权链接的账号。本前端示例中硬编码为 100049360。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceAuthUrl)

    const data = await this.client.get('/erpFinance/erpFinance/payoneer/account/100049360/auth-url', { params: { "accountId": flags.accountId } })
    this.output(data)
  }
}
