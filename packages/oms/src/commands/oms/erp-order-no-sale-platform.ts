// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderNoSalePlatform extends MBSCommand {
  static description = '平台禁限售政策列表查询：在「产品问题投诉」页面，当问题类型为“平台限售”且选择平台后，按平台名称查询该平台对应的禁限售（禁售）政策列表，返回字符串数组用于「禁售政策」下拉框选项。'

  static flags = {
    platformName: Flags.string({ description: '平台名称（URL 查询参数）。来源：平台下拉框选中项的 PLATFORMNAME（经 platchange() 赋给 platFormname 后传入 gatnosaleplat）。取值由 /erpOrder/erpOrder/saleReport/getPlatformList 返回的 PLATFORMNAME 决定，常见如 Amazon/ebay/Wish/aliexpress/TikTok/Walmart 等。空或 null 时前端不发起请求。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderNoSalePlatform)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/noSalePlatform', {}, { params: { "platformName": flags.platformName } })
    this.output(data)
  }
}
