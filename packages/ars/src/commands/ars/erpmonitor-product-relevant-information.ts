// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorProductRelevantInformation extends MBSCommand {
  static description = '店铺运营相关信息列表查询：店铺运营监控看板列表分页查询：按平台、店铺、销售负责人、销售大酋长、客户经理、统计时间区间、运营状态等条件筛选，返回各店铺的新品率、动销率、在售/下架商品数、刊登/改价/改运费/改标题等运营维护指标及反馈好评率、统计周期等汇总字段。'

  static flags = {
    platformId: Flags.string({ description: '平台ID(来源控件#platformName平台下拉,空值=全选平台)' }),
    shopName: Flags.string({ description: '店铺名称(来源控件#ShopName店铺下拉,空值=全选店铺)' }),
    saleLeader: Flags.string({ description: '销售负责人ID(来源控件#saleLeader,值为saleLeaderId)' }),
    greatChief: Flags.string({ description: '销售大酋长ID(来源控件#greatChief,值为greatChiefId)' }),
    statisticalDateStart: Flags.string({ description: '统计时间-起始(开始日期,来源控件#updatedOn type=date)' }),
    statisticalDateEnd: Flags.string({ description: '统计时间-结束(结束日期,来源控件#updatedOff type=date)' }),
    customerManager: Flags.string({ description: '客户经理(来源控件#customerManager)' }),
    isOpenShop: Flags.string({ description: '店铺状态(#isOpenShop控件已注释,当前固定传空)(待人工确认)' }),
    orderFiled: Flags.string({ description: '排序字段(来源控件#orderFiled;空=默认;newPublishRate=新品率降序;soldListingRate=动销率降序;onlineProductCount=在售商品数降序;offlineProductCount=已下架商品数降序;newPublishCount=周期内刊登数降序;spuOnlineProductCount=在线SPU数降序;skuOnlineProductCount=在线SKU数降序;thirtyDaysNewOnlineListing=30天刊登listing在线量降序;thirtyDaysSoldNumber=30天销量降序)' }),
    currPage: Flags.string({ description: '当前页码(搜索固定1,分页取api.getCurrent();每页30条)', required: true }),
    operateStatus: Flags.string({ description: '运营状态(来源控件#OperateStatus;空=全部;1=运营中;2=暂停运营)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorProductRelevantInformation)

    const data = await this.client.post('/erpmonitor/erpmonitor/monitor/productRelevantInformation', { "platformId": flags.platformId, "shopName": flags.shopName, "saleLeader": flags.saleLeader, "greatChief": flags.greatChief, "statisticalDateStart": flags.statisticalDateStart, "statisticalDateEnd": flags.statisticalDateEnd, "customerManager": flags.customerManager, "isOpenShop": flags.isOpenShop, "orderFiled": flags.orderFiled, "currPage": flags.currPage, "operateStatus": flags.operateStatus })
    this.output(data)
  }
}
