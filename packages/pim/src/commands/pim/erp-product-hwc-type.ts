// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductHwcType extends MBSCommand {
  static description = '根据海外仓类型查询发货仓库(前缀)列表：订单详情页「海外仓发货设置」弹窗中，用户选择「海外仓类型」后触发；以海外仓类型ID作为路径参数，返回该类型下可选的发货仓库(中转仓/前缀)列表，用于「选择前缀」下拉框。仅有一项时前端默认选中并继续联动 SKU 后缀与收货仓库。'

  static flags = {}

  static args = {
    hwcType: Args.string({ required: true, description: '海外仓类型ID（路径参数）。取自「海外仓类型」下拉选中项的 warehouseTypeId，即 overseaForm.warehouseTypeId；来源控件为 orderdetail.html 海外仓发货设置弹窗的海外仓类型下拉(@change 透传的选中值)。' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductHwcType)

    const data = await this.client.get(`/erpProduct/erpProduct/product/getHWCSuffByHwcType/${args.hwcType}`, { params: {} })
    this.output(data)
  }
}
