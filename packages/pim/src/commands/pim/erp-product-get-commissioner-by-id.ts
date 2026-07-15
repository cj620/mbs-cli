// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetCommissionerById extends MBSCommand {
  static description = '根据当前用户ID判断是否为专员：根据当前登录用户（由登录态/会话识别，无需前端显式传参）查询其是否为采购/库存专员，返回布尔型权限标志。仪表盘据此判断是否展示退款日报等总监级模块；SKU详情页据此判断备货申请金额≥1000时是否需要专员审批。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetCommissionerById)

    const data = await this.client.post('/erpProduct/erpProduct/product/getCommissionerById', {})
    this.output(data)
  }
}
