// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderCountryList extends MBSCommand {
  static description = '借用运单号-国家列表查询：借用运单号(Vova借单)页面加载时调用，获取可借用运单号的国家列表，用于目的国家选择/展示。前端在页面初始化 countryList() 中以 GET 无参方式请求，成功后通过 art-template 模板 countryListTemplate 渲染。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderCountryList)

    const data = await this.client.get('/erpOrder/erpOrder/borrowingNo/countryList', { params: {} })
    this.output(data)
  }
}
