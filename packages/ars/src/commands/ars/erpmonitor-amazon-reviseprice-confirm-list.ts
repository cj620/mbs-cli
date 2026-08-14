// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorAmazonRevisepriceConfirmList extends MBSCommand {
  static description = '亚马逊调价确认列表查询：AMZ调价页列表分页查询：按创建时间、刊登时间、调价结果、店铺、原/新价格区间、物流方式、涨降价、SKU/SPU/子ASIN、是否跟卖、运费模板等条件分页查询亚马逊调价确认记录，返回列表及分页汇总。tab=1 等待调价，tab=2 调价完毕。'

  static flags = {
    publishStartDate: Flags.string({ description: '刊登时间-起始(仅 tab=1/getList 携带)' }),
    publishEndDate: Flags.string({ description: '刊登时间-结束(仅 tab=1/getList 携带)' }),
    startDate: Flags.string({ description: '创建时间-起始(默认当天前2天)' }),
    endDate: Flags.string({ description: '创建时间-结束(默认当天)' }),
    revisePriceResult: Flags.string({ description: '调价结果。0=等待调价;2=调价中;3=调价成功;4=调价失败(空=全部)' }),
    shopId: Flags.string({ description: '店铺ID' }),
    smallOriginPrice: Flags.string({ description: '原价格范围-开始' }),
    olderOriginPrice: Flags.string({ description: '原价格范围-结束' }),
    smallNewPrice: Flags.string({ description: '新价格范围-开始' }),
    olderNewPrice: Flags.string({ description: '新价格范围-结束' }),
    expressChannel: Flags.string({ description: '物流方式(模糊搜索)' }),
    tab: Flags.string({ description: '标签页。1=等待调价;2=调价完毕', required: true }),
    revisePriceUpFlag: Flags.string({ description: '涨降价标志。1=涨价;2=降价(空=全部)' }),
    erpSku: Flags.string({ description: 'ERP SKU(搜索)' }),
    erpSpu: Flags.string({ description: 'ERP SPU(搜索)' }),
    sonAsins: Flags.string({ description: '子ASIN(多个逗号分隔)' }),
    followUpFlag: Flags.string({ description: '是否跟卖。0=跟卖;1=非跟卖(空=全部)' }),
    shippingTemplate: Flags.string({ description: '运费模板名称(值为\'null\'时置为 null,空模板)' }),
    currPage: Flags.string({ description: '当前页码(分页/搜索时重置为1)', required: true }),
    pageSize: Flags.string({ description: '每页条数(50/100/500,+转数字)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorAmazonRevisepriceConfirmList)

    const data = await this.client.post('/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/amazonRevisepriceConfirmList', { "publishStartDate": flags.publishStartDate, "publishEndDate": flags.publishEndDate, "startDate": flags.startDate, "endDate": flags.endDate, "revisePriceResult": flags.revisePriceResult, "shopId": flags.shopId, "smallOriginPrice": flags.smallOriginPrice, "olderOriginPrice": flags.olderOriginPrice, "smallNewPrice": flags.smallNewPrice, "olderNewPrice": flags.olderNewPrice, "expressChannel": flags.expressChannel, "tab": flags.tab, "revisePriceUpFlag": flags.revisePriceUpFlag, "erpSku": flags.erpSku, "erpSpu": flags.erpSpu, "sonAsins": flags.sonAsins, "followUpFlag": flags.followUpFlag, "shippingTemplate": flags.shippingTemplate, "currPage": flags.currPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
