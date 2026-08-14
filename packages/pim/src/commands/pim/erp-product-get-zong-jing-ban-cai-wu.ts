// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetZongJingBanCaiWu extends MBSCommand {
  static description = '获取总经办财务权限标识：无入参的权限校验接口。前端在供应商回款(returnOfItem)页面初始化时调用,根据返回的布尔值 obj 决定当前用户是否为「总经办财务」,进而控制「财务导入」「批量核销」「财务核销」「异常处理」等财务操作入口(ButtonAble)是否展示。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetZongJingBanCaiWu)

    const data = await this.client.post('/erpProduct/erpProduct/product/getZongJingBanCaiWu', {})
    this.output(data)
  }
}
