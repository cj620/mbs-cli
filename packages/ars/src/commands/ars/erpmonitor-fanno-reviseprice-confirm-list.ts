// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorFannoRevisepriceConfirmList extends MBSCommand {
  static description = 'fanno提价列表查询：fanno提价页面「等待提价 / 提价完毕」两个标签页的列表分页查询：按创建时间、店铺、提价结果、涨价/降价、当前售价区间、新售价区间、创建人、itemid、sku 等条件筛选，返回提价 listing 列表及店铺、负责人、当前售价、新售价、新折前价格、站点、提价结果、刊登/提价时间等字段。'

  static flags = {
    currPage: Flags.string({ description: '当前页码(pData.currPage,搜索/切换页大小时重置为1,分页回调更新)', required: true }),
    pageSize: Flags.string({ description: '每页条数。来源 #selectPagesize/#selectPagesize2,枚举:50/100/200(默认200)', required: true }),
    requestdatestart: Flags.string({ description: '创建时间-起始(来源 #beginTime 日期控件,默认当天前2天)' }),
    requestdateend: Flags.string({ description: '创建时间-结束(来源 #endTimes 日期控件,默认当天)' }),
    revisestatus: Flags.string({ description: '提价结果。来源 #selectStatus 下拉。枚举:1=等待提价;2=提价失败;3=提价成功;4=提价中' }),
    shopids: Flags.string({ description: '店铺ID(来源隐藏域 #checkShopId,多店铺逗号拼接,最多100个)' }),
    originskupricemin: Flags.string({ description: '当前售价-起始范围(来源 #originskupricemin,数值输入)' }),
    originskupricemax: Flags.string({ description: '当前售价-结束范围(来源 #originskupricemax,数值输入)' }),
    newskupricemin: Flags.string({ description: '新售价-起始范围(来源 #newskupricemin,数值输入)' }),
    newskupricemax: Flags.string({ description: '新售价-结束范围(来源 #newskupricemax,数值输入)' }),
    expresstype: Flags.string({ description: '物流/快递类型(仅 getList2()/提价完毕 tab 传,来源 #expresstype;当前页面无对应控件,取值为 undefined/空)(待人工确认)' }),
    tab: Flags.string({ description: '当前标签页。来源 sessionStorage tab。枚举:等待提价 / 提价完毕' }),
    upOrDown: Flags.string({ description: '涨价/降价。来源 #selectupOrDown 下拉。枚举:up=涨价;down=降价' }),
    requestby: Flags.string({ description: '创建人(来源 #requestby 文本输入)' }),
    itemid: Flags.string({ description: '商品itemid(来源 #itemid 文本输入)' }),
    erpsku: Flags.string({ description: 'ERP SKU(来源 #erpsku 文本输入)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorFannoRevisepriceConfirmList)

    const data = await this.client.post('/erpmonitor/erpmonitor/fannoRevisepriceConfirm/fannoRevisepriceConfirmList', { "currPage": flags.currPage, "pageSize": flags.pageSize, "requestdatestart": flags.requestdatestart, "requestdateend": flags.requestdateend, "revisestatus": flags.revisestatus, "shopids": flags.shopids, "originskupricemin": flags.originskupricemin, "originskupricemax": flags.originskupricemax, "newskupricemin": flags.newskupricemin, "newskupricemax": flags.newskupricemax, "expresstype": flags.expresstype, "tab": flags.tab, "upOrDown": flags.upOrDown, "requestby": flags.requestby, "itemid": flags.itemid, "erpsku": flags.erpsku })
    this.output(data)
  }
}
