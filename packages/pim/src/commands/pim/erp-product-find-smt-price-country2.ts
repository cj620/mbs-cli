// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindSmtPriceCountry2 extends MBSCommand {
  static description = '速卖通调价-国家(站点)列表查询：速卖通(SMT)批量调价页初始化时调用，查询可调价的国家/站点列表。前端不传任何请求参数，返回的列表用于渲染按 shipto 国家调价弹框中每个国家的+/-选择器与百分比/数值输入框(控件ID按 site 拼接)，并缓存到 conList 供生成调价信息时按国家组装 reviseParam。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindSmtPriceCountry2)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/findSmtPriceCountry2', {})
    this.output(data)
  }
}
