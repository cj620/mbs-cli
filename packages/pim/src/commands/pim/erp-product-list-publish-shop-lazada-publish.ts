// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListPublishShopLazadaPublish extends MBSCommand {
  static description = '可刊登店铺列表查询(listPublishShop)：Lazada 批量刊登页面初始化时调用，获取当前用户可用于“生成 listing/刊登”的店铺列表，渲染到“请选择店铺”多选下拉框(#pubshop)。请求无业务参数(空 body POST)，响应 obj 为店铺数组，前端仅取店铺名 ebayShopName 作为下拉选项的 value 与显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListPublishShopLazadaPublish)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaPublish/listPublishShop', {})
    this.output(data)
  }
}
