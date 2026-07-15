// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetDeveloperMissionCheckByMissionId extends MBSCommand {
  static description = '查询审核人列表：查询审核人列表'

  static flags = {
    missionId: Flags.string({ description: 'MissionID（字段名推断,语义待核实）' }),
    checkBy: Flags.string({ description: '校验人（字段名推断,语义待核实）' }),
    state: Flags.string({ description: '状态（字段名推断,语义待核实）' }),
    id: Flags.string({ description: 'ID（字段名推断,语义待核实）' }),
    num: Flags.string({ description: '数量（字段名推断,语义待核实）' }),
    content: Flags.string({ description: '内容（字段名推断,语义待核实）' }),
    missionList: Flags.string({ description: 'Mission列表（字段名推断,语义待核实） (comma-separated)' }),
    updateTime: Flags.string({ description: '更新时间（字段名推断,语义待核实）' }),
    skuPropertiesInfos: Flags.string({ description: 'SKU属性信息（字段名推断,语义待核实） (comma-separated)' }),
    skuProperties: Flags.string({ description: 'SKU属性（字段名推断,语义待核实） (comma-separated)' }),
    reason: Flags.string({ description: '原因（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetDeveloperMissionCheckByMissionId)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/developerMission/getDeveloperMissionCheckByMissionId', { "missionId": flags.missionId, "checkBy": flags.checkBy, "state": flags.state, "id": flags.id, "num": flags.num, "content": flags.content, "missionList": toArray(flags.missionList, 'string'), "updateTime": flags.updateTime, "skuPropertiesInfos": toArray(flags.skuPropertiesInfos, 'object'), "skuProperties": toArray(flags.skuProperties, 'object'), "reason": flags.reason })
    this.output(data)
  }
}
