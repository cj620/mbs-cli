// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 5d73287addda8c70faf8faba9f00506ca4e6706165ec8a21cbbbe4d1c866a528
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class CrmCrmWebServiceGetAmazonAccHealthInfo extends MBSCommand {
  static description = '获取店铺账号健康信息：获取所有 Amazon 店铺的账号健康信息（账号状况评级、政策合规、各类违规投诉计数、订单缺陷率/迟发率/有效追踪率等运营指标）。数据由 RPA 自动采集，附带健康页截图。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(CrmCrmWebServiceGetAmazonAccHealthInfo)

    const data = await this.client.get('/crm-web-service/rpa/getAmazonAccHealthInfo', { params: {} })
    this.output(data)
  }
}
