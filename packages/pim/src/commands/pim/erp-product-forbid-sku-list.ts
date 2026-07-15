// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductForbidSkuList extends MBSCommand {
  static description = '拦截SKU列表查询(forbidSkuList)：eBay 批量刊登页「拦截SKU」弹框的分页列表查询。打开拦截SKU弹框、翻页、以及按 SKU 模糊搜索均调用本接口，返回被拦截 SKU 列表(SKU编号/拦截站点范围/提交人/提交时间)及分页汇总。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码。初始固定传1；翻页时取分页组件 api.getCurrent()。来源控件：分页组件 .M-box。(模糊搜索分支不传)' }),
    pageSize: Flags.string({ description: '每页条数，前端固定传10。(模糊搜索分支不传)' }),
    sku: Flags.string({ description: '按SKU模糊查询关键词。来源控件：搜索输入框 .searchSKUs。(初始加载/翻页分支不传)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductForbidSkuList)

    const data = await this.client.post('/erpProduct/erpProduct/productPublish/forbidSkuList', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "sku": flags.sku })
    this.output(data)
  }
}
