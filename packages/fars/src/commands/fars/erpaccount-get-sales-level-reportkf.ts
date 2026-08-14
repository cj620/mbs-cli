// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetSalesLevelReportkf extends MBSCommand {
  static description = '销售层级报表(客服版 kf)查询：仪表盘商品图表页(productChart)在 flag==2(客服版)分支调用：按 SKU类型、所选统计指标、基准日期与前后30天方向，返回 ECharts 折线图所需的 X 轴类目数据与多系列数据，用于渲染近30天趋势图。'

  static flags = {
    skutypes: Flags.string({ description: 'SKU类型。来源页面URL参数 skuTypes(GetQueryString)，URL键名为小写 skutypes' }),
    selectOption: Flags.string({ description: '所选统计指标(多选逗号拼接)。来源 name=variable 勾选复选框 value。枚举：SKU数量/库存量/库存金额/仓位数/昨日发货量/昨日发货额/入库金额/出库金额/库存增长/库存周转率/缺货量' }),
    date: Flags.string({ description: '查询基准日期(yyyy-MM-dd)。来源 #date 输入框或 sessionStorage(\'times\')(上次 res.desc)，初次为空' }),
    days: Flags.string({ description: '翻页方向/天数。来源 #days 输入框或 searchChart(num)。枚举：0=前30天，1=后30天' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetSalesLevelReportkf)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getSalesLevelReportkf', {}, { params: { "skutypes": flags.skutypes, "selectOption": flags.selectOption, "date": flags.date, "days": flags.days } })
    this.output(data)
  }
}
