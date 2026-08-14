// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductInterceptLog extends MBSCommand {
  static description = '亚马逊刊登拦截词/SKU 操作日志查询：查询亚马逊自动刊登「拦截词/拦截SKU」的操作日志：按拦截关键字模糊检索，分页返回每条日志的操作人、操作时间、类型(拦截词/拦截SKU)与内容。用于「操作日志」弹窗展示。'

  static flags = {
    interceptKey: Flags.string({ description: '拦截词检索关键字。来源输入框 el-input v-model=interceptKey(placeholder「请输入拦截词」)；为空时查全部' }),
    page: Flags.string({ description: '当前页码。初始为 1，翻页时取 el-pagination 的 pageChange(e) 当前页', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定为 10(state.pageSize=10)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductInterceptLog)

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/interceptLog', { "interceptKey": flags.interceptKey, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
