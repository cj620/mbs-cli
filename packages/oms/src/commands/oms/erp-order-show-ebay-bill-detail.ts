// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowEbayBillDetail extends MBSCommand {
  static description = 'Ebay账户费用账单明细查询：按账单标识(billStr)、店铺、费用类型分页查询某 Ebay 账单下的费用明细，返回明细列表(店铺、账户、费用类型、毛/净明细、增值税率、人民币金额、汇率、itemid、商品标题等)及分页信息(总页数、总条数)。'

  static flags = {
    billStr: Flags.string({ description: '账单标识串(账单ID/账单编码)。来源：页面URL查询参数 GetQueryString(\'billStr\')', required: true }),
    shopId: Flags.string({ description: '店铺ID。来源：页面URL查询参数 GetQueryString(\'shopId\')', required: true }),
    type: Flags.string({ description: '费用类型(按费用类型筛选)。来源：费用类型下拉框 #freeType；空表示全部' }),
    currPage: Flags.string({ description: '当前页码。来源：分页控件回调 api.getCurrent()；首次加载不传，翻页时传' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowEbayBillDetail)

    const data = await this.client.post('/erpOrder/erpOrder/ebayAccountFee/showEbayBillDetail', { "billStr": flags.billStr, "shopId": flags.shopId, "type": flags.type, "currPage": flags.currPage })
    this.output(data)
  }
}
