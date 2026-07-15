// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetEmployeeCategory extends MBSCommand {
  static description = '获取员工发布类目（getEmployeeCategory）：进入“必发SPU”页面时调用，获取当前登录员工对应的发布类目信息（一级类目、二级类目），用于在页面顶部 #categoryTips 处展示“一级类目：xxx； 二级类目：xxx”的提示文案。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetEmployeeCategory)

    const data = await this.client.get('/erpProduct/erpProduct/stockProduct/getEmployeeCategory', { params: {} })
    this.output(data)
  }
}
