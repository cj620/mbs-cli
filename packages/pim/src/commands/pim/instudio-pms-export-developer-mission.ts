// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsExportDeveloperMission extends MBSCommand {
  static description = '导出海外仓任务列表：导出海外仓任务列表'

  static flags = {
    categoryOne: Flags.string({ description: '类目单个（字段名推断,语义待核实）', required: true }),
    categoryTwo: Flags.string({ description: '类目两个（字段名推断,语义待核实）', required: true }),
    developType: Flags.string({ description: 'Develop类型（字段名推断,语义待核实）', required: true }),
    developerCon: Flags.string({ description: '开发者CON（字段名推断,语义待核实）', required: true }),
    developerStatus: Flags.string({ description: '开发者状态（字段名推断,语义待核实）', required: true }),
    flag: Flags.string({ description: '标志（字段名推断,语义待核实）', required: true }),
    orderBy: Flags.string({ description: '排序（字段名推断,语义待核实）', required: true }),
    productKeyword: Flags.string({ description: '商品关键词（字段名推断,语义待核实）', required: true }),
    recommendSource: Flags.string({ description: 'Recommend来源（字段名推断,语义待核实）', required: true }),
    salePriceUsdMax: Flags.string({ description: '销售价格美元最大（字段名推断,语义待核实）', required: true }),
    salePriceUsdMin: Flags.string({ description: '销售价格美元最小（字段名推断,语义待核实）', required: true }),
    sevenSaleCountMax: Flags.string({ description: '7天销售数量最大（字段名推断,语义待核实）', required: true }),
    sevenSaleCountMin: Flags.string({ description: '7天销售数量最小（字段名推断,语义待核实）', required: true }),
    totalSaleCountMax: Flags.string({ description: '总数销售数量最大（字段名推断,语义待核实）', required: true }),
    totalSaleCountMin: Flags.string({ description: '总数销售数量最小（字段名推断,语义待核实）', required: true }),
    bigChief: Flags.integer({ description: 'BIG主管（字段名推断,语义待核实）', required: true }),
    claimSaler: Flags.string({ description: 'ClaimSaler（字段名推断,语义待核实）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsExportDeveloperMission)

    const data = await this.client.post('/yypms/pms/developerMission/exportDeveloperMission', {}, { params: { "categoryOne": flags.categoryOne, "categoryTwo": flags.categoryTwo, "developType": flags.developType, "developerCon": flags.developerCon, "developerStatus": flags.developerStatus, "flag": flags.flag, "orderBy": flags.orderBy, "productKeyword": flags.productKeyword, "recommendSource": flags.recommendSource, "salePriceUsdMax": flags.salePriceUsdMax, "salePriceUsdMin": flags.salePriceUsdMin, "sevenSaleCountMax": flags.sevenSaleCountMax, "sevenSaleCountMin": flags.sevenSaleCountMin, "totalSaleCountMax": flags.totalSaleCountMax, "totalSaleCountMin": flags.totalSaleCountMin, "bigChief": flags.bigChief, "claimSaler": flags.claimSaler } })
    this.output(data)
  }
}
