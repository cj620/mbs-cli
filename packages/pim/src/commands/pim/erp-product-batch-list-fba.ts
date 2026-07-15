// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductBatchListFba extends MBSCommand {
  static description = 'FBA批次上架库存明细查询(查看全部)：FBA库存报表页点击某SKU“查看全部”时，按 SKU+店铺 分页查询该SKU各批次的上架库存明细（批次描述、FBA对应批次上架库存数、接收日期），并在弹窗表格中展示，支持分页。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编码（由列表行“查看全部”按钮回传，定位要查询批次明细的SKU）', required: true }),
    shopName: Flags.string({ description: '店铺名称（由列表行回传，限定该SKU所属店铺）', required: true }),
    page: Flags.string({ description: '当前页码（首次取全局 pageFlag(主列表当前页,默认1)，分页回调取 api.getCurrent()）', required: true }),
    pageSize: Flags.string({ description: '每页条数（前端固定为 20）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductBatchListFba)

    const data = await this.client.post('/erpProduct/erpProduct/fbaProduct/batchListFba', { "sku": flags.sku, "shopName": flags.shopName, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
