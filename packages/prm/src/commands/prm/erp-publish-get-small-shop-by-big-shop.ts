// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishGetSmallShopByBigShop extends MBSCommand {
  static description = '根据大店铺查询子(Joom)店铺：Joom 批量刊登页“请选择店铺”模态框中，用户在大店铺多选框选定店铺后触发，按大店铺名称(shopName)查询其下属的 Joom 子店铺名称列表，用于渲染子店铺多选清单。'

  static flags = {
    shopName: Flags.string({ description: '大店铺名称(查询条件)。来源于大店铺多选输入框 #shopvalues 的值(多选时以英文逗号拼接的店铺名)；以 URL 查询参数 ?shopName= 形式传递，可为空(空则查询全部)。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishGetSmallShopByBigShop)

    const data = await this.client.post('/erpPublish/erpPublish/joomProductPublish/getSmallShopByBigShop', {}, { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
