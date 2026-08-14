// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListRelistingDetailsLazadaPublish extends MBSCommand {
  static description = 'Lazada Relisting失败信息详情列表查询：查询 Lazada 平台重新刊登(relisting)的失败信息详情：按 relisting 时间、店铺名称分页查询失败列表，返回每条 SPU 的平台、店铺、店铺负责人、源标题/源itemID、上架状态、销量、失败原因等，并返回总条数与总页数用于分页。'

  static flags = {
    isSuccess: Flags.string({ description: '成功/失败标识，固定传 \'fail\'(仅查询失败记录)', required: true }),
    relistingTimeStart: Flags.string({ description: 'relisting(重新刊登)起始时间，来源 sessionStorage.lazadalistingTime', required: true }),
    shopName: Flags.string({ description: '店铺名称(按店铺过滤)，来源 sessionStorage.shopName，可能为空' }),
    pageSize: Flags.string({ description: '每页条数，固定 100', required: true }),
    currentPage: Flags.string({ description: '当前页码，首次加载固定 1，分页回调取 api.getCurrent()', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListRelistingDetailsLazadaPublish)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaPublish/listRelistingDetails', { "isSuccess": flags.isSuccess, "relistingTimeStart": flags.relistingTimeStart, "shopName": flags.shopName, "pageSize": flags.pageSize, "currentPage": flags.currentPage })
    this.output(data)
  }
}
