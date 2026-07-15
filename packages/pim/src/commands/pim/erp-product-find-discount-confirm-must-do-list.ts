// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindDiscountConfirmMustDoList extends MBSCommand {
  static description = '待确认打折任务列表查询：成品任务看板「折扣确认」页签加载时调用，查询当前需要人工确认（恢复原成本价/清仓下架）的打折推送任务列表。无请求体，后端按登录态返回待确认 SKU 任务，前端用于 ElementPlus 表格渲染及顶部角标计数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindDiscountConfirmMustDoList)

    const data = await this.client.post('/erpProduct/erpProduct/pushProduct/findDiscountConfirmMustDoList', {})
    this.output(data)
  }
}
