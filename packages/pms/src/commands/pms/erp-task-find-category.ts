// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskFindCategory extends MBSCommand {
  static description = '订阅类目候选查询：任务细节页“订阅类目”弹窗打开前，加载全部可订阅类目名称列表，用于填充 #findCategory 的 chosen 多选下拉框的候选项；返回值为类目名称字符串数组，每个元素同时作为 option 的 value 与显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskFindCategory)

    const data = await this.client.post('/erpTask/erpTask/taskController/findCategory', {})
    this.output(data)
  }
}
