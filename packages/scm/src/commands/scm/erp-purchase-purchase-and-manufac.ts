// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpPurchasePurchaseAndManufac extends MBSCommand {
  static description = '采购下单-供应商SKU采购明细查询(purchaseAndManufac)：采购下单页(采购任务列表)展开某一供应商行时，按当前搜索/筛选条件查询该供应商(某仓库)下的待采购SKU明细，返回每个SKU的商品信息、供应商、成本/备货价、推荐采购量、库存/在途、销量预留、异常提示等，前端拼接HTML表格渲染。'

  static flags = {
    searchType: Flags.string({ description: '搜索类型(来源控件 #searchType)' }),
    isFinish: Flags.string({ description: '是否完成筛选(来源控件 #isFinish)' }),
    salesStatus: Flags.string({ description: '销量状态(来源控件 #salesStatus；代码中赋值两次，取同一控件)' }),
    filtertype: Flags.string({ description: '筛选类型(来源控件 #filtertype)' }),
    keyword: Flags.string({ description: '关键词(来源控件 #keyword)' }),
    productStatus: Flags.string({ description: '产品状态(来源控件 #productStatus)' }),
    delayDay: Flags.string({ description: '延迟天数筛选(来源控件 #delayDay)' }),
    manufactureid: Flags.string({ description: '供应商ID(取自被展开供应商行 obj.manufactureId)', required: true }),
    storageId: Flags.string({ description: '仓库ID(取自被展开供应商行 obj.storageId)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpPurchasePurchaseAndManufac)

    const data = await this.client.post('/erpPurchase/erpPurchase/purchaseDownOrder/purchaseAndManufac', { "searchType": flags.searchType, "isFinish": flags.isFinish, "salesStatus": flags.salesStatus, "filtertype": flags.filtertype, "keyword": flags.keyword, "productStatus": flags.productStatus, "delayDay": flags.delayDay, "manufactureid": flags.manufactureid, "storageId": flags.storageId })
    this.output(data)
  }
}
