// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetEmpByDep extends MBSCommand {
  static description = '按部门查询员工(下拉选项)：根据部门ID(depId)查询该部门下的全部员工，返回员工姓名字符串数组(obj)。前端用于采购员/开发员/销售员等人员下拉选择框的选项数据源(label=value=员工姓名)。'

  static flags = {
    depId: Flags.string({ description: '部门ID(query参数)。决定查询哪个部门下的员工。已知取值：65=采购部门；62=(侵权图片/质检/拼售)；54=(海外备货绩效)。前端按页面写死，非用户输入', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetEmpByDep)

    const data = await this.client.post('/erpProduct/erpProduct/product/getEmpByDep', { "depId": flags.depId })
    this.output(data)
  }
}
