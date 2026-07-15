// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpPublishForbidSkuList extends MBSCommand {
  static description = '拦截SKU列表查询：eBay批量刊登页"拦截SKU"弹窗的列表查询接口：分页查询已被拦截(禁止刊登)的SKU记录，支持按SKU模糊查询，返回拦截SKU清单(SKU、拦截站点/范围、提交人、提交时间)及分页汇总信息。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码(初始查询固定为1；分页回调取 api.getCurrent())' }),
    pageSize: Flags.string({ description: '每页条数(前端固定为10)' }),
    sku: Flags.string({ description: '拦截SKU模糊查询关键词(仅 searchSkuList() 按SKU查询时传入，来源输入框 .searchSKUs)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpPublishForbidSkuList)

    const data = await this.client.post('/erpPublish/erpPublish/productPublish/forbidSkuList', { "currentPage": flags.currentPage, "pageSize": flags.pageSize, "sku": flags.sku })
    this.output(data)
  }
}
