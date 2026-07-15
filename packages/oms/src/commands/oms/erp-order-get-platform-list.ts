// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetPlatformList extends MBSCommand {
  static description = '平台列表查询：销售业绩目标页面在“批量设置店铺目标”弹窗中调用，拉取平台下拉列表（平台ID+平台名称），用于渲染 #platform 平台选择下拉框。GET 无入参。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetPlatformList)

    const data = await this.client.get('/erpOrder/erpOrder/saleReport/getPlatformList', { params: {} })
    this.output(data)
  }
}
