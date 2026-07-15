// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindLogisticsFollowLog extends MBSCommand {
  static description = '物流跟进记录查询：物流跟进日志看板查询：按国家、类型、物流商及操作时间区间分页查询物流商跟进记录，返回跟进编号、跟进人/时间、国家/类型、物流商类型/物流商、跟进内容、聊天图片、价格附件、下一步跟进计划与下一次联系日期等列表数据。'

  static flags = {
    country: Flags.string({ description: '国家(来源:URL参数 country 或 #country 国家下拉框;空串=全部)' }),
    expressType: Flags.string({ description: '类型(来源:URL参数 expressType 或 #expressType 类型下拉框;空串=全部)' }),
    logisticsProviders: Flags.string({ description: '物流商(来源:#providers 物流商下拉框;空串=全部)' }),
    startTime: Flags.string({ description: '操作时间-起始(来源:#startTime 日期控件,格式 yyyy-MM-dd)' }),
    endTime: Flags.string({ description: '操作时间-结束(来源:#endTime 日期控件,格式 yyyy-MM-dd)' }),
    currentPage: Flags.string({ description: '当前页码(代码中固定传 1)', required: true }),
    pageSize: Flags.string({ description: '每页条数(固定传 100)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindLogisticsFollowLog)

    const data = await this.client.post('/erpOrder/erpOrder/trackController/findLogisticsFollowLog', { "country": flags.country, "expressType": flags.expressType, "logisticsProviders": flags.logisticsProviders, "startTime": flags.startTime, "endTime": flags.endTime, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
