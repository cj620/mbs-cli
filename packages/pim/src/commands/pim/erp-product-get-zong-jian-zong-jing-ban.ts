// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetZongJianZongJingBan extends MBSCommand {
  static description = '判断当前用户是否总监/总经办：进入SKU详情页采购数量表单时自动调用，判断当前登录用户是否为总监/总经办角色，返回布尔值写入 state.generalManager；为 true 时跳过库存价/采购数量上限等业务校验规则。无入参，登录身份取自后端会话/Token。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetZongJianZongJingBan)

    const data = await this.client.post('/erpProduct/erpProduct/product/getZongJianZongJingBan', {})
    this.output(data)
  }
}
