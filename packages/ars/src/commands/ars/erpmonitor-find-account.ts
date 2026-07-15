// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFindAccount extends MBSCommand {
  static description = '查询收支监控账号列表：收支监控（收入/支出）页面初始化时调用，获取当前可选的账号列表，用于渲染顶部“请选择账号”下拉框（select#findAccount）。请求不携带任何请求体，响应返回账号字符串数组 obj，前端通过 art-template 模板 findAccountTemplate 逐项渲染为 option，其 value 与显示文本均为账号本身。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFindAccount)

    const data = await this.client.post('/erpmonitor/erpmonitor/accountStatementMonitor/findAccount', {})
    this.output(data)
  }
}
