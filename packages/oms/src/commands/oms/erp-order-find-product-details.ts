// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindProductDetails extends MBSCommand {
  static description = '新品出单产品明细查询：看板店铺(seebeeDevelopmentShop)新品出单产品明细分页查询：按店铺管理员/店铺名称/自建-继承状态/时间区间/类型筛选，分页返回商品图片、SPU、产品名、商品属性、出单量、创建时间等明细行，并返回总条数与总页数用于分页。'

  static flags = {
    shopManager: Flags.string({ description: '店铺管理员/店长（来源 URL 参数 shopManager，经 decodeURI 解码后传入）' }),
    shopName: Flags.string({ description: '店铺名称（search() 固定传空字符串；search2() 传 URL 参数 shopName 解码值）' }),
    status: Flags.string({ description: '状态（来源 URL 参数 status）。枚举：0=自建；1=继承' }),
    beginTime: Flags.string({ description: '开始时间（来源 URL 参数 beginTime，时间区间起始）' }),
    endTime: Flags.string({ description: '结束时间（来源 URL 参数 endTime，时间区间结束）' }),
    type: Flags.string({ description: '类型（来源 URL 参数 type，业务类型筛选）' }),
    currentPage: Flags.string({ description: '当前页码（首次固定为 1，翻页时取分页组件 api.getCurrent()）', required: true }),
    pageSize: Flags.string({ description: '每页条数（search()/其分页=50；search2()/其分页=5）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindProductDetails)

    const data = await this.client.post('/erpOrder/erpOrder/seebeeDevelopmentShop/findProductDetails', { "shopManager": flags.shopManager, "shopName": flags.shopName, "status": flags.status, "beginTime": flags.beginTime, "endTime": flags.endTime, "type": flags.type, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
