// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetBigChief3 extends MBSCommand {
  static description = '大酋长(销售主管/Leader)列表查询：根据员工类型获取“大酋长”(销售主管/Leader)列表，用于页面顶部“请选择大酋长”下拉选择框(ySelect)的选项渲染；返回 id/name 列表供后续按 Leader 查询组员等使用。'

  static flags = {
    employeeType: Flags.string({ description: '员工类型，固定传 \'2\'(标识查询大酋长/销售主管 Leader 类型)。枚举：2=大酋长(销售主管)。来源：代码硬编码', required: true }),
    platformIds: Flags.string({ description: '平台ID集合，前端固定传空数组 [](按平台过滤，当前未传值)。元素类型 string/number(待人工确认)。来源：代码硬编码 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetBigChief3)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getBigChief3', { "employeeType": flags.employeeType, "platformIds": toArray(flags.platformIds, 'string') })
    this.output(data)
  }
}
