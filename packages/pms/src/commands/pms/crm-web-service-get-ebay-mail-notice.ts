// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsCrmWebServiceGetEbayMailNotice extends MBSCommand {
  static description = '获取eBay未回复邮件提醒：拉取当前登录客服/员工需要处理的 eBay 未回复邮件汇总，按邮件主题聚合返回每个主题下的未回复邮件数量，前端在仪表盘右侧以 ElNotification 弹窗提醒；data 为空对象时不弹窗。配套确认已读按钮调用 removeEbayMailNotice。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsCrmWebServiceGetEbayMailNotice)

    const data = await this.client.post('/gateway/crm-web-service/notice/getEbayMailNotice', {})
    this.output(data)
  }
}
