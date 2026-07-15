// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSiteByPlatform extends MBSCommand {
  static description = '按平台查询刊登站点(getSiteByPlatform)：根据所选主销平台查询该平台下已刊登过的站点列表。前端在平台下拉框 #kingPlatform 的 onchange 事件中调用，返回的站点字符串数组用于渲染‘刊登过的站点’下拉框 #siteslesct2（art-template 模板 sitemTempalte），供 SKU 列表查询按 site 参数过滤。'

  static flags = {
    platform: Flags.string({ description: '主销平台名称，来源控件 #kingPlatform(select)，以 URL Query 传递；未选择时为空字符串。枚举为平台名称字符串(动态字典)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSiteByPlatform)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getSiteByPlatform', {}, { params: { "platform": flags.platform } })
    this.output(data)
  }
}
