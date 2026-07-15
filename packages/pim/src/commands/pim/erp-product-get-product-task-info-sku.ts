// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetProductTaskInfoSku extends MBSCommand {
  static description = 'SKU任务信息查询：SKU详情页底部「任务」模块加载：按SKU查询该商品关联的任务工单记录，返回任务发起人/执行人/任务简介/生成时间/任务状态列表，渲染为任务表格(#taskInfoSku)。'

  static flags = {
    sku: Flags.string({ description: '商品SKU编号(查询参数，拼在URL ?sku= 后；来源=当前页URL查询参数 SKU，经 GetQueryString(\'SKU\') 取得)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetProductTaskInfoSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getProductTaskInfoSku', {}, { params: { "sku": flags.sku } })
    this.output(data)
  }
}
