// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrder01 extends MBSCommand {
  static description = '获取大酋长列表：手动刊登相关数据统计页初始化时调用，获取「大酋长」下拉选择框的数据源。返回大酋长（团队负责人）列表，每项含 id 与 name，前端用 art-template 渲染为 #bigChief 下拉框的 option（value=id，文本=name）。选中后联动 getTeamMemberByLeader 拉取组员。'

  static flags = {
    p1: Flags.string({ description: '路径参数1，固定值 1，具体业务含义（如类型/状态/是否启用）(待人工确认)', required: true }),
    p2: Flags.string({ description: '路径参数2，固定值 0，具体业务含义（如状态/层级/标志位）(待人工确认)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrder01)

    const data = await this.client.get('/erpOrder/erpOrder/saleReport/getBigChief2/1/0', { params: { "p1": flags.p1, "p2": flags.p2 } })
    this.output(data)
  }
}
