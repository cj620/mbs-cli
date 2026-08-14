// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutVerifier extends MBSCommand {
  static description = '获取侵权审核人列表：商品侵权审核页加载时调用，获取可选的侵权审核人(审核人)员工列表，用于渲染筛选区 #Auditor 下拉框。无请求参数；响应为审核人数组，前端用 art-template 模板 contentTemplate5 遍历 obj 渲染 option，取 employeeId 作为 value、employeeName 作为显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutVerifier)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/verifier', {})
    this.output(data)
  }
}
