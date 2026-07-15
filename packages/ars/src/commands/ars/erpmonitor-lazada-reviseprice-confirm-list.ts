// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorLazadaRevisepriceConfirmList extends MBSCommand {
  static description = 'Lazada提价确认列表查询：Lazada提价页面「等待提价」/「提价完毕」两个页签共用的列表分页查询：按创建时间区间、店铺、提价结果、涨/降价、当前售价区间、新售价区间、新物流方式、创建人等条件筛选，返回提价确认记录列表及分页汇总字段。'

  static flags = {
    currPage: Flags.string({ description: '当前页码(pData.currPage,搜索/切换页签重置为1,分页取当前页)', required: true }),
    pageSize: Flags.string({ description: '每页条数(来源#selectPagesize/#selectPagesize2,枚举50/100/200,默认200)', required: true }),
    requestdatestart: Flags.string({ description: '创建时间-起始(yyyy-MM-dd,来源#beginTime,默认当前日期前2天)' }),
    requestdateend: Flags.string({ description: '创建时间-结束(yyyy-MM-dd,来源#endTimes,默认当天)' }),
    revisestatus: Flags.string({ description: '提价结果状态(来源#selectStatus;1=等待提价;2=提价失败;3=提价成功;4=提价中;空=全部)' }),
    shopids: Flags.string({ description: '店铺ID(多选逗号拼接,来源#checkShopId,最多100个店铺)' }),
    originskupricemin: Flags.string({ description: '当前售价-区间下限(来源#originskupricemin,number)' }),
    originskupricemax: Flags.string({ description: '当前售价-区间上限(来源#originskupricemax,number)' }),
    newskupricemin: Flags.string({ description: '新售价-区间下限(来源#newskupricemin,number)' }),
    newskupricemax: Flags.string({ description: '新售价-区间上限(来源#newskupricemax,number)' }),
    expresstype: Flags.string({ description: '新物流方式(来源#expresstype;Lazada专线/Lazada经济/Lazada国际程报价虚拟;空=全部)' }),
    tab: Flags.string({ description: '当前页签标识(来源sessionStorage.tab;等待提价/提价完毕)' }),
    upOrDown: Flags.string({ description: '涨价/降价筛选(来源#selectupOrDown;up=涨价;down=降价;空=全部)' }),
    requestby: Flags.string({ description: '创建人(来源#requestby,text)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorLazadaRevisepriceConfirmList)

    const data = await this.client.post('/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/lazadaRevisepriceConfirmList', { "currPage": flags.currPage, "pageSize": flags.pageSize, "requestdatestart": flags.requestdatestart, "requestdateend": flags.requestdateend, "revisestatus": flags.revisestatus, "shopids": flags.shopids, "originskupricemin": flags.originskupricemin, "originskupricemax": flags.originskupricemax, "newskupricemin": flags.newskupricemin, "newskupricemax": flags.newskupricemax, "expresstype": flags.expresstype, "tab": flags.tab, "upOrDown": flags.upOrDown, "requestby": flags.requestby })
    this.output(data)
  }
}
