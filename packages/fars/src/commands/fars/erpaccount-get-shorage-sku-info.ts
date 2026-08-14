// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpaccountGetShorageSkuInfo extends MBSCommand {
  static description = '缺货SKU列表查询：仪表盘“缺货SKU”明细查询：按平台分类(sortnum)查询当前缺货的SKU列表，返回每个SKU的图片、商品信息、状态、侵权/淘汰标记、开发员/采购员、缺货单量与件数、销售级别、近7/30/90天销量、产品创建时间、最新采购信息及最后一次跟进日志。'

  static flags = {
    sortnum: Flags.string({ description: '平台分类序号(URL查询参数)。由页面URL的name参数(平台中文名)映射:ebay虚拟海外仓=1;Shopee=2;Wish=3;Amazon=4;ebay非海外仓=5;aliexpress=6;SeeBee=7;Joom=8;其他=9;Lazada=10;ozon.ru=11;Walmart=12;TikTok=13;Fyndiq=14;SMT全托半托JIT=15' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpaccountGetShorageSkuInfo)

    const data = await this.client.post('/erpaccount/erpaccount/dashboard/getShorageSkuInfo', {}, { params: { "sortnum": flags.sortnum } })
    this.output(data)
  }
}
