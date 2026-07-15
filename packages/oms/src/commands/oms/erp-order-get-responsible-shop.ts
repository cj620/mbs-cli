// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetResponsibleShop extends MBSCommand {
  static description = '查询负责店铺列表：查询当前登录用户所负责（有权限）的店铺名称列表，用于 eBay 个案任务页顶部「请选择店铺」下拉框的选项填充。页面 ready 时由 getResponsibleShops() 自动调用一次，无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetResponsibleShop)

    const data = await this.client.post('/erpOrder/erpOrder/ebayCaseTask/getResponsibleShop', {})
    this.output(data)
  }
}
