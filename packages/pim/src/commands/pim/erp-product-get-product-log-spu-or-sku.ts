// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductLogSpuOrSku extends MBSCommand {
  static description = 'SPU/SKU 操作日志查询：根据 SPU 分页（滚动加载）查询该商品 SPU 及其下 SKU 的操作日志列表，返回操作人、操作时间、关联SKU、操作内容，前端在 SPU 详情页右侧操作日志栏渲染，并通过 IntersectionObserver 触底递增 limitNum 加载更多。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源：浏览器URL查询参数 SPU（GetQueryString(\'SPU\')），用于按SPU查询其操作日志', required: true }),
    isAll: Flags.string({ description: '是否查询全部，前端固定传 1（1=查询该SPU全部/全公司操作日志）', required: true }),
    sku: Flags.string({ description: 'SKU编号，前端固定传空串（即按SPU维度查询；预留按单个SKU过滤）' }),
    limitNum: Flags.string({ description: '加载条数上限。值=limitIndex * 1000（首次1000，每次触底滚动 limitIndex 递增），用于滚动分页加载', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductLogSpuOrSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getProductLogSpuOrSku', { "spu": flags.spu, "isAll": flags.isAll, "sku": flags.sku, "limitNum": flags.limitNum })
    this.output(data)
  }
}
