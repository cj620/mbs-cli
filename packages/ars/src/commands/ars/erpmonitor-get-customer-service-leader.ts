// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetCustomerServiceLeader extends MBSCommand {
  static description = '客服组长下拉列表查询：运营监控报表「客服绩效数据」视图初始化时调用，获取全部客服组长列表，用于填充页面「组长」多选下拉框(#leaderList)，供后续按组长查询组员/店铺/客服绩效数据。该接口无请求参数(不传 body)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetCustomerServiceLeader)

    const data = await this.client.post('/erpmonitor/erpmonitor/smtShopKpi/getCustomerServiceLeader', {})
    this.output(data)
  }
}
