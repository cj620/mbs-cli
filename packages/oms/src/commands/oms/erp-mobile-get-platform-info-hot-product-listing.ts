// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetPlatformInfoHotProductListing extends MBSCommand {
  static description = '平台信息列表查询：订单移动端搜索页加载时调用，获取当前登录人可见的平台列表，用于渲染「平台」多选(单选)筛选项。选中后驱动经理(大酋长)、组员、店铺等级联下拉的数据加载。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetPlatformInfoHotProductListing)

    const data = await this.client.post('/erpMobile/erpMobile/hotProductListing/getPlatformInfo', {})
    this.output(data)
  }
}
