// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceList extends MBSCommand {
  static description = 'Payoneer账号列表查询：查询 Payoneer 合作伙伴账号列表：支持按邮箱、账号状态筛选并分页，返回账号基础信息(ID/合作伙伴ID/邮箱/姓名/电话/地址/状态/授权状态)及总数。'

  static flags = {
    email: Flags.string({ description: '邮箱(模糊查询关键词)；来源「邮箱」输入框，默认空' }),
    status: Flags.string({ description: '账号状态；枚举 Active/Pending/Inactive；默认 Active；来源「状态」下拉' }),
    currentPage: Flags.string({ description: '当前页码；来源分页组件，默认 1' }),
    pageSize: Flags.string({ description: '每页条数；固定 100' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceList)

    const data = await this.client.post('/erpFinance/erpFinance/payoneer/account/list', { "email": flags.email, "status": flags.status, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
