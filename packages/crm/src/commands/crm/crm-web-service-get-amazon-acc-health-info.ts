// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 0e4df16515006d442b1504ad89dfc84b4bd0a51e0ca3377eab13abb1c6f2402e
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class CrmCrmWebServiceGetAmazonAccHealthInfo extends MBSCommand {
  static description = '获取店铺账号健康信息：获取所有 Amazon 店铺的账号健康信息（账号状况评级、政策合规、各类违规投诉计数、订单缺陷率/迟发率/有效追踪率等运营指标）。数据由 RPA 自动采集，附带健康页截图。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(CrmCrmWebServiceGetAmazonAccHealthInfo)

    const data = await this.client.get('/rpa/getAmazonAccHealthInfo', { params: {} })
    this.output(data)
  }
}
