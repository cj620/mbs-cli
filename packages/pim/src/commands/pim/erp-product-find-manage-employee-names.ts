// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindManageEmployeeNames extends MBSCommand {
  static description = '查询修改人(管理员工)姓名列表：Lazada批量修改标题页面初始化时调用，无入参，返回当前可选「修改人」(管理员工姓名)字符串数组，前端用 art-template(modifierTemplate) 渲染到「选择修改人」下拉框(#modifier)，供按修改人筛选 Lazada 改标题任务列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindManageEmployeeNames)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaExportController/findManageEmployeeNames', {})
    this.output(data)
  }
}
