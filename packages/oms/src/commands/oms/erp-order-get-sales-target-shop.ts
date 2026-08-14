// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSalesTargetShop extends MBSCommand {
  static description = '月业绩目标-店铺/组员下钻查询：月业绩目标页面点击行前的展开箭头时，按店长/平台下钻查询其下级（店铺或组员）的月业绩目标、环比涨跌、本月/上月实际销售额、毛利率、毛利额、实际完成率及下月目标等明细，结果渲染为子表格。targetType 固定为 2（月目标）。'

  static flags = {
    targetType: Flags.string({ description: '目标类型，固定传 2（2=月目标）', required: true }),
    week: Flags.string({ description: '时段偏移量。0=本月；>0 表示历史时段索引（来自 obj.week / 时段选择），为空串时按当前时段' }),
    shopManager: Flags.string({ description: '店长/店铺管理者ID，取自被展开行 value.shopManager（顶层下钻时可为空）' }),
    platfromId: Flags.string({ description: '平台ID，取自被展开行 value.platfromId；前端在 undefined/null 时置为空串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSalesTargetShop)

    const data = await this.client.post('/erpOrder/erpOrder/salesTarget/getSalesTargetShop', { "targetType": flags.targetType, "week": flags.week, "shopManager": flags.shopManager, "platfromId": flags.platfromId })
    this.output(data)
  }
}
