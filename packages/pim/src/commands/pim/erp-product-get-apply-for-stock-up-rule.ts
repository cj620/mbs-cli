// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetApplyForStockUpRule extends MBSCommand {
  static description = '判断是否显示申请备货按钮（getApplyForStockUpRule）：SKU 详情页初始化时调用：后端根据当前登录用户身份/权限及备货申请规则，返回是否允许发起备货申请。前端据返回的 success 布尔值决定显示或隐藏页面上的「申请备货」按钮(#applyBtn2)。请求不携带业务参数，用户身份由会话识别。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetApplyForStockUpRule)

    const data = await this.client.post('/erpProduct/erpProduct/product/getApplyForStockUpRule', {})
    this.output(data)
  }
}
