// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetRiskSpuWhiteShopName extends MBSCommand {
  static description = '风险SPU白名单(保护)店铺名称查询：获取「风险产品保护(白名单)店铺」名称列表，用于 SPU 管理列表高级筛选中「风险产品保护店铺(whitePublishShop)」多选下拉框的选项。页面初始化时无参调用一次，返回值为店铺名称字符串数组，直接作为 el-select 的 label 与 value。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetRiskSpuWhiteShopName)

    const data = await this.client.post('/erpProduct/erpProduct/product/getRiskSpuWhiteShopName', {})
    this.output(data)
  }
}
