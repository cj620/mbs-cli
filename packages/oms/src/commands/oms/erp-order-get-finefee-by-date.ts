// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetFinefeeByDate extends MBSCommand {
  static description = '按日期查询店铺罚款明细：销售日报(dailySalesReport)中“罚款”金额单元格下钻：携带日报查询条件(参数取自 sessionStorage 的 params)加上所点击行的日期 oneDay，查询当日各交易单的罚款明细列表，渲染为交易单号/罚款日期/店铺/罚款金额/店铺负责人表格。'

  static flags = {
    oneDay: Flags.string({ description: '单日日期(yyyy-MM-dd)，本接口下钻关键参数，取自当前页URL ?oneDay=，来源为日报行 currentdate', required: true }),
    employeeType: Flags.string({ description: '人员类别(上游日报 #orderStaus 选择)' }),
    startTime: Flags.string({ description: '起始日期(yyyy-MM-dd，上游日报 #time1)' }),
    endTime: Flags.string({ description: '结束日期(yyyy-MM-dd，上游日报 #time2)' }),
    platformId: Flags.string({ description: '平台ID(上游日报 #reserve11)' }),
    shopName: Flags.string({ description: '店铺(店铺名称数组，未选为[]，上游日报 #shoptypeid) (comma-separated)' }),
    employeeName: Flags.string({ description: '组员(员工名称数组，未选为[]，上游日报 #employeeList) (comma-separated)' }),
    bigChief: Flags.string({ description: '大酋长/店铺负责人(数组，未选为[]，上游日报 #shopManager) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetFinefeeByDate)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getFinefeeByDate', { "oneDay": flags.oneDay, "employeeType": flags.employeeType, "startTime": flags.startTime, "endTime": flags.endTime, "platformId": flags.platformId, "shopName": toArray(flags.shopName, 'string'), "employeeName": toArray(flags.employeeName, 'string'), "bigChief": toArray(flags.bigChief, 'string') })
    this.output(data)
  }
}
