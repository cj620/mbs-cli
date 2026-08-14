// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileGetPositionIdByOper extends MBSCommand {
  static description = '根据操作员获取岗位ID：移动端订单详情页加载时调用，无入参，返回当前登录操作员对应的岗位ID。前端取响应体 obj 字段赋给 window.positionId，供作废订单等操作校验。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileGetPositionIdByOper)

    const data = await this.client.get('/erpMobile/erpMobile/pushController/getPositionIdByOper', { params: {} })
    this.output(data)
  }
}
