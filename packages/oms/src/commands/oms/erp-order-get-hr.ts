// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetHr extends MBSCommand {
  static description = '获取HRBP列表：新人(待审核/历史审核人员)列表页初始化时调用，获取全部 HRBP(人力资源业务伙伴)名称集合，用于填充页面顶部「请选择HRBP」筛选下拉框(#hrbp)的选项。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetHr)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getHr', {})
    this.output(data)
  }
}
