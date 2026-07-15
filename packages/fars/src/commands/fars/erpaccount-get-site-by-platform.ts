// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetSiteByPlatform extends MBSCommand {
  static description = '根据平台查询站点：首页仪表盘「销量趋势图」筛选区，根据已勾选的平台(可多选,逗号拼接)查询对应的站点列表，返回站点名称数组，用于渲染「站点」多选下拉框(#ulSite)。'

  static flags = {
    platform: Flags.string({ description: '平台标识(多平台逗号拼接)。来源控件 #platform 复选框 input[name=ids]，由 selectId() 取勾选值 join(\',\')。枚举:ebay/wish/fyndiq/aliexpress/joom/amazon/shopee/lazada/Walmart/TikTok/other。允许为空字符串。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetSiteByPlatform)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getSiteByPlatform', {}, { params: { "platform": flags.platform } })
    this.output(data)
  }
}
