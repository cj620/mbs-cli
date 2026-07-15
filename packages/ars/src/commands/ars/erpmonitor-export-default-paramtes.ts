// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorExportDefaultParamtes extends MBSCommand {
  static description = '导出默认参数查询（按平台取默认平台费率/毛利率/退款率）：商品导出创建页在选择/初始化导出平台时调用，按 platformId 查询该平台对应的默认导出参数（平台费率、毛利率、退款率），并回填到「数据格式」区的平台费率、毛利率、退款率输入框。'

  static flags = {
    platformId: Flags.string({ description: '平台ID（query 参数）。来源：localStorage.getItem(\'platformId\') 或平台下拉框 #platformId 当前值。枚举：胤元;133=fruugo;85=joom;2=amazon;95=vova;26=shopee;26NEW=shopeeNEW;10=SMT;90=mail.ru;91=Fyndiq;86=ZoodMall;1=ebay;93=FactoryMarket;18=lazada;100=Queensta;103=Yandex;104=EZBuy;97=Walmart;98=Oberlo;102=Alabom;109=B2WDigital;114=real.de;108=mercadolibre;京东;121=Akulaku;122=fanno;123=Microsoft;119=ozon.ru;128=Temu;145=noon', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorExportDefaultParamtes)

    const data = await this.client.get('/erpmonitor/erpmonitor/managerHotProduct/exportDefaultParamtes', { params: { "platformId": flags.platformId } })
    this.output(data)
  }
}
