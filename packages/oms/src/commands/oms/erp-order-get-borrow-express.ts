// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetBorrowExpress extends MBSCommand {
  static description = '可借用运单号查询：按排除平台、发货时间区间、交运时间区间、货运渠道、邮寄类型、目的国家等条件，分页查询可借用的运单号列表，返回运单号、国内运单号、发货时间、收件地址及渠道类型。'

  static flags = {
    starttime: Flags.string({ description: '发货时间-起始(YYYY-MM-DD)，来源 #starttime；开始时间不能大于结束时间' }),
    endtime: Flags.string({ description: '发货时间-结束(YYYY-MM-DD)，来源 #endtime' }),
    platform: Flags.string({ description: '排除平台，值为「平台ID&子平台ID」格式，来源 #platform。枚举:1&1=Ebay;2&2=Amazon;10&3=Aliexpress;15&24=ZoodMall;16&4=Wish;85&19=Joom;88&16=Shoppo;89&17=Shopee;91&25=Fyndiq;95&34=vova;97&32=Walmart;5&=Taobao;12&=Dhgate;13&=SeeBee;14&=Mail.ru;15&=ZoodMall;18&=Lazada;19&=Cdiscount;23&=Tophatter;26&=1688;28&=Tmall;92&=Jumia;93&=factorymarket;96&=jollychic;98&=oberlo', required: true }),
    contury: Flags.string({ description: '目的国家(中文)，来源 #contury，必填', required: true }),
    channel: Flags.string({ description: '货运渠道，来源 #channel，必填。枚举:Yanwen;Yun Express;China Post;Sunyou;Equick;USPS;Canada post;WanbExpress;CNE;4PX;UBI;SF Express;TOPYOU', required: true }),
    expType: Flags.string({ description: '邮寄类型，来源 #expType。枚举:挂号;平邮' }),
    startcreatetime: Flags.string({ description: '交运时间-起始(YYYY-MM-DD)，来源 #expressIdCreateTime' }),
    endcreatetime: Flags.string({ description: '交运时间-结束(YYYY-MM-DD)，来源 #expressIdCreateTimeEnd' }),
    pageNum: Flags.string({ description: '当前页码，初始1，上一页-1/下一页+1，搜索重置为1', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetBorrowExpress)

    const data = await this.client.post('/erpOrder/erpOrder/borrowingNo/getBorrowExpress', { "starttime": flags.starttime, "endtime": flags.endtime, "platform": flags.platform, "contury": flags.contury, "channel": flags.channel, "expType": flags.expType, "startcreatetime": flags.startcreatetime, "endcreatetime": flags.endcreatetime, "pageNum": flags.pageNum })
    this.output(data)
  }
}
