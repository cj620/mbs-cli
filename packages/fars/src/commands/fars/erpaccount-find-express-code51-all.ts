// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountFindExpressCode51All extends MBSCommand {
  static description = '物流商(51渠道)列表查询：查询51渠道物流商(express code51)列表：支持按物流商名称、物流商编码过滤并分页。前端两处复用——物流商下拉数据源(getcustmer，仅传 courierCode 取全量)与时效配置弹窗列表(searchtraffic，传 page/pageSize/logisticsProviderName 分页查询)，返回物流商及其时效限制配置(limitJsonList)。'

  static flags = {
    page: Flags.string({ description: '当前页码(searchtraffic 传 index||1，从1开始；getcustmer 不传)' }),
    pageSize: Flags.string({ description: '每页条数(searchtraffic 固定传50；getcustmer 不传)' }),
    logisticsProviderName: Flags.string({ description: '物流商名称(时效配置弹窗按名称模糊查询，来源 logisticsProviderName ref；getcustmer 不传)' }),
    courierCode: Flags.string({ description: '物流商编码(getcustmer 传入，val||\'\' 默认空串取全量；来源物流商下拉选中项 courierCode)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountFindExpressCode51All)

    const data = await this.client.post('/erpaccount/erpaccount/logisticsController/findExpressCode51All', { "page": flags.page, "pageSize": flags.pageSize, "logisticsProviderName": flags.logisticsProviderName, "courierCode": flags.courierCode })
    this.output(data)
  }
}
