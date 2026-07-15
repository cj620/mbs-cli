// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetPublishOperList extends MBSCommand {
  static description = '刊登人下拉列表查询：热销商品监控(在线列表)页面「刊登人」下拉框数据源：根据平台、总监、经理等团队维度过滤，返回可选刊登人(id/name)列表，供顶部筛选区 publisher 选择器渲染。'

  static flags = {
    employeeType: Flags.string({ description: '员工类型，前端固定传"1"', required: true }),
    companyId: Flags.string({ description: '公司ID列表，当前固定传空数组[] (comma-separated)' }),
    platformIds: Flags.string({ description: '平台ID列表，来源平台选择器(this.platform)：已选为[平台ID]，未选为[](见getPlatformValueArr()) (comma-separated)' }),
    leaders: Flags.string({ description: '总监(leader)列表，来源总监下拉选中值this.directors (comma-separated)' }),
    managers: Flags.string({ description: '经理(manager)列表，来源经理下拉选中值this.managers (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetPublishOperList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/getPublishOperList', { "employeeType": flags.employeeType, "companyId": toArray(flags.companyId, 'string'), "platformIds": toArray(flags.platformIds, 'string'), "leaders": toArray(flags.leaders, 'string'), "managers": toArray(flags.managers, 'string') })
    this.output(data)
  }
}
