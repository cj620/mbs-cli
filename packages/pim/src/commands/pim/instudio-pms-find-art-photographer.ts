// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindArtPhotographer extends MBSCommand {
  static description = '获取平台：获取平台'

  static flags = {
    oper: Flags.string({ description: '姓名' }),
    positionName: Flags.string({ description: '职位' }),
    teamName: Flags.string({ description: '小组' }),
    spucount: Flags.integer({ description: 'spu数量' }),
    skucount: Flags.integer({ description: 'sku数量' }),
    ordercount: Flags.integer({ description: '订单数量' }),
    totalamount: Flags.string({ description: '销售额' }),
    profit: Flags.string({ description: '毛利' }),
    startDate: Flags.string({ description: '开始日期（字段名推断,语义待核实）' }),
    endDate: Flags.string({ description: '结束日期（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindArtPhotographer)

    const data = await this.client.post('/yypms/pms/AllMessage/findArtPhotographer', { "oper": flags.oper, "positionName": flags.positionName, "teamName": flags.teamName, "spucount": flags.spucount, "skucount": flags.skucount, "ordercount": flags.ordercount, "totalamount": flags.totalamount, "profit": flags.profit, "startDate": flags.startDate, "endDate": flags.endDate })
    this.output(data)
  }
}
