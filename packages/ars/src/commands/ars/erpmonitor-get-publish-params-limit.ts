// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetPublishParamsLimit extends MBSCommand {
  static description = '刊登参数限制查询(getPublishParamsLimit)：根据平台ID(platformId)查询该平台下各站点的刊登参数下限限制（最小毛利率、最小平台费率、最小折扣率、亚马逊自建最小毛利率等）。前端在“设置店铺刊登参数”弹窗初始化时按平台加载，选择站点后取对应站点下限并在提交时校验。'

  static flags = {
    platformId: Flags.string({ description: '平台ID。前端实例化 PublishParamsLimit 时以构造参数传入并透传（shopeeAutPublished.js 中固定为 89=Shopee平台）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetPublishParamsLimit)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/getPublishParamsLimit', { "platformId": flags.platformId })
    this.output(data)
  }
}
