// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
