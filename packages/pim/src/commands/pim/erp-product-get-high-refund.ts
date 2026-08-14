// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetHighRefund extends MBSCommand {
  static description = '高退款率产品列表查询：违规产品登记页(registrationForm)第三个标签页「高退款率产品」的分页列表查询：按开发员、采购员、SKU、开发时间区间筛选，返回高退款率(异常编号固定 WG51)的 SKU 列表及毛利率/退款率/销量等汇总字段。由页面 search3()/getProductIllegal3() 调用。'

  static flags = {
    endDate2: Flags.string({ description: '开发结束时间。来源控件 #endDate(input type=date)，格式 yyyy-MM-dd' }),
    buyer: Flags.string({ description: '采购员。来源控件 #oper1(采购员下拉，选项来自 getEmpByDep depId=65)' }),
    oper: Flags.string({ description: '开发员。来源控件 #oper3(开发员下拉，选项来自 getEmpByDep depId=62)' }),
    sku: Flags.string({ description: 'SKU 编码(按 SKU 查询)。来源控件 #productid(input placeholder=请输入SKU)' }),
    startDate2: Flags.string({ description: '开发开始时间。来源控件 #startDate(input type=date)，格式 yyyy-MM-dd' }),
    pageSize: Flags.string({ description: '每页条数，前端固定传 50', required: true }),
    page: Flags.string({ description: '当前页码，search3() 固定传 1；翻页时取分页控件 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetHighRefund)

    const data = await this.client.post('/erpProduct/erpProduct/product/getHighRefund', { "endDate2": flags.endDate2, "buyer": flags.buyer, "oper": flags.oper, "sku": flags.sku, "startDate2": flags.startDate2, "pageSize": flags.pageSize, "page": flags.page })
    this.output(data)
  }
}
