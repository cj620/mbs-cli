// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishListRelistingDetails extends MBSCommand {
  static description = 'SMT Relisting失败信息详情列表查询：查询速卖通(SMT/aliexpress)商品重新刊登(relisting)的明细列表，按是否成功、刊登时间、店铺名进行分页过滤，返回失败/成功的源SPU、源itemID、状态、销量、失败原因等明细，用于relisting失败信息详情页面表格渲染。'

  static flags = {
    isSuccess: Flags.string({ description: '是否成功筛选，前端固定传 fail。枚举：fail=失败 / success=成功(本页固定fail)', required: true }),
    relistingTimeStart: Flags.string({ description: '重新刊登时间(起始)，取自 sessionStorage.SmtListingTime' }),
    shopName: Flags.string({ description: '店铺名称，取自 sessionStorage.smtShopName' }),
    pageSize: Flags.string({ description: '每页条数，前端固定传 100', required: true }),
    currentPage: Flags.string({ description: '当前页码，首次加载固定 1，翻页时取分页控件 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishListRelistingDetails)

    const data = await this.client.post('/erpPublish/erpPublish/smtProductPublish/listRelistingDetails', { "isSuccess": flags.isSuccess, "relistingTimeStart": flags.relistingTimeStart, "shopName": flags.shopName, "pageSize": flags.pageSize, "currentPage": flags.currentPage })
    this.output(data)
  }
}
