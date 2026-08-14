// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowWishFineBills extends MBSCommand {
  static description = 'Wish罚款账单列表查询：按发生时间区间(dateFromStr~dateToStr)分页查询各店铺的Wish平台罚款账单汇总，返回店铺名、罚款类型、罚款金额(美元/人民币)列表及分页信息；前端以 art-template(#contentTemplate) 渲染表格。'

  static flags = {
    dateFromStr: Flags.string({ description: '发生时间-起始(开始时间)，格式 YYYY-MM-DD；前端校验非空', required: true }),
    dateToStr: Flags.string({ description: '发生时间-结束(结束时间)，格式 YYYY-MM-DD；前端校验非空且不得早于开始时间', required: true }),
    currPage: Flags.string({ description: '当前页码；search()固定传1，分页回调传 api.getCurrent()；每页固定20条', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowWishFineBills)

    const data = await this.client.post('/erpOrder/erpOrder/wishFine/showWishFineBills', {}, { params: { "dateFromStr": flags.dateFromStr, "dateToStr": flags.dateToStr, "currPage": flags.currPage } })
    this.output(data)
  }
}
