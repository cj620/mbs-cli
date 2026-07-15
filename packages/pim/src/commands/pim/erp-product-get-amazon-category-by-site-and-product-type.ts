// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAmazonCategoryBySiteAndProductType extends MBSCommand {
  static description = '按站点与大类目查询亚马逊子类目(itemType)：在亚马逊自动刊登确认列表页，用户点击某行的“子类目”单元格进入编辑时，根据该行所属站点(site)与亚马逊大类目名称(amazonCategoryName)联动查询其下可选的亚马逊子类目(itemType)列表，渲染为下拉选项供修改。'

  static flags = {
    site: Flags.string({ description: '站点代码。来源 td[data-site](baseData.site)。枚举:US=美国;CA=加拿大;ES=西班牙;FR=法国;IT=意大利;MX=墨西哥;DE=德国;UK=英国;JP=日本;AU=澳大利亚;NL=荷兰', required: true }),
    amazonCategoryName: Flags.string({ description: '亚马逊大类目名称(产品类型productType)。来源 td[data-categoryName]，作为查询子类目的上级大类条件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAmazonCategoryBySiteAndProductType)

    const data = await this.client.post('/erpProduct/erpProduct/amazonProductPublish/getAmazonCategoryBySiteAndProductType', { "site": flags.site, "amazonCategoryName": flags.amazonCategoryName })
    this.output(data)
  }
}
