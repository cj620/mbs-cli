// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindDbManufactureEvaluation extends MBSCommand {
  static description = '供应商采购评价列表查询：供应商详情页「采购评价」Tab 的分页列表查询：按供应商ID查询该供应商的采购评价记录（评价星级、评价内容、评价人、评价时间、关联采购单号），支持分页；返回评价行列表及总数/总页数，前端用 art-template (contentTemplate8) 渲染并用 pagination 翻页。'

  static flags = {
    manufactureId: Flags.string({ description: '供应商ID，取自 URL 查询参数 sequenceid（GetQueryString(\'sequenceid\')），来源：页面地址栏', required: true }),
    currentPage: Flags.string({ description: '当前页码，仅分页翻页时提交，取自分页控件 api.getCurrent()；首屏不传（用后端默认）' }),
    pageSize: Flags.string({ description: '每页条数，分页回调中固定传 20；首屏不传（用后端默认）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindDbManufactureEvaluation)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureEvaluation', { "manufactureId": flags.manufactureId, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
