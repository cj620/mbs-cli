// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListUnPublishShop extends MBSCommand {
  static description = '未刊登过店铺列表查询：查询当前用户在 Lazada 刊登场景下尚未刊登过的店铺列表，用于「等待刊登」筛选区「选择未刊登过店铺」下拉框(#shopName)的选项渲染。页面加载时自动调用，无请求参数；返回店铺ID与店铺名称列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListUnPublishShop)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaPublish/listUnPublishShop', {})
    this.output(data)
  }
}
