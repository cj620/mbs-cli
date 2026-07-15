// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetManufactureSku extends MBSCommand {
  static description = 'SKU供应商信息查询(getManufactureSku)：SKU详情页加载该SKU的供应商(含主供应商与两个备选供应商)信息：供应商名称/ID、采购价、起批量、采购平台、平台链接、1688/淘宝/天猫备选供应商链接、旺旺号、商品图片等，用于渲染供应商表格(content2/contentTemplate2)。前端对返回数组补位至3条。'

  static flags = {
    sku: Flags.string({ description: '要查询供应商信息的SKU编号(取自页面URL查询参数SKU)', required: true }),
    oper3: Flags.string({ description: '开发员/创建人(oper3)，用于按开发员维度过滤供应商；无值时拼为undefined' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetManufactureSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getManufactureSku', {}, { params: { "sku": flags.sku, "oper3": flags.oper3 } })
    this.output(data)
  }
}
