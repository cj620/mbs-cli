// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataParallelPayContrastFetcher extends MBSCommand {
  static description = '账-付-流并行对比数据查询：TikTok「账-付-流核对」表分页查询：按付款单号、结算单号、店铺名称、付款时间、流水时间、问题反馈(一级/二级)、所属公司等条件过滤，返回账单(结)、付款(付)、流水(流)三表并行对比的明细行与差值/反馈字段及总记录数。'

  static flags = {
    paymentIds: Flags.string({ description: '付款单号(按空格拆分为字符串数组,空时为[]),来源付款单号输入框 (comma-separated)' }),
    settlementIds: Flags.string({ description: '结算单号(按空格拆分为字符串数组,空时为[]),来源结算单号输入框 (comma-separated)' }),
    shopName: Flags.string({ description: '店铺名称,来源店铺名称输入框' }),
    shortCreateTime: Flags.string({ description: '付款时间-起始,来源付款时间日期范围选择器左值' }),
    longCreateTime: Flags.string({ description: '付款时间-结束,来源付款时间日期范围选择器右值' }),
    shortCreateDate: Flags.string({ description: '流水时间-起始,来源流水时间日期范围选择器左值(默认空)' }),
    longCreateDate: Flags.string({ description: '流水时间-结束,来源流水时间日期范围选择器右值(默认空)' }),
    problem: Flags.string({ description: '问题反馈-一级分类(取值=选项序号+1)。1=账-付(反馈-店);2=账-付(反馈);3=付-流(反馈);4=账-流(反馈)' }),
    secondProblem: Flags.string({ description: '问题反馈-二级分类(多选,取值=子项序号+1),依赖一级problem。默认[] (comma-separated)' }),
    companyId: Flags.string({ description: '所属公司。1=胤元;33=启元(初始值\'\')' }),
    pageSize: Flags.string({ description: '每页条数(默认100,可选100/200/300/400)', required: true }),
    page: Flags.string({ description: '当前页码(默认从1开始)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataParallelPayContrastFetcher)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/parallelPayContrastFetcher', { "paymentIds": toArray(flags.paymentIds, 'string'), "settlementIds": toArray(flags.settlementIds, 'string'), "shopName": flags.shopName, "shortCreateTime": flags.shortCreateTime, "longCreateTime": flags.longCreateTime, "shortCreateDate": flags.shortCreateDate, "longCreateDate": flags.longCreateDate, "problem": flags.problem, "secondProblem": toArray(flags.secondProblem, 'string'), "companyId": flags.companyId, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
