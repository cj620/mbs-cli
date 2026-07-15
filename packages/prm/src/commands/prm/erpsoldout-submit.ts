// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutSubmit extends MBSCommand {
  static description = '提交人下拉列表查询：SKU下架管理页加载时调用，获取「提交人」筛选下拉框的人员列表（员工ID + 员工姓名），用于渲染 #submitRen 选择框。POST 请求，无请求体参数；返回 obj 数组，前端用 art-template 模板 contentTemplate3 逐项渲染为 option。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutSubmit)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/submit', {})
    this.output(data)
  }
}
