// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindTrackExpressType extends MBSCommand {
  static description = '物流跟进-运输类型(下拉)查询：物流跟进日志(logView)页面初始化时调用，无入参，返回全部"类型"(运输/快递类型)字符串列表，前端用 art-template(#expressTypeTemplate) 渲染为类型下拉框选项（既作 option 的 value 又作显示文本）。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindTrackExpressType)

    const data = await this.client.post('/erpOrder/erpOrder/trackController/findTrackExpressType', {})
    this.output(data)
  }
}
