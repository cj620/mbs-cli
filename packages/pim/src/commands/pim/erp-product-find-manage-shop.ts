// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindManageShop extends MBSCommand {
  static description = '查询可管理刊登店铺列表：Lazada 批量修改标题页面初始化时调用，拉取当前用户可见/可管理的刊登店铺名称列表，用于渲染「选择刊登店铺」下拉框(#shopName)的选项。无请求参数，前端发起空体 POST，店铺范围由后端依据登录用户上下文确定。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindManageShop)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaExportController/findManageShop', {})
    this.output(data)
  }
}
