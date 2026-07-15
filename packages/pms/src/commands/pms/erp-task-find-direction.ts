// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskFindDirection extends MBSCommand {
  static description = '人员(方向)下拉列表查询：任务统计报表页初始化时调用，用于拉取「人员/方向(direction)」下拉选择框的可选项列表。接口无请求参数，返回一个字符串数组，前端通过 contentTemplate2 模板 v-for 渲染为 #direction 下拉框的 option 选项。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskFindDirection)

    const data = await this.client.post('/erpTask/erpTask/taskController/findDirection', {})
    this.output(data)
  }
}
