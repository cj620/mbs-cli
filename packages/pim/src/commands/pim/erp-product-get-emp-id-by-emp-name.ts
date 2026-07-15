// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetEmpIdByEmpName extends MBSCommand {
  static description = '通过登录人查出其管理的员工ID：以当前登录人为入口，查询其所管理的下级员工ID集合（后端 querySubManagerId）。前端示例页 getlogisticsType()(@deprecated) 复用其 obj 数组渲染物流类型候选项填充 #logisticsType。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetEmpIdByEmpName)

    const data = await this.client.post('/erpProduct/erpProduct/joomController/getEmpIdByEmpName', {})
    this.output(data)
  }
}
