// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetSubmitInfo extends MBSCommand {
  static description = 'TikTok提价-提交任务信息列表查询：TikTok提价确认页“查看任务信息”弹窗的分页查询：按当前页/每页条数分页拉取提价找源提交任务列表，返回任务的店铺/站点/ItemID/SKU/销量区间/毛利与费率/算价渠道/任务状态/创建人时间及执行详情内容。'

  static flags = {
    currPage: Flags.string({ description: '当前页码(从1开始,来源 pData.taskPage)', required: true }),
    pageSize: Flags.string({ description: '每页条数(固定为10)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetSubmitInfo)

    const data = await this.client.post('/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getSubmitInfo', { "currPage": flags.currPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
