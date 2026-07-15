// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGet extends MBSCommand {
  static description = '商品异常(售后)原因类型及计数查询：在 SPU 管理页点击「举报异常/添加异常」时，按商品(SPU/productid)拉取可选的异常(售后)原因类型列表及各原因已有的计数，用于填充举报弹窗的「原因」下拉框；下拉项文本为「原因名称(数量)」，数量为 0 时不展示括号。'

  static flags = {}

  static args = {
    sku: Args.string({ required: true, description: '路径参数。商品 SPU/产品ID，前端实参为 productid（来源：SPU 列表行「举报异常」按钮 → addAbnormal(productid)）。拼接于 URL 路径 /product/{sku}/abnormal/type/count/get' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductGet)

    const data = await this.client.get(`/erpProduct/erpProduct/product/${args.sku}/abnormal/type/count/get`, { params: {} })
    this.output(data)
  }
}
