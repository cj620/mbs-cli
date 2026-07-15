// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetSiteByPlatform extends MBSCommand {
  static description = '根据平台查找站点：依据平台标识(platform)查询该平台下的全部站点列表，用于「店铺上新统计」页面顶部「站点」下拉框的选项渲染(art-template #siteTemplate)。页面加载即调用，返回站点集合。'

  static flags = {
    platform: Flags.string({ description: '平台标识。前端硬编码固定传1(对应平台1)，经URL query传递(?platform=1)，用于筛选该平台下的站点。来源：代码常量(非控件)，枚举取值待人工确认', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetSiteByPlatform)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/getSiteByPlatform', {}, { params: { "platform": flags.platform } })
    this.output(data)
  }
}
