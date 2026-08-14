// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetProfitVariance extends MBSCommand {
  static description = '事业部人员毛利方差图查询：按月份、平台、总监、经理、店长等条件，查询事业部各店长的毛利方差数据，返回每个店长的实际毛利/人均毛利/总毛利及入职、平台、经理等信息，前端用 ECharts 渲染柱状图(实际毛利)+折线(平均值)。'

  static flags = {
    targetStartTime: Flags.string({ description: '目标起始时间(所选月份)，由 getMonth() 生成，格式 YYYY-M-D(月份未补零)，来源:月份选择器 form.month', required: true }),
    platformNameList: Flags.string({ description: '平台名称列表，取自平台多选 form.platform 各项的 PLATFORMNAME，来源:平台下拉(多选) (comma-separated)' }),
    directorList: Flags.string({ description: '总监姓名列表，取自总监多选 form.director 各项的 name，来源:总监下拉(多选,支持全选) (comma-separated)' }),
    managerList: Flags.string({ description: '经理姓名列表，取自经理多选 form.manager 各项的 name，来源:经理下拉(多选,支持全选) (comma-separated)' }),
    shopManagerList: Flags.string({ description: '店长姓名列表，直接取 form.shopManager(元素为店长姓名字符串)，来源:店长下拉(多选,支持全选)/按店铺反查 (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetProfitVariance)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/getProfitVariance', { "targetStartTime": flags.targetStartTime, "platformNameList": toArray(flags.platformNameList, 'string'), "directorList": toArray(flags.directorList, 'string'), "managerList": toArray(flags.managerList, 'string'), "shopManagerList": toArray(flags.shopManagerList, 'string') })
    this.output(data)
  }
}
