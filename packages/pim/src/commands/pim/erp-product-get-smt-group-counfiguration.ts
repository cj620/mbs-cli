// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSmtGroupCounfiguration extends MBSCommand {
  static description = '获取SMT自动刊登模板分组配置：SMT(速卖通)自动刊登店铺参数设置弹窗中，根据店铺类型(零售/批发客户为主)加载该类型下可用的自动刊登模板分组列表，用于渲染自动刊登模板下拉框。仅当模板下拉项不足时才发起请求。'

  static flags = {
    isAutopublish: Flags.string({ description: '是否自动刊登标识，前端固定传1(自动刊登场景)', required: true }),
    isCountry: Flags.string({ description: '店铺类型(客户类型)。1=零售客户为主;0=批发客户为主;空=未选。来源下拉框#isCountry' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSmtGroupCounfiguration)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/getSmtGroupCounfiguration', { "isAutopublish": flags.isAutopublish, "isCountry": flags.isCountry })
    this.output(data)
  }
}
