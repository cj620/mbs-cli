// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportPageList extends MBSCommand {
  static description = '导出爆款保护列表页面：导出爆款保护列表页面'

  static flags = {
    pageSize: Flags.integer({ description: '页码' }),
    currentPage: Flags.integer({ description: '当前页' }),
    auth: Flags.string({ description: '授权' }),
    dept: Flags.string({ description: '部门' }),
    operator: Flags.string({ description: '部门' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportPageList)

    const data = await this.client.post('/yypms/pms/amazon/hotgoodsProtect/exportPageList', { "pageSize": flags.pageSize, "currentPage": flags.currentPage, "auth": flags.auth, "dept": flags.dept, "operator": flags.operator })
    this.output(data)
  }
}
