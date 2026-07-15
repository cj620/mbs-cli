// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrder02 extends MBSCommand {
  static description = '获取大酋长(销售战报)列表：进入“产品刊登分析(开发覆盖率)”页面时加载“大酋长”下拉框数据源。页面 ready 时调用，返回大酋长(销售主管/区域负责人)列表，渲染为 #bigChief 下拉的 option，其 id 作为选中值、name 作为显示文本与 peoanme 属性。'

  static flags = {
    p1: Flags.string({ description: 'URL 路径参数1，调用处固定为 2(业务含义待人工确认，疑为类型/维度标识)', required: true }),
    p2: Flags.string({ description: 'URL 路径参数2，调用处固定为 0(业务含义待人工确认，疑为状态/起始标识)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrder02)

    const data = await this.client.get('/erpOrder/erpOrder/saleReport/getBigChief2/2/0', { params: { "p1": flags.p1, "p2": flags.p2 } })
    this.output(data)
  }
}
