// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetEmpByDep2 extends MBSCommand {
  static description = '按部门获取员工列表(分配对象下拉)：采购下单/分配采购任务页面初始化时调用，按当前登录人所属部门返回可分配的员工(开发员)姓名列表，前端用 art-template 模板 contentTemplate3 遍历渲染成“分配对象”下拉框(#assignment)的 <option>，所选姓名后续作为 allocationPurchaseTask 的 oper 参数提交。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetEmpByDep2)

    const data = await this.client.get('/erpProduct/erpProduct/product/getEmpByDep2', { params: {} })
    this.output(data)
  }
}
