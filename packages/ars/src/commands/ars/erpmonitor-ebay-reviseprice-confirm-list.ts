// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorEbayRevisepriceConfirmList extends MBSCommand {
  static description = 'ebay提价确认列表查询：ebay提价页列表分页查询：按创建时间、店铺、提价结果、涨/降价、当前售价区间、新售价区间、当前/新物流方式、创建人、itemId等条件筛选，返回提价确认记录列表。等待提价与提价完毕两个Tab共用同一接口。'

  static flags = {
    currPage: Flags.string({ description: '当前页码。来源 pData.currPage(初始1，分页回调更新，search()重置为1)', required: true }),
    pageSize: Flags.string({ description: '每页条数。来源下拉框 #selectPagesize/#selectPagesize2，枚举 50/100/200/500，默认200', required: true }),
    requestdatestart: Flags.string({ description: '创建时间-起始(yyyy-MM-dd)。来源日期框 #beginTime，默认当前日期前2天' }),
    requestdateend: Flags.string({ description: '创建时间-结束(yyyy-MM-dd)。来源日期框 #endTimes，默认当天' }),
    revisestatus: Flags.string({ description: '提价结果状态。来源下拉框 #selectStatus，枚举 1=等待提价;2=提价失败;3=提价成功;4=提价中(空=全部)' }),
    shopid: Flags.string({ description: '店铺ID。来源下拉框 #selectShop(选项由 findShops 接口填充，value=shopId)' }),
    originskupricemin: Flags.string({ description: '当前售价-区间最小值。来源数字框 #originskupricemin' }),
    originskupricemax: Flags.string({ description: '当前售价-区间最大值。来源数字框 #originskupricemax' }),
    newskupricemin: Flags.string({ description: '新售价-区间最小值。来源数字框 #newskupricemin' }),
    newskupricemax: Flags.string({ description: '新售价-区间最大值。来源数字框 #newskupricemax' }),
    originexpresstype: Flags.string({ description: '当前物流方式。来源文本框 #originexpresstype' }),
    expresstype: Flags.string({ description: '新物流方式。来源文本框 #expresstype' }),
    tab: Flags.string({ description: '当前Tab标识。来源 sessionStorage.tab，枚举 等待提价/提价完毕' }),
    upOrDown: Flags.string({ description: '涨价/降价筛选。来源下拉框 #selectupOrDown，枚举 up=涨价;down=降价(空=全部)' }),
    requestby: Flags.string({ description: '创建人。来源文本框 #requestby' }),
    itemIds: Flags.string({ description: '商品itemId(多个用逗号分割，不支持换行)。来源文本框 #itemIds' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorEbayRevisepriceConfirmList)

    const data = await this.client.post('/erpmonitor/erpmonitor/ebayRevisepriceConfirm/ebayRevisepriceConfirmList', { "currPage": flags.currPage, "pageSize": flags.pageSize, "requestdatestart": flags.requestdatestart, "requestdateend": flags.requestdateend, "revisestatus": flags.revisestatus, "shopid": flags.shopid, "originskupricemin": flags.originskupricemin, "originskupricemax": flags.originskupricemax, "newskupricemin": flags.newskupricemin, "newskupricemax": flags.newskupricemax, "originexpresstype": flags.originexpresstype, "expresstype": flags.expresstype, "tab": flags.tab, "upOrDown": flags.upOrDown, "requestby": flags.requestby, "itemIds": flags.itemIds })
    this.output(data)
  }
}
