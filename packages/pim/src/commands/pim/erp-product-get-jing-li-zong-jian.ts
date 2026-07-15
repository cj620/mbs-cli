// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetJingLiZongJian extends MBSCommand {
  static description = '判断当前用户是否经理总监(getJingLiZongJian)：经理工作台(Dashboard)加载时调用，判断当前登录用户是否为「经理/总监」角色；返回结果 obj 为真时展示「经理考核(managerAssessment)」模块。无请求参数，纯身份/权限校验型接口。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetJingLiZongJian)

    const data = await this.client.post('/erpProduct/erpProduct/product/getJingLiZongJian', {})
    this.output(data)
  }
}
