// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetSkuInfoBySpu extends MBSCommand {
  static description = '按SPU查询SKU信息(拍照延迟子表)：在「拍照延迟30天」任务列表中，点击某一行(SPU)的展开图标时，按该 SPU 查询其下所有 SKU 的明细(图片、SKU、SKU名称、仓位、库存数量)，渲染为子表格；库存≤0 时前端追加“(缺货)”标识。'

  static flags = {}

  static args = {
    spu: Args.string({ required: true, description: '商品SPU编号(路径变量)。来源：拍照延迟任务表格行 data-spu 属性' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PmsErpTaskGetSkuInfoBySpu)

    const data = await this.client.get(`/erpTask/erpTask/developMustDo/${args.spu}/getSkuInfoBySpu`, { params: {} })
    this.output(data)
  }
}
