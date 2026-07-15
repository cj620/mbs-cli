// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorDeleteshopeeRevisepriceConfirmList extends MBSCommand {
  static description = 'Shopee提价确认Listing删除：在“Shopee提价确认”页面勾选一条或多条Listing记录后，点击“删除listing”并确认，将所选记录的唯一ID(uniqueId)以逗号拼接经查询串 ids 提交，批量删除对应提价确认Listing记录；成功后按当前Tab刷新列表。'

  static flags = {
    ids: Flags.string({ description: '待删除的提价确认Listing唯一ID列表，逗号分隔。取自列表中勾选行复选框 name=inputvals 的 value(渲染自 item.uniqueId)，join(\',\') 拼接；未勾选时前端拦截不发请求。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorDeleteshopeeRevisepriceConfirmList)

    const data = await this.client.post('/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/deleteshopeeRevisepriceConfirmList', {}, { params: { "ids": flags.ids } })
    this.output(data)
  }
}
