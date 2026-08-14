// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorTiktokRevisepriceConfirmList extends MBSCommand {
  static description = 'TikTok提价确认列表查询：TikTok提价确认列表分页查询：按提价申请时间、提价状态、店铺、原/新SKU价格区间、SPU近7天订单数区间、平台Item ID、页签、提价/降价、申请人等条件分页查询提价确认单，返回SPU行及其SKU提价明细(confirmList)。'

  static flags = {
    currPage: Flags.string({ description: '当前页码(初始为1；分页回调赋值)', required: true }),
    pageSize: Flags.string({ description: '每页条数(下拉选择)', required: true }),
    requestdatestart: Flags.string({ description: '提价申请时间-起始(默认当前日期前2天,格式 YYYY-MM-DD)' }),
    requestdateend: Flags.string({ description: '提价申请时间-结束(默认当前日期,格式 YYYY-MM-DD)' }),
    revisestatus: Flags.string({ description: '提价状态。1=等待提价;2=提价失败;3=提价成功;4=提价中;5=部分成功' }),
    shopids: Flags.string({ description: '店铺ID列表(多选店铺勾选后逗号拼接)' }),
    originskupricemin: Flags.string({ description: '原SKU价格-最小' }),
    originskupricemax: Flags.string({ description: '原SKU价格-最大' }),
    newskupricemin: Flags.string({ description: '新SKU价格-最小' }),
    newskupricemax: Flags.string({ description: '新SKU价格-最大' }),
    spuSevenOrdernumMin: Flags.string({ description: 'SPU近7天订单数-最小' }),
    spuSevenOrdernumMax: Flags.string({ description: 'SPU近7天订单数-最大' }),
    itemId: Flags.string({ description: '平台商品Item ID(去首尾空格)' }),
    tab: Flags.string({ description: '页签标识。等待提价 / 提价完毕' }),
    upOrDown: Flags.string({ description: '提价/降价筛选(下拉选择)' }),
    requestby: Flags.string({ description: '申请人' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorTiktokRevisepriceConfirmList)

    const data = await this.client.post('/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/tiktokRevisepriceConfirmList', { "currPage": flags.currPage, "pageSize": flags.pageSize, "requestdatestart": flags.requestdatestart, "requestdateend": flags.requestdateend, "revisestatus": flags.revisestatus, "shopids": flags.shopids, "originskupricemin": flags.originskupricemin, "originskupricemax": flags.originskupricemax, "newskupricemin": flags.newskupricemin, "newskupricemax": flags.newskupricemax, "spuSevenOrdernumMin": flags.spuSevenOrdernumMin, "spuSevenOrdernumMax": flags.spuSevenOrdernumMax, "itemId": flags.itemId, "tab": flags.tab, "upOrDown": flags.upOrDown, "requestby": flags.requestby })
    this.output(data)
  }
}
