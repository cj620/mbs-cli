// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetTeamMemberByLeaderNew extends MBSCommand {
  static description = '按店长查询团队成员(店长列表)：库存看板/必刊登「优化建议」筛选区，根据平台筛选条件查询团队成员(店长)列表，用于渲染店长下拉选择器(el-select)。Vue 组件 #shopvue 初始化及平台变更时调用，返回列表渲染为店长下拉项。'

  static flags = {
    bigChief: Flags.string({ description: '大主管列表(过滤条件)。前端固定传空数组[](无对应控件) (comma-separated)' }),
    companyId: Flags.string({ description: '公司ID(按公司过滤)。前端固定传空字符串\'\'' }),
    platformIds: Flags.string({ description: '平台ID列表。来源平台下拉(v-model=plantform/#plantform)：已选平台时为[平台ID],未选时为[]。元素为平台ID(string) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetTeamMemberByLeaderNew)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getTeamMemberByLeaderNew', { "bigChief": toArray(flags.bigChief, 'string'), "companyId": flags.companyId, "platformIds": toArray(flags.platformIds, 'string') })
    this.output(data)
  }
}
