// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderCustomerServiceMgr extends MBSCommand {
  static description = '客户经理列表查询：获取店铺业绩(客户服务管理)页面"请选择客户经理"下拉框的全部客户经理(客服经理)名称列表。页面加载时由 getcustomerServiceMgr() 调用，遍历 data.obj(字符串数组)逐项 <option> 填充 #custService 选择器，该值后续作为 shopAchievementsList/downloadShopAchievementsList 的 customerServiceMgr 查询条件。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderCustomerServiceMgr)

    const data = await this.client.get('/erpOrder/erpOrder/shopAchievements/customerServiceMgr', { params: {} })
    this.output(data)
  }
}
