// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetJingLiZongJianAnaZongJingBan1 extends MBSCommand {
  static description = '经理/总监/Ana/总经办权限校验：库存看板页加载时(created 钩子)发起的无参权限探测接口。后端依据当前会话用户身份判定其是否为经理/总监/Ana/总经办，返回对象 obj；前端仅以 data.obj 是否为真值判断有无权限，为真则置 accessible=true，从而让「停止spu推送」按钮可见。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetJingLiZongJianAnaZongJingBan1)

    const data = await this.client.post('/erpProduct/erpProduct/product/getJingLiZongJianAnaZongJingBan1', {})
    this.output(data)
  }
}
