// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorShopeeRevisepriceConfirmList extends MBSCommand {
  static description = 'Shopee提价确认列表查询：Shopee提价页「等待提价 / 提价完毕」两个 Tab 的列表分页查询：按创建时间、店铺、提价结果、价格涨跌、当前售价区间、新售价区间、创建人等条件分页查询提价确认记录，返回主记录及其提价明细子列表(confirmList)。getList()/getList2() 复用同一后端接口。'

  static flags = {
    currPage: Flags.string({ description: '当前页码(pData.currPage,搜索/切Tab重置为1)', required: true }),
    pageSize: Flags.string({ description: '每页条数(#selectPagesize/#selectPagesize2,枚举50/100/200,默认200)', required: true }),
    requestdatestart: Flags.string({ description: '创建时间-起始(#beginTime,yyyy-MM-dd,默认前2天)' }),
    requestdateend: Flags.string({ description: '创建时间-结束(#endTimes,yyyy-MM-dd,默认当天)' }),
    revisestatus: Flags.string({ description: '提价结果/状态(#selectStatus)。1=等待提价;2=提价失败;3=提价成功;4=提价中;5=部分成功(空=全部)' }),
    shopids: Flags.string({ description: '店铺ID(#checkShopId,多选逗号拼接)' }),
    originskupricemin: Flags.string({ description: '当前售价-最小值(#originskupricemin)' }),
    originskupricemax: Flags.string({ description: '当前售价-最大值(#originskupricemax)' }),
    newskupricemin: Flags.string({ description: '新售价-最小值(#newskupricemin)' }),
    newskupricemax: Flags.string({ description: '新售价-最大值(#newskupricemax)' }),
    tab: Flags.string({ description: '当前标签页(sessionStorage[\'tab\']:等待提价/提价完毕)' }),
    upOrDown: Flags.string({ description: '价格涨跌(#selectupOrDown)。1=涨价;2=不变;3=降价(空=全部)' }),
    requestby: Flags.string({ description: '创建人(#requestby)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorShopeeRevisepriceConfirmList)

    const data = await this.client.post('/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/shopeeRevisepriceConfirmList', { "currPage": flags.currPage, "pageSize": flags.pageSize, "requestdatestart": flags.requestdatestart, "requestdateend": flags.requestdateend, "revisestatus": flags.revisestatus, "shopids": flags.shopids, "originskupricemin": flags.originskupricemin, "originskupricemax": flags.originskupricemax, "newskupricemin": flags.newskupricemin, "newskupricemax": flags.newskupricemax, "tab": flags.tab, "upOrDown": flags.upOrDown, "requestby": flags.requestby })
    this.output(data)
  }
}
