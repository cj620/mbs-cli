// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAddPositionName extends MBSCommand {
  static description = '根据部门名称获取岗位/人员名称：备货规则新增/编辑弹窗中，用户在「部门权限」下拉选择部门并触发 change 时调用。以部门名称为入参，返回该部门下可分配的岗位/人员名称集合，前端将返回的 obj 赋给 state.dialogOptions.stockUpCheckEmp 作为人员权限相关选项数据。'

  static flags = {
    name: Flags.string({ description: '部门名称（URL query 参数）。取自「部门权限」下拉 stockUpDeptCheckName 当前选中值 e.toString()，用于查询该部门下可分配的岗位/人员名称。来源控件：部门权限 el-select（@change=changeDepartId）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAddPositionName)

    const data = await this.client.post('/erpProduct/erpProduct/product/getAddPositionName', { "name": flags.name })
    this.output(data)
  }
}
