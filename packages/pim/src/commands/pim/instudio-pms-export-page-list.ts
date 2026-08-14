// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
