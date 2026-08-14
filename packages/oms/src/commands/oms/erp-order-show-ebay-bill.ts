// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowEbayBill extends MBSCommand {
  static description = 'eBay账期账单费用查询：eBay对账页面按账期(billStr)+店铺(shopId)分页查询账单费用列表，返回各店铺该账期的币种、新增费用、折扣和退款及其人民币折算金额，并返回总条数与总页数供前端分页。'

  static flags = {
    billStr: Flags.string({ description: '账期/账单期间(eBay账单月份)。来源控件：账期下拉框 #shopids1；search() 取全局 shopid1(账期列表首项 list[0])，search1() 取 $(\'#shopids1\').val()', required: true }),
    shopId: Flags.string({ description: '店铺ID。来源控件：店铺名下拉框 #shopids($(\'#shopids\').val()，未选时为空)' }),
    currPage: Flags.string({ description: '当前页码。来源：分页组件 api.getCurrent()，仅翻页回调追加；首次查询不传' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowEbayBill)

    const data = await this.client.post('/erpOrder/erpOrder/ebayAccountFee/showEbayBill', { "billStr": flags.billStr, "shopId": flags.shopId, "currPage": flags.currPage })
    this.output(data)
  }
}
