// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetProductTarget extends MBSCommand {
  static description = '业绩目标-按商品(开发员/大组长)月度目标查询：进入“新增业绩目标”页面时加载业绩目标数据：返回本人(大组长)目标行集合 bigChief、组员目标行集合 sales(含“汇总”行)、是否可编辑档标识 isLast、以及可切换查看的历史目标时段 timeSlot。每行包含本月实际完成、本月目标三档、下月目标三档。week=0 时为本月并可编辑下月目标，week>0 时查看对应历史时段(只读)。入参均为 URL Query，无请求体。'

  static flags = {
    targetType: Flags.string({ description: '目标类型，固定传 4(按商品/开发员维度的业绩目标)', required: true }),
    week: Flags.string({ description: '时段偏移/历史时段索引。0=本月(可编辑下月目标)；>0=查看 timeSlot 对应历史时段(只读)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetProductTarget)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getProductTarget', {}, { params: { "targetType": flags.targetType, "week": flags.week } })
    this.output(data)
  }
}
