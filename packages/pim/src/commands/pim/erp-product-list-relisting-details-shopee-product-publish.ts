// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListRelistingDetailsShopeeProductPublish extends MBSCommand {
  static description = 'Shopee Relisting失败信息详情列表查询：查询某次 Shopee 重新刊登(Relisting)任务的失败明细：按刊登时间、店铺名分页返回失败的 Shopee 商品(平台/店铺/负责人/胤元SPU/源itemID/状态/销量/失败原因等)，前端用于 relisting 失败信息详情页表格渲染与分页。'

  static flags = {
    isSuccess: Flags.string({ description: '成功/失败标识，本页固定传 \'fail\'(仅查失败明细)', required: true }),
    relistingTimeStart: Flags.string({ description: 'Relisting 刊登时间(起始)，来源 sessionStorage \'ShopeeListingTime\'', required: true }),
    shopName: Flags.string({ description: '店铺名称(按店铺过滤)，来源 sessionStorage \'shopeeShopName\'', required: true }),
    pageSize: Flags.string({ description: '每页条数，固定 100', required: true }),
    currentPage: Flags.string({ description: '当前页码；首次加载固定 1，分页回调取 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListRelistingDetailsShopeeProductPublish)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/listRelistingDetails', { "isSuccess": flags.isSuccess, "relistingTimeStart": flags.relistingTimeStart, "shopName": flags.shopName, "pageSize": flags.pageSize, "currentPage": flags.currentPage })
    this.output(data)
  }
}
