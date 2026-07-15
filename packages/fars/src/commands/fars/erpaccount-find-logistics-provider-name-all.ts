// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountFindLogisticsProviderNameAll extends MBSCommand {
  static description = '物流商(物流渠道)名称分页查询：按物流商名称(模糊)查询物流渠道(物流商)列表：用于货运详情/物流时效监控页头部物流渠道下拉数据加载(不分页)，以及运营商及马帮渠道配置弹窗的分页列表(含分页与总数)。返回物流渠道行(渠道ID、物流商名称、物流商编码、是否国外、51Express渠道ID等)。'

  static flags = {
    logisticsProviderName: Flags.string({ description: '物流商(物流渠道)名称，模糊查询关键词(下拉全量加载时为空串)', required: true }),
    page: Flags.string({ description: '当前页码(从1开始)，仅配置弹窗分页查询传' }),
    pageSize: Flags.string({ description: '每页条数(配置弹窗固定50)，仅配置弹窗分页查询传' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountFindLogisticsProviderNameAll)

    const data = await this.client.post('/erpaccount/erpaccount/logisticsController/findLogisticsProviderNameAll', { "logisticsProviderName": flags.logisticsProviderName, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
