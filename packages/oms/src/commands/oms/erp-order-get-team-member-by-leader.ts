// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetTeamMemberByLeader extends MBSCommand {
  static description = '根据大酋长获取组员列表：平台流量看板/商品流量看板页面，选择大酋长(销售主管)下拉后联动调用，根据所选大酋长ID集合查询其名下组员(员工)列表，用于填充组员多选下拉框。请求体为大酋长ID的JSON数组(非对象)，响应obj为组员数组，前端仅取employee_name作为下拉项的value与文本。'

  static flags = {
    root: Flags.string({ description: '请求体根：大酋长(销售主管)ID数组，来源#shopManager/#shopManager2多选下拉选中值(.val())。未选中时为空数组 (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetTeamMemberByLeader)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getTeamMemberByLeader', { "(root)": toArray(flags.root, 'string') })
    this.output(data)
  }
}
