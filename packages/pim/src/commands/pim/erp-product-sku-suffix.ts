// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductSkuSuffix extends MBSCommand {
  static description = '按发货仓库后缀查询收货仓库：创建海外仓SKU弹窗中，根据选中的发货仓库后缀 skuSuffix 查询对应的收货仓库列表，用于填充收货仓库多选下拉，前端默认全选所有 receivingWarehouseId。'

  static flags = {}

  static args = {
    skuSuffix: Args.string({ required: true, description: '发货仓库后缀（路径参数）。取自 overseaForm.skuSuffix，由所选发货仓库 warehouseCN 经 setSkuSuffix 赋值，用于定位对应收货仓库集合。来源控件：创建海外仓SKU弹窗发货仓库下拉。' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductSkuSuffix)

    const data = await this.client.get(`/erpProduct/erpProduct/product/getReceivingWarehouseId/${args.skuSuffix}`, { params: {} })
    this.output(data)
  }
}
