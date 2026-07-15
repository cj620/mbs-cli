// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetShopByGroup extends MBSCommand {
  static description = '按店长查询其分组下店铺：必发SPU管理页"换店铺/重新派发"功能：根据选定的店长(oper)查询该店长所管辖分组下的全部店铺，前端用返回的店铺列表渲染 shopnameTemplate(name=chname 多选复选框)并默认全选，供后续重新派发/换店铺使用。'

  static flags = {
    oper: Flags.string({ description: '店长(取自页面"请选择店长"下拉 #shopmanger 的值，即店长姓名 employee_name；多选时以逗号拼接)。为空则查询不限店长' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetShopByGroup)

    const data = await this.client.post('/erpProduct/erpProduct/stockProduct/getShopByGroup', {}, { params: { "oper": flags.oper } })
    this.output(data)
  }
}
