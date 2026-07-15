// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductSite extends MBSCommand {
  static description = '获取大类目(Excel模板)列表：亚马逊自动刊登确认页，点击/批量修改大类时，按当前SPU所在站点(site)拉取该站点下可选的Excel模板(大类)列表，用于填充 #bigCategorySelect 下拉，选项展示为"模板名 > 产品类型"，选中后用 templateId/productType 修改大类。'

  static flags = {}

  static args = {
    site: Args.string({ required: true, description: '站点代号(URL路径变量)。来源 baseData.site：单个改大类取 td[data-site]，批量取选中行 site(要求同站点)。取值如 US/CA/ES/FR/IT/MX/DE/UK/JP/AU/NL' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductSite)

    const data = await this.client.get(`/erpProduct/erpProduct/amazonProductPublish/getExcelTemplate/${args.site}`, { params: {} })
    this.output(data)
  }
}
