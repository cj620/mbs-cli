// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishGetPriceChannelBySite extends MBSCommand {
  static description = '按站点获取算价渠道：TikTok 批量提价/生成提价商品信息弹窗中，用户在站点多选框选择站点后(onchange 触发 getPriceChannels)，按站点(逗号拼接)查询该站点集合下可用的算价渠道列表，返回结果用于填充算价渠道下拉框 #priceChannels。'

  static flags = {
    site: Flags.string({ description: '站点(多选，逗号拼接)。来源：提价弹窗站点多选控件 .site-select，代码 $(\'.site-select\').val().join(\',\')。站点编码如 TH/MY/MX/PH/SG/ID/BR/VN/TW 等。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishGetPriceChannelBySite)

    const data = await this.client.post('/erpPublish/erpPublish/tiktokBatchPublishController/getPriceChannelBySite', { "site": flags.site })
    this.output(data)
  }
}
