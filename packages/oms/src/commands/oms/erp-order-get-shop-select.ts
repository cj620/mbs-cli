// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetShopSelect extends MBSCommand {
  static description = '新人成绩单-店铺下拉查询：为「新人成绩单(营销新人详情)」页面的店铺多选下拉框提供数据源：无入参，返回当前可选店铺列表(店铺ID + 店铺名称)，前端用 art-template 渲染为带「全选」的复选框列表。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetShopSelect)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getShopSelect', {})
    this.output(data)
  }
}
