// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetLeaveMessage extends MBSCommand {
  static description = '任务留言列表查询：任务/投诉详情页底部「物流任务 留言」模块的留言列表查询：按任务标识(spu)拉取该任务下全部留言及其子留言(回复)，用于渲染留言时间线（头像、留言人、时间、内容、关联SKU、嵌套回复）。'

  static flags = {
    spu: Flags.string({ description: '任务/留言目标标识。取自页面URL的id参数(GetQueryString(\'id\'))。来源：页面URL query', required: true }),
    isAll: Flags.string({ description: '是否查询全部，代码中固定传\'2\'。枚举含义(待人工确认)', required: true }),
    isSystem: Flags.string({ description: '是否系统留言标识，代码中固定传\'3\'。枚举含义(待人工确认)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskGetLeaveMessage)

    const data = await this.client.post('/erpTask/erpTask/taskController/getLeaveMessage', {}, { params: { "spu": flags.spu, "isAll": flags.isAll, "isSystem": flags.isSystem } })
    this.output(data)
  }
}
