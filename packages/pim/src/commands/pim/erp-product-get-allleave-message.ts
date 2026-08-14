// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAllleaveMessage extends MBSCommand {
  static description = '商品咨询留言列表查询：商品咨询页按提问人/回复人/开发员、提问时间区间分页查询商品(SPU/SKU)留言：返回主留言(提问)及其子留言(回复)两级结构，前端渲染为表格并分页。'

  static flags = {
    page: Flags.string({ description: '当前页码(首次查询固定为1,分页回调取api.getCurrent())', required: true }),
    pageSize: Flags.string({ description: '每页条数(前端固定50)', required: true }),
    oper: Flags.string({ description: '操作人/回复人或提问人(来源:#productName下拉\'提问人\'或本人姓名localStorage username,随部门切换语义)' }),
    productPerson: Flags.string({ description: '商品负责人/提问人或回复人(来源:#askName下拉\'开发员\'或本人姓名localStorage username,随部门切换语义)' }),
    startTime: Flags.string({ description: '提问时间-起始(来源:#starttime日期控件,格式yyyy-MM-dd)' }),
    endTime: Flags.string({ description: '提问时间-结束(来源:#endtime日期控件,格式yyyy-MM-dd)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAllleaveMessage)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getALLLeaveMessage', { "page": flags.page, "pageSize": flags.pageSize, "oper": flags.oper, "productPerson": flags.productPerson, "startTime": flags.startTime, "endTime": flags.endTime })
    this.output(data)
  }
}
