// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductClearance extends MBSCommand {
  static description = '国内清仓商品管理-清仓商品列表查询：国内清仓商品管理页面列表查询接口：按清仓状态(草稿中/等待清仓/清仓中/清仓完成)分页查询清仓商品，支持按SKU、子目录、排序方式、进度(移仓/拍照/刊登)筛选，返回清仓商品列表及总数。'

  static flags = {
    status: Flags.string({ description: '清仓状态。枚举：草稿中/等待清仓/清仓中/清仓完成' }),
    pageSize: Flags.string({ description: '每页条数(固定传 \'50\'；search()中不传)' }),
    page: Flags.string({ description: '当前页码(初始为1，分页回调取 api.getCurrent()；search()中不传)' }),
    sid: Flags.string({ description: '关键词-SKU(来源输入框 #sid，有值才传)' }),
    categoryid: Flags.string({ description: '子目录分类ID(来源下拉 #categoryId2 的 sequenceid，有值才传)' }),
    orderby: Flags.string({ description: '排序方式。枚举：1=按成本价降序;2=按成本价升序;3=按库存量降序;4=按库存量升序;5=按重量降序;6=按重量升序' }),
    flag: Flags.string({ description: '进度筛选。枚举：flag1=移仓;flag2=拍照;flag3=刊登' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductClearance)

    const data = await this.client.post('/erpProduct/erpProduct/productClearance/clearance', { "status": flags.status, "pageSize": flags.pageSize, "page": flags.page, "sid": flags.sid, "categoryid": flags.categoryid, "orderby": flags.orderby, "flag": flags.flag })
    this.output(data)
  }
}
